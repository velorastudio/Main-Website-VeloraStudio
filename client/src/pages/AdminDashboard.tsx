import { motion } from "framer-motion";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { useEffect } from "react";
import {
  Users, Mail, Trash2, LogOut, TrendingUp, Clock, Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { apiRequest, queryClient as qClient } from "@/lib/queryClient";
import { buildUrl } from "@shared/routes";
import type { Lead } from "@shared/schema";

function getToken() {
  return localStorage.getItem("admin_token") || "";
}

async function authFetch(url: string) {
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  if (res.status === 401) throw new Error("Unauthorized");
  return res.json();
}

export default function AdminDashboard() {
  const [, navigate] = useLocation();
  const queryClient = useQueryClient();

  const { data: admin, isError: adminError } = useQuery({
    queryKey: ["/api/admin/me"],
    queryFn: () => authFetch("/api/admin/me"),
    retry: false,
  });

  const { data: leads = [], isLoading } = useQuery<Lead[]>({
    queryKey: ["/api/admin/leads"],
    queryFn: () => authFetch("/api/admin/leads"),
    enabled: !!admin,
    retry: false,
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(buildUrl("/api/admin/leads/:id", { id }), {
        method: "DELETE",
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      if (!res.ok) throw new Error("Failed to delete");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/admin/leads"] });
    },
  });

  useEffect(() => {
    if (adminError) {
      navigate("/admin");
    }
  }, [adminError]);

  function handleLogout() {
    localStorage.removeItem("admin_token");
    navigate("/admin");
  }

  const newLeads = leads.filter((l) => l.status === "new").length;

  if (isLoading && !leads.length) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-white/5 bg-card/50 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">V</span>
            </div>
            <div>
              <div className="font-semibold text-sm">Velora Studio</div>
              <div className="text-xs text-muted-foreground">Admin Dashboard</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 glass rounded-full px-3 py-1.5 text-sm">
              <Shield className="w-3 h-3 text-primary" />
              <span className="text-muted-foreground">{admin?.username || "admin"}</span>
            </div>
            <Button size="sm" variant="ghost" onClick={handleLogout} data-testid="button-logout">
              <LogOut className="w-4 h-4 mr-1" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground mb-8">Manage your leads and client inquiries</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
        >
          {[
            { icon: Users, label: "Total Leads", value: leads.length, color: "text-blue-400" },
            { icon: TrendingUp, label: "New Leads", value: newLeads, color: "text-green-400" },
            { icon: Clock, label: "Avg Response", value: "< 24h", color: "text-amber-400" },
          ].map((stat, i) => (
            <div key={stat.label} className="glass rounded-2xl p-6" data-testid={`card-stat-${i}`}>
              <div className="flex items-center gap-3 mb-2">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
              <div className="text-3xl font-bold">{stat.value}</div>
            </div>
          ))}
        </motion.div>

        {/* Leads Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl"
        >
          <div className="px-6 py-4 border-b border-white/5 flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            <h2 className="font-semibold">Client Inquiries</h2>
            <Badge variant="secondary" className="ml-auto">
              {leads.length} total
            </Badge>
          </div>

          {leads.length === 0 ? (
            <div className="py-16 text-center text-muted-foreground" data-testid="text-no-leads">
              No leads yet. They'll appear here when clients submit the contact form.
            </div>
          ) : (
            <div className="divide-y divide-white/5">
              {leads.map((lead, i) => (
                <motion.div
                  key={lead.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-5 flex flex-col md:flex-row md:items-center gap-4"
                  data-testid={`row-lead-${lead.id}`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <div className="font-semibold text-sm">{lead.name}</div>
                      {lead.status === "new" && (
                        <Badge className="text-xs">New</Badge>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">{lead.email}</div>
                    {lead.company && (
                      <div className="text-xs text-muted-foreground mt-0.5">{lead.company}</div>
                    )}
                  </div>

                  <div className="flex flex-col gap-1 text-sm min-w-[120px]">
                    {lead.budget && (
                      <div className="text-primary font-medium">{lead.budget}</div>
                    )}
                    <div className="text-xs text-muted-foreground">
                      {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString() : "—"}
                    </div>
                  </div>

                  <div className="md:max-w-xs text-sm text-muted-foreground line-clamp-2 flex-1">
                    {lead.message}
                  </div>

                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-destructive flex-shrink-0"
                    onClick={() => deleteMutation.mutate(lead.id)}
                    disabled={deleteMutation.isPending}
                    data-testid={`button-delete-lead-${lead.id}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

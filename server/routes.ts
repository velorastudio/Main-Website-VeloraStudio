import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import rateLimit from "express-rate-limit";

const JWT_SECRET = process.env.SESSION_SECRET || "velora-studio-secret-2024";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: { message: "Too many requests, please try again later." },
});

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  message: { message: "Too many contact form submissions. Please try again later." },
});

function verifyToken(req: any, res: any, next: any) {
  const auth = req.headers["authorization"];
  if (!auth || !auth.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const token = auth.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    req.admin = decoded;
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

async function seedAdmin() {
  const existing = await storage.getAdminByUsername("admin");
  if (!existing) {
    const hash = await bcrypt.hash("velora2024", 10);
    await storage.createAdmin("admin", hash);
    console.log("Admin seeded: username=admin, password=velora2024");
  }
}

async function seedLeads() {
  const existing = await storage.getLeads();
  if (existing.length === 0) {
    await storage.createLead({
      name: "James Harrington",
      email: "james@nexatech.io",
      company: "NexaTech Solutions",
      budget: "$5,000 - $10,000",
      message: "We need a complete website redesign for our SaaS platform. Looking for a premium agency that understands modern UX.",
    });
    await storage.createLead({
      name: "Sophia Laurent",
      email: "sophia@luxebrands.co",
      company: "Luxe Brands Co.",
      budget: "$10,000 - $25,000",
      message: "We're launching a new luxury e-commerce line and need a world-class digital presence. Portfolio looked stunning.",
    });
    await storage.createLead({
      name: "Marcus Chen",
      email: "marcus@founderhub.vc",
      company: "Founder Hub VC",
      budget: "$2,500 - $5,000",
      message: "Looking for a fast-turnaround landing page for our upcoming investor summit. Need premium design.",
    });
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.use("/api", limiter);

  await seedAdmin();
  await seedLeads();

  app.post(api.leads.create.path, contactLimiter, async (req, res) => {
    try {
      const input = api.leads.create.input.parse(req.body);
      const lead = await storage.createLead(input);
      res.status(201).json({ id: lead.id, message: "Thank you! We'll be in touch soon." });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        });
      }
      console.error(err);
      res.status(500).json({ message: "Something went wrong. Please try again." });
    }
  });

  app.post(api.admin.login.path, async (req, res) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ message: "Username and password required" });
      }
      const admin = await storage.getAdminByUsername(username);
      if (!admin) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const valid = await bcrypt.compare(password, admin.passwordHash);
      if (!valid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const token = jwt.sign(
        { id: admin.id, username: admin.username },
        JWT_SECRET,
        { expiresIn: "24h" }
      );
      res.json({ token, admin: { id: admin.id, username: admin.username } });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get(api.admin.me.path, verifyToken, async (req: any, res) => {
    res.json({ id: req.admin.id, username: req.admin.username });
  });

  app.get(api.leads.list.path, verifyToken, async (_req, res) => {
    try {
      const allLeads = await storage.getLeads();
      res.json(allLeads);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.delete(api.leads.delete.path, verifyToken, async (req, res) => {
    try {
      const id = Number(req.params.id);
      const lead = await storage.getLead(id);
      if (!lead) {
        return res.status(404).json({ message: "Lead not found" });
      }
      await storage.deleteLead(id);
      res.status(204).send();
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}

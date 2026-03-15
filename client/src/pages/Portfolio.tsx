import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

type Project = {
  id: number;
  title: string;
  category: string;
  desc: string;
  tech: string[];
  result: string;
  color: string;
  url: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Resturant System",
    category: "Restaurant",
    desc: "This projecct is a modern restaurant website demo designed to showcase how local restaurants can present their brand online. this website featurea a clean layout, engaging visuals, smooth navigation, and sections for menu, about and contact information. it is built to help restaurants attract customers, display their dishes and allow visitors to easily connect or place orders.",
    tech: ["React", "Node.js", "PostgreSQL", "D3.js"],
    result: "280% increase in user engagement within 3 months of launch.",
    url: "https://resturant-velorastudio.onrender.com",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 2,
    title: "Luxe Commerce",
    category: "E-commerce",
    desc: "This project is a modern ecommerce website demo created to demonstrate how businesses can sell their products online. This websites features a clean layout, smooth navigation, product showcase section, and a user friendly shopping experience. it is designed to help businesses display products, attract customers, and grow their sales through a professional online store.",
    tech: ["Next.js", "Stripe", "Framer Motion"],
    result: "340% increase in conversion rate, $2M+ GMV in first quarter.",
    url: "https://ecommerce-velorastudio.onrender.com",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: 3,
    title: "Coching Site",
    category: "E-commerce",
    desc: "A modern ecommerce website concept designed to showcase how businesses can present and sell product online with a clean design, organised product listings, and an easy browsing experience.",
    tech: ["html", "css", "javascript"],
    result: "500+ registrations in 48 hours. Zero technical issues during event.",
    url: "https://ecommerce2-velorastudio.vercel.app",
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    id: 4,
    title: "Professional Portfolio",
    category: "Portfolio",
    desc: "A modern portfolio wensite concept designed to highlight personal work, skills, and achievements through a clean and visually engaging design.",
    tech: ["React", "Python","PostgreSQL"],
    result: "Reduced report generation time from 8 hours to 4 minutes.",
    url: "https://portfolio-velorastudio.onrender.com",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: 5,
    title: "Frontend Portfolio",
    category: "Portfolio",
    desc: "This demo website shows how individuals such as designers, developers, photographers, or freelancers can create a professional online identity. The design focuses on showcasing projects, highlighting skills, and making it easy for potential clients or employers to connect.",
    tech: ["html", "css", "javascript"],
    result: "90% reduction in appointment no-shows. 4.9/5 patient satisfaction.",
    url: "https://portfolio2-velorastudio.vercel.app",
    color: "from-cyan-500/20 to-blue-500/20",
  },
];

const categories = ["All", "Restaurant", "E-commerce", "Portfolio"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 text-center relative overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-6"
          >
            Portfolio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Work That <span className="gold-gradient">Speaks</span> for Itself
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-xl mx-auto"
          >
            Every project is a partnership. Every outcome — measurable, meaningful, and extraordinary.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`button-filter-${cat.replace(/\s/g, "-").toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  variants={fadeUp}
                  className={`relative rounded-2xl bg-gradient-to-br ${project.color} glass h-64 cursor-pointer group hover-elevate`}
                  onClick={() => setSelectedProject(project)}
                  data-testid={`card-project-${project.id}`}
                >
                  <div className="absolute inset-0 bg-grid opacity-20 rounded-2xl" />
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <div className="text-xs text-primary font-medium uppercase tracking-wider mb-1">{project.category}</div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.desc}</p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-1 glass px-3 py-1 rounded-full text-xs text-primary">
                    View Case Study <ArrowRight className="w-3 h-3" />
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative z-10 glass rounded-2xl p-8 max-w-xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="text-xs text-primary font-medium uppercase tracking-wider mb-1">{selectedProject.category}</div>
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setSelectedProject(null)}
                data-testid="button-close-modal"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">{selectedProject.desc}</p>
            <div className="mb-6">
              <div className="text-sm font-semibold mb-3">Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full glass text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">View Site</div>
              {/* <p className="text-sm text-foreground">{selectedProject.result}</p> */}
              <a href={selectedProject.url} target="_blanl" rel="nooperner noreferrer" className="text-sm text-foreground hover:underline">{selectedProject.url}</a>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, ShoppingCart, Search, RefreshCw, Zap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
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

const services = [
  {
    icon: Code2,
    title: "Custom Web Development",
    desc: "We engineer fast, scalable, and secure web applications using the latest technologies. Every line of code is written with performance and maintainability in mind.",
    features: ["React / Next.js / Node.js", "API integrations", "Real-time features", "Performance optimized", "Mobile-first responsive"],
    color: "from-blue-500/10 to-purple-500/10",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Beautiful isn't just aesthetic — it's functional. We design interfaces that guide users intuitively and convert with purpose.",
    features: ["Figma prototyping", "User research", "Design systems", "Accessibility first"],
    color: "from-pink-500/10 to-rose-500/10",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    desc: "Revenue-driving stores built to scale. From product catalog to checkout flow — we make buying frictionless.",
    features: ["Custom storefronts", "Payment gateways", "Inventory management", "Analytics & reporting"],
    color: "from-amber-500/10 to-orange-500/10",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    desc: "Your old site is costing you clients. We modernize your digital presence while preserving your brand equity and SEO rankings.",
    features: ["Audit & analysis", "Brand modernization", "Migration planning", "Zero downtime", "SEO preservation"],
    color: "from-green-500/10 to-teal-500/10",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Rank where it matters. We combine technical SEO, content strategy, and conversion optimization to drive sustainable organic growth.",
    features: ["Technical SEO audit", "Keyword research", "On-page optimization", "Link building", "Monthly reporting"],
    color: "from-purple-500/10 to-indigo-500/10",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    desc: "A 1-second delay costs 7% in conversions. We audit, diagnose, and optimize your site for blazing-fast load times.",
    features: ["Core Web Vitals", "Caching strategies", "Image optimization", "Code splitting"],
    color: "from-yellow-500/10 to-amber-500/10",
  },
];

const packages = [
  {
    name: "Starter",
    price: "₹14,999",
    desc: "Perfect for startups and small businesses launching online.",
    features: [
      "5-Page Fully Responsive Website",
      "Clean & Modern UI/UX Design",
      "Basic On-Page SEO Setup",
      "Mobile & Speed Optimized",
      "1 Month Post-Launch Support",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    price: "₹24,999",
    desc: "For growing brands ready to dominate their digital market.",
    features: [
      "Up to 15 pages",
      "Custom UI/UX design",
      "Contact Form Integration",
      "Advanced SEO",
      "Analytics dashboard",
      "2 months support",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "Custom",
    desc: "Enterprise-grade solutions for global brands who demand the best.",
    features: [
      "Unlimited pages",
      "Full custom design system",
      "Web app / E-commerce",
      "API integrations",
      "Admin dashboard",
      "6 months support",
      "Priority response",
    ],
    highlight: false,
  },
];

export default function Services() {
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
            Our Services
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Premium Services for <span className="gold-gradient">Premium Results</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Every service is crafted with precision, purpose, and passion. We don't just deliver websites — we deliver competitive advantages.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  className={`rounded-2xl glass bg-gradient-to-br ${service.color} p-8 hover-elevate`}
                  data-testid={`card-service-${i}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-4">
                Pricing
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Simple, <span className="gold-gradient">Transparent Pricing</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                No hidden fees. No surprises. Just premium work at fair prices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {packages.map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  variants={fadeUp}
                  className={`rounded-2xl p-8 relative ${
                    pkg.highlight
                      ? "bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 glow-gold"
                      : "glass"
                  }`}
                  data-testid={`card-pricing-${i}`}
                >
                  {pkg.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="font-bold text-xl mb-1">{pkg.name}</h3>
                    <div className="text-3xl font-bold gold-gradient mb-2">{pkg.price}</div>
                    <p className="text-sm text-muted-foreground">{pkg.desc}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button
                      className="w-full"
                      variant={pkg.highlight ? "default" : "outline"}
                      data-testid={`button-pricing-${pkg.name.toLowerCase()}`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}

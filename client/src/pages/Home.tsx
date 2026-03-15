import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Code2, Palette, ShoppingCart, Search, Zap, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const services = [
  { icon: Code2, title: "Custom Web Development", desc: "Blazing fast, pixel-perfect websites built for scale and performance." },
  { icon: Palette, title: "UI/UX Design", desc: "Intuitive, beautiful interfaces that convert visitors into loyal customers." },
  { icon: ShoppingCart, title: "E-commerce Solutions", desc: "Revenue-driving online stores built to dominate your market." },
  { icon: Search, title: "SEO Optimization", desc: "Rank higher, drive organic traffic, and grow your digital presence." },
];

const portfolioItems = [
  { title: "Resturant System", category: "Restaurant", color: "from-blue-500/20 to-purple-500/20" },
  { title: "Luxe Commerce", category: "E-commerce", color: "from-amber-500/20 to-orange-500/20" },
  { title: "Coching Site", category: "E-commerce", color: "from-green-500/20 to-teal-500/20" },
  { title: "Professional Portfolio", category: "Portfolio", color: "from-pink-500/20 to-rose-500/20" },
];

const testimonials = [
  {
    name: "James Harrington",
    role: "CEO, NexaTech Solutions",
    text: "Velora Studio transformed our digital presence completely. The attention to detail and premium quality is unmatched. Worth every penny.",
    rating: 5,
  },
  {
    name: "Sophia Laurent",
    role: "Founder, Luxe Brands",
    text: "The most talented agency I've worked with in 10 years. They didn't just build a website — they built our brand identity online.",
    rating: 5,
  },
  {
    name: "Marcus Chen",
    role: "Partner, Founder Hub VC",
    text: "Fast, professional, and the results speak for themselves. Our conversion rate jumped 340% after launch.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/80 to-background pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-8"
          >
            <Zap className="w-3 h-3 text-primary" />
            Premium Digital Agency · Est. 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-8"
          >
            Where{" "}
            <span className="gold-gradient">Code</span>
            <br />
            Meets{" "}
            <span className="gold-gradient">Creativity</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We craft premium digital experiences for global brands who demand excellence. 
            From concept to launch — beautifully engineered.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/contact">
              <Button size="lg" className="gap-2 glow-gold" data-testid="button-hero-book-call">
                Book a Call <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="gap-2" data-testid="button-hero-view-work">
                View Our Work <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-8 mt-16 text-sm text-muted-foreground"
          >
            {[["10+", "Demo Projects"], ["100%", "Building Trust Through Quality & Transparency"], ["48hr", "Response Time"]].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-bold text-primary">{num}</div>
                <div>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-4">
                What We Do
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Services That <span className="gold-gradient">Drive Results</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Every service we offer is designed to maximize your ROI and elevate your brand above the competition.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  className="glass rounded-2xl p-6 hover-elevate cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center mt-10">
              <Link href="/services">
                <Button variant="outline" className="gap-2" data-testid="button-view-all-services">
                  View All Services <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 px-6 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-4">
                Our Work
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Recent <span className="gold-gradient">Projects</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A glimpse into the digital experiences we've crafted for visionary brands.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className={`relative rounded-2xl overflow-hidden h-56 bg-gradient-to-br ${item.color} glass hover-elevate cursor-pointer group`}
                  data-testid={`card-portfolio-${i}`}
                >
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <div className="text-xs text-primary font-medium mb-1 uppercase tracking-wider">{item.category}</div>
                    <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center mt-10">
              <Link href="/portfolio">
                <Button variant="outline" className="gap-2" data-testid="button-view-portfolio">
                  View Full Portfolio <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>




      {/* Testimonials */}
{/*
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-4">
                Client Stories
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                What Clients <span className="gold-gradient">Say</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  variants={fadeUp}
                  className="glass rounded-2xl p-6"
                  data-testid={`card-testimonial-${i}`}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-6">"{t.text}"</p>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

*/}
      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <motion.div
              variants={fadeUp}
              className="relative rounded-3xl glass p-12 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10 pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Ready to Build Something <span className="gold-gradient">Extraordinary?</span>
                </h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Let's talk about your project. We're selective about who we work with — because we deliver nothing less than excellence.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="gap-2 glow-gold" data-testid="button-cta-contact">
                    Start Your Project <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}

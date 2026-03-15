import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Lightbulb, Globe } from "lucide-react";
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
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

const milestones = [
  { year: "2026", title: "Founded", desc: "Velora Studio was born from a simple belief: businesses deserve digital experiences that match their ambitions." },
  { year: "2026", title: "The Beginning", desc: "A vision to merge technology, creativity, and strategy." },
  { year: "2026", title: "The Evolution", desc: "From building websites to engineering scalable digital systems." },
  { year: "2026", title: "The Next Chapter", desc: "Launching our AI-powered design system and premium maintenance plans for our growing client base." },
];

const values = [
  { icon: Target, title: "Precision", desc: "Every pixel, every line of code — crafted with intention." },
  { icon: Eye, title: "Clarity", desc: "Clear communication, transparent process, zero surprises." },
  { icon: Lightbulb, title: "Innovation", desc: "We stay ahead of the curve so you don't have to." },
  { icon: Globe, title: "Global Standard", desc: "World-class quality delivered for clients worldwide." },
];

const team = [
  { name: "Aryan Singh", role: "Founder & Creative Director", bio: "As the founder, Aryan believes technology is more than just code — it’s a strategic tool for transformation. His mission is to bridge creativity and engineering to build intelligent digital ecosystems that empower brands globally.", initials: "AS",image: "/team/Aryan.jpg", color: "from-amber-500/30 to-orange-500/30" },
  { name: "Chirag R.G", role: "HR & Sales Manager", bio: "Responsible for managing team operations, recruitment, client communication. Focused on driving business growth and helping local businesses to build a strong online presence through professional website solutions.", initials: "NR",image: "/team/Chirag.jpg", color: "from-blue-500/30 to-purple-500/30" },
  { name: "Naveen", role: "Social Media & Graphic Designer", bio: "Responsible for creating social media content, engaging with people and visually appealing designs that represent the brand. Focuses on creative graphics, branding, and digital visuals to help businesses attract and connect their audience.", initials: "JP",image: "/team/Naveen.jpg", color: "from-green-500/30 to-teal-500/30" },
  { name: "Anurag", role: "Video Editor", bio: "Responsible for producing & editing high-quality videos that represent the brand and communicate its message effectively. Focuses on creative, editing, smooth transitions and professional video editing to enhance brand presence and audience engagement.", initials: "JP",image: "/team/Anurag.jpg", color: "from-green-500/30 to-teal-500/30" },
];

export default function About() {
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
            Our Story
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Built by <span className="gold-gradient">Makers</span>.<br />
            For <span className="gold-gradient">Visionaries</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Velora Studio is a premium digital agency where engineering precision meets creative excellence. 
            We believe that great design changes behaviour — and great code makes it last.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower ambitious businesses with digital experiences so compelling they become unfair competitive advantages. 
                  We don't build websites. We build the digital future of your brand.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="glass rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A world where every great idea has a digital presence worthy of it. 
                  To be the studio that visionary founders, global brands, and bold entrepreneurs trust to bring their most ambitious ideas to life.
                </p>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What We <span className="gold-gradient">Stand For</span></h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <motion.div key={v.title} variants={fadeUp} className="glass rounded-2xl p-6 text-center" data-testid={`card-value-${i}`}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-4">
                Our Journey
              </div>
              <h2 className="text-4xl font-bold mb-4">
                Growth <span className="gold-gradient">Timeline</span>
              </h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  variants={fadeUp}
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  data-testid={`timeline-item-${i}`}
                >
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary top-2" />
                  <div className={`md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="text-primary font-bold text-lg mb-1">{m.year}</div>
                    <div className="glass rounded-xl p-4">
                      <h3 className="font-bold mb-2">{m.title}</h3>
                      <p className="text-sm text-muted-foreground">{m.desc}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <motion.div variants={fadeUp} className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-4">
                The Team
              </div>
              <h2 className="text-4xl font-bold mb-4">The People Behind the <span className="gold-gradient">Magic</span></h2>
              <h4 className="text-1xl mb-4">Our team works together to help businesses build a strong digital presence. </h4>
              <h4 className="text-1xl mb-4">From website development to creative design and video editing, we focus on delivering professional digital solutions that help brands grow online. </h4>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <motion.div key={member.name} variants={fadeUp} className="glass rounded-2xl p-8 text-center" data-testid={`card-team-${i}`}>
                  {/* <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-2xl font-bold text-foreground">{member.initials}</span>
                  </div> */}
                  <div className="w-32 h-32 mx-auto mb-4">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover object-top border-2 border-white/20"
                      />
                    ) : (
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                        <span className="text-2xl font-bold text-foreground">{member.initials}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <div className="text-primary text-sm font-medium mb-4">{member.role}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
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

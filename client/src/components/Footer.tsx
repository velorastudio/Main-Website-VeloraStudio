import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Mail, } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Web Development", href: "/services" },
    { label: "UI/UX Design", href: "/services" },
    { label: "E-commerce", href: "/services" },
    { label: "SEO Optimization", href: "/services" },
  ],
  Legal: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
};

const socials = [
  { icon: Twitter, href: "https://x.com/VeloraStudio_", label: "Twitter"},
  { icon: Facebook, href: "https://facebook.com/Officialvelorastudio/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/official_velora_studio", label: "Instagram" },
  { icon: Mail, href: "mailto:officialvelorastudio@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">V</span>
              </div>
              <span className="font-bold text-xl tracking-tight">
                <span className="gold-gradient">Velora</span>
                <span className="text-foreground/80"> Studio</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Where Code Meets Creativity. We craft premium digital experiences for global brands who demand excellence.
            </p>
            <div className="flex items-center gap-4 mt-6 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`link-social-${s.label.toLowerCase()}`}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Velora Studio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with passion for premium clients worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}

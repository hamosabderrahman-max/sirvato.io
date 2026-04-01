import Link from "next/link";
import { Zap, Mail, ExternalLink, Globe, Code } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "/#engine" },
    { label: "Pricing", href: "/pricing" },
    { label: "Integrations", href: "/#engine" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  Support: [
    { label: "Documentation", href: "#" },
    { label: "Contact", href: "/contact" },
    { label: "Status", href: "#" },
    { label: "Community", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

const socials = [
  { icon: ExternalLink, href: "#", label: "Twitter" },
  { icon: Globe, href: "#", label: "LinkedIn" },
  { icon: Code, href: "#", label: "GitHub" },
  { icon: Mail, href: "/contact", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-100 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-neon flex items-center justify-center shadow-[0_0_15px_rgba(0,255,136,0.4)]">
                <Zap className="w-4 h-4 text-dark fill-dark" />
              </div>
              <span className="text-xl font-heading font-bold tracking-widest text-white">
                SIRVATO
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              The intelligence engine for modern business. AI-powered insights
              at scale.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-dark-300 border border-white/5 flex items-center justify-center text-white/40 hover:text-neon hover:border-neon/30 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-heading font-semibold text-white tracking-wider uppercase mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Sirvato.io. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
            <span className="text-white/30 text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

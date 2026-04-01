import Link from "next/link";
import SirvatoLogo from "./SirvatoLogo";

const footerLinks = {
  Product: [
    { href: "/os", label: "Sirvato OS" },
    { href: "/brain", label: "Brain 3.0" },
    { href: "/modules", label: "Modules" },
    { href: "/quantum", label: "Quantum Layer" },
  ],
  Ecosystem: [
    { href: "/civilization", label: "Civilization" },
    { href: "/multiverse", label: "Multiverse" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-deep-graphite border-t border-neon-green/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <SirvatoLogo />
              <span className="font-grotesk font-bold text-xl text-white">Sirvato</span>
            </Link>
            <p className="text-soft-grey text-sm leading-relaxed max-w-xs">
              The Autonomous Digital Empire Engine. Build, manage, and scale with AI.
            </p>
            <div className="mt-6">
              <span className="inline-block px-3 py-1 text-xs font-grotesk text-neon-green border border-neon-green/30 rounded-full">
                v3.0 — Brain Active
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-grotesk font-semibold text-white text-sm uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-soft-grey text-sm hover:text-neon-green transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-neon-green/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-soft-grey text-xs">
            © {new Date().getFullYear()} Sirvato. All rights reserved.
          </p>
          <p className="text-soft-grey text-xs">
            Built with{" "}
            <span className="text-neon-green">autonomy</span> and{" "}
            <span className="text-neon-green">intelligence</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

interface PricingTier {
  name: string;
  tagline: string;
  price: string;
  features: string[];
  highlight?: boolean;
  cta: string;
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    tagline: "For creators and small teams who want to launch their first autonomous systems.",
    price: "Contact us",
    features: [
      "Sirvato OS access",
      "2 Active Engines",
      "Brain 3.0 (Standard)",
      "Basic Memory Layer",
      "Email support",
      "1 Universe",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    tagline: "For businesses and agencies that need robust, scalable AI operations.",
    price: "Contact us",
    features: [
      "Full Sirvato OS",
      "All 7 Engines",
      "Brain 3.0 (Advanced)",
      "Extended Memory Layer",
      "Quantum Layer access",
      "Priority support",
      "5 Universes",
    ],
    highlight: true,
    cta: "Start Pro",
  },
  {
    name: "God-Mode",
    tagline: "For global ecosystems that require full autonomy, multiverse exploration, and enterprise-grade control.",
    price: "Contact us",
    features: [
      "Everything in Pro",
      "Unlimited Engines",
      "Brain 3.0 (Sovereign)",
      "Full Multiverse access",
      "Civilization layer",
      "Dedicated infrastructure",
      "White-glove onboarding",
      "Unlimited Universes",
    ],
    cta: "Unlock God-Mode",
  },
];

export default function PricingTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={`flex flex-col p-8 rounded-lg border transition-all duration-300 ${
            tier.highlight
              ? "border-neon-green shadow-neon-sm bg-neon-green/5"
              : "border-neon-green/20 bg-deep-graphite"
          }`}
        >
          {tier.highlight && (
            <span className="mb-4 self-start text-xs font-grotesk font-bold text-black bg-neon-green px-2 py-0.5 rounded-full uppercase tracking-wider">
              Most Popular
            </span>
          )}
          <h3 className="font-grotesk font-bold text-2xl text-white mb-1">{tier.name}</h3>
          <p className="text-soft-grey text-sm mb-6 leading-relaxed">{tier.tagline}</p>
          <div className="mb-6">
            <span className="font-grotesk font-bold text-3xl text-neon-green">{tier.price}</span>
          </div>
          <ul className="flex flex-col gap-2 mb-8">
            {tier.features.map((f, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-soft-grey">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7l4 4 6-6" stroke="#39FF14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className={`mt-auto py-3 px-6 rounded-md text-sm font-grotesk font-semibold text-center transition-all duration-200 ${
              tier.highlight
                ? "bg-neon-green text-black hover:shadow-neon-sm"
                : "border border-neon-green/40 text-neon-green hover:border-neon-green hover:shadow-neon-sm"
            }`}
          >
            {tier.cta}
          </Link>
        </div>
      ))}
    </div>
  );
}

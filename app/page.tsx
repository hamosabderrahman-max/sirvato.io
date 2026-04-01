import type { Metadata } from "next";
import Link from "next/link";
import AnimatedBackground from "@/components/AnimatedBackground";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Sirvato — The Autonomous Digital Empire Engine",
  description:
    "A next-generation AI system that builds, manages, and scales your digital empire autonomously.",
};

const sections = [
  {
    label: "Core System",
    title: "Sirvato OS",
    description:
      "Sirvato OS is the core operating system that orchestrates logic, memory, triggers, and intelligent routing. It connects every module, every engine, and every decision into one coherent flow.",
    href: "/os",
  },
  {
    label: "Cognition",
    title: "Sirvato Brain 3.0",
    description:
      "Sirvato Brain 3.0 is a multi-agent cognitive architecture with synthetic emotions, meta-memory, and self-optimization. It learns from outcomes, refines strategies, and continuously improves how your digital empire operates.",
    href: "/brain",
  },
  {
    label: "Execution",
    title: "Sirvato Engines",
    description:
      "Sirvato Engines are specialized AI modules for branding, content, ecommerce, sponsors, monitoring, scaling, and support. Each engine is autonomous, yet perfectly integrated into the Sirvato ecosystem.",
    href: "/modules",
  },
  {
    label: "Infrastructure",
    title: "Sirvato Cloud",
    description:
      "Sirvato Cloud is a globally distributed infrastructure designed for speed, resilience, and infinite scalability. It ensures that your operations stay online, fast, and secure across regions and markets.",
    href: "/os",
  },
  {
    label: "Exploration",
    title: "Sirvato Multiverse",
    description:
      "Sirvato Multiverse is a network of parallel AI universes that explore different strategies in parallel. They collaborate, compare outcomes, and converge on the most effective paths for growth.",
    href: "/multiverse",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-neon-green/30 bg-neon-green/5">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span className="text-xs font-grotesk text-neon-green tracking-wider uppercase">
              System Online — Brain 3.0 Active
            </span>
          </div>
          <h1 className="font-grotesk font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-tight tracking-tight mb-6">
            Sirvato —{" "}
            <br className="hidden sm:block" />
            <span className="text-neon-green">The Autonomous</span>
            <br />
            Digital Empire Engine
          </h1>
          <p className="text-soft-grey text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            A next-generation AI system that builds, manages, and scales your
            digital empire autonomously.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-neon-green text-black font-grotesk font-bold rounded-md hover:shadow-neon-md transition-all duration-300 text-lg"
            >
              Start Sirvato
            </Link>
            <Link
              href="/modules"
              className="px-8 py-4 border border-neon-green/40 text-white font-grotesk font-semibold rounded-md hover:border-neon-green hover:text-neon-green transition-all duration-300 text-lg"
            >
              Explore Modules
            </Link>
          </div>
          <div className="mt-20 flex items-center justify-center gap-8 text-sm text-soft-grey">
            <div className="text-center">
              <div className="font-grotesk font-bold text-2xl text-neon-green">7</div>
              <div>Active Engines</div>
            </div>
            <div className="w-px h-8 bg-neon-green/20" />
            <div className="text-center">
              <div className="font-grotesk font-bold text-2xl text-neon-green">∞</div>
              <div>Universes</div>
            </div>
            <div className="w-px h-8 bg-neon-green/20" />
            <div className="text-center">
              <div className="font-grotesk font-bold text-2xl text-neon-green">3.0</div>
              <div>Brain Version</div>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-soft-grey/40 text-xs">
          <span>Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-neon-green/40 to-transparent animate-bounce" />
        </div>
      </section>

      {/* Sections */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-32">
          {sections.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-16`}
            >
              <div className="flex-1">
                <span className="inline-block mb-3 text-xs font-grotesk font-semibold text-neon-green uppercase tracking-[0.2em]">
                  {s.label}
                </span>
                <h2 className="font-grotesk text-3xl sm:text-4xl font-bold text-white mb-4">
                  {s.title}
                </h2>
                <p className="text-soft-grey text-lg leading-relaxed max-w-xl mb-6">
                  {s.description}
                </p>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 text-neon-green font-grotesk font-semibold hover:gap-4 transition-all duration-200"
                >
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M1 8h14M9 2l6 6-6 6" stroke="#39FF14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
              <div className="flex-1 w-full">
                <div className="glass-card p-8 aspect-video flex items-center justify-center">
                  <span className="font-grotesk font-bold text-4xl text-neon-green/20 select-none">
                    {s.title.split(" ").slice(-1)[0].toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle
            label="Get Started"
            title="Your digital empire, automated."
            subtitle="Join the next generation of digital operators who use Sirvato to build and scale with AI."
            center
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="px-8 py-4 bg-neon-green text-black font-grotesk font-bold rounded-md hover:shadow-neon-md transition-all duration-300"
            >
              Start Sirvato
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 border border-neon-green/40 text-white font-grotesk font-semibold rounded-md hover:border-neon-green hover:text-neon-green transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

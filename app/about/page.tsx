import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Sirvato's mission, vision, and architecture.",
};

const sections = [
  {
    label: "Why we exist",
    title: "Mission",
    content:
      "Sirvato exists to empower creators, entrepreneurs, and organizations with autonomous AI ecosystems that can think, act, and scale on their behalf.",
  },
  {
    label: "Where we are going",
    title: "Vision",
    content:
      "Our vision is a world where digital systems evolve, adapt, and operate independently—freeing humans to focus on strategy, creativity, and impact.",
  },
  {
    label: "How we are built",
    title: "Architecture",
    content:
      "Sirvato is built as a layered architecture: Sirvato OS at the core, a Kernel for orchestration, Sirvato Brain 3.0 for cognition, specialized Engines for execution, a global Cloud layer for infrastructure, and a Multiverse layer for parallel exploration.",
  },
  {
    label: "What we believe",
    title: "Philosophy",
    content:
      "Minimal. Autonomous. Global. Sirvato is designed to be lean in interface, powerful in capability, and borderless in reach.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle
          label="About Sirvato"
          title="Built for autonomy. Designed for scale."
          subtitle="We believe the future belongs to systems that think, act, and evolve—without waiting for instructions."
        />
      </section>

      {/* Sections */}
      <section className="pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-16">
          {sections.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col lg:flex-row gap-12 items-start ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/3">
                <span className="text-xs font-grotesk text-neon-green uppercase tracking-[0.2em] mb-2 block">
                  {s.label}
                </span>
                <h2 className="font-grotesk text-3xl sm:text-4xl font-bold text-white">
                  {s.title}
                </h2>
              </div>
              <div className="lg:w-2/3 glass-card p-8">
                <p className="text-soft-grey text-lg leading-relaxed">{s.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neon-green/10">
        <SectionTitle
          label="Architecture"
          title="Layered by design."
          center
        />
        <div className="flex flex-col items-center gap-2 max-w-2xl mx-auto">
          {[
            "Multiverse Layer",
            "Sirvato Cloud",
            "Sirvato Engines",
            "Sirvato Brain 3.0",
            "Sirvato OS Kernel",
            "Sirvato OS Core",
          ].map((layer, i, arr) => (
            <div key={layer} className="w-full flex flex-col items-center">
              <div
                className={`w-full py-3 px-6 rounded-md text-center font-grotesk font-semibold text-sm transition-all duration-200 hover:shadow-neon-sm cursor-default ${
                  i === arr.length - 1
                    ? "bg-neon-green text-black"
                    : "glass-card text-white hover:text-neon-green"
                }`}
                style={{ width: `${100 - i * 8}%` }}
              >
                {layer}
              </div>
              {i < arr.length - 1 && (
                <div className="w-px h-4 bg-neon-green/40" />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

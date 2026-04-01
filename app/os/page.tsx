import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: "Sirvato OS",
  description: "The core operating system that orchestrates logic, memory, triggers, and intelligent routing.",
};

const osComponents = [
  {
    title: "Router",
    description:
      "The Router analyzes every request and routes it to the right engine, workflow, or universe.",
  },
  {
    title: "Trigger Engine",
    description:
      "The Trigger Engine activates automations based on events, thresholds, and conditions.",
  },
  {
    title: "Fallback Engine",
    description:
      "The Fallback Engine ensures that when something fails, an alternative path is automatically selected.",
  },
  {
    title: "Memory Layer",
    description:
      "The Memory Layer stores context, preferences, history, and outcomes to inform future decisions.",
  },
  {
    title: "Standard Output",
    description:
      "All outputs follow a structured format, making them easy to log, analyze, and integrate.",
  },
];

export default function OSPage() {
  return (
    <div className="pt-24">
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle
          label="Operating System"
          title="Sirvato OS"
          subtitle="The core operating system that orchestrates logic, memory, triggers, and intelligent routing. It connects every module, every engine, and every decision into one coherent flow."
        />

        {/* Diagram */}
        <div className="mb-24 max-w-3xl mx-auto">
          <div className="glass-card p-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-full grid grid-cols-2 gap-3">
                {["Router", "Trigger Engine"].map((block) => (
                  <div
                    key={block}
                    className="py-3 px-4 border border-neon-green/30 rounded-md text-center text-sm font-grotesk text-neon-green bg-neon-green/5"
                  >
                    {block}
                  </div>
                ))}
              </div>
              <div className="flex gap-16">
                <div className="w-px h-8 bg-neon-green/40" />
                <div className="w-px h-8 bg-neon-green/40" />
              </div>
              <div className="w-full grid grid-cols-3 gap-3">
                {["Fallback Engine", "Memory Layer", "Standard Output"].map(
                  (block) => (
                    <div
                      key={block}
                      className="py-3 px-4 border border-neon-green/20 rounded-md text-center text-xs font-grotesk text-soft-grey bg-deep-graphite"
                    >
                      {block}
                    </div>
                  )
                )}
              </div>
              <div className="w-px h-8 bg-neon-green/40" />
              <div className="py-4 px-8 bg-neon-green text-black font-grotesk font-bold rounded-md text-sm">
                Sirvato OS Core
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {osComponents.map((c) => (
            <FeatureCard key={c.title} title={c.title} description={c.description} />
          ))}
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: "Multiverse",
  description: "Explore Sirvato's parallel AI universes, cross-universe pipelines, and shared memory fields.",
};

const multiverseComponents = [
  {
    title: "Universes A–Ω",
    description:
      "Each universe explores a different configuration of strategies, assumptions, and parameters.",
  },
  {
    title: "Cross-Universe Pipelines",
    description:
      "Pipelines connect universes, allowing them to share insights and results.",
  },
  {
    title: "Shared Memory Fields",
    description:
      "A shared memory field aggregates learnings from all universes into a single evolving knowledge base.",
  },
];

export default function MultiversePage() {
  return (
    <div className="pt-24">
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle
          label="Multiverse"
          title="Infinite parallel exploration."
          subtitle="Sirvato Multiverse is a network of parallel AI universes that explore different strategies simultaneously—converging on the most effective paths for growth."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {multiverseComponents.map((c) => (
            <FeatureCard key={c.title} title={c.title} description={c.description} />
          ))}
        </div>

        {/* Universe visualization */}
        <div className="glass-card p-8">
          <h3 className="font-grotesk font-semibold text-white text-lg mb-8 text-center">
            Active Universes
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {["A", "B", "C", "D", "E", "F", "G", "H", "Ω"].map((u, i) => (
              <div
                key={u}
                className={`aspect-square flex items-center justify-center rounded-lg border font-grotesk font-bold text-lg transition-all duration-300 cursor-default ${
                  i === 0
                    ? "border-neon-green bg-neon-green/10 text-neon-green shadow-neon-sm"
                    : "border-neon-green/20 text-soft-grey hover:border-neon-green/40"
                }`}
              >
                {u}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-soft-grey mt-4">
            Universe A is currently active and leading.
          </p>
        </div>
      </section>
    </div>
  );
}

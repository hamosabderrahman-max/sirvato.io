import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: "Civilization",
  description: "Inside Sirvato: cognitive tribes, ecosystems, and evolving digital civilizations.",
};

const civilizationComponents = [
  {
    title: "Tribes",
    description:
      "Different cognitive tribes—creatives, analysts, strategists, guardians—coexist inside Sirvato.",
  },
  {
    title: "Ecosystems",
    description:
      "These tribes form ecosystems that specialize in branding, growth, support, and more.",
  },
  {
    title: "Evolution",
    description:
      "Strategies compete, cooperate, and evolve over time based on performance.",
  },
  {
    title: "Cognitive Economy",
    description:
      "Resources are allocated dynamically to the most impactful ideas and processes.",
  },
];

export default function CivilizationPage() {
  return (
    <div className="pt-24">
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle
          label="Civilization"
          title="A living digital civilization."
          subtitle="Sirvato operates as a civilization of cognitive agents—tribes, ecosystems, and economies—that evolve and adapt to pursue your goals."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {civilizationComponents.map((c) => (
            <FeatureCard key={c.title} title={c.title} description={c.description} />
          ))}
        </div>

        {/* Tribe visualization */}
        <div className="glass-card p-8">
          <h3 className="font-grotesk font-semibold text-white text-lg mb-6 text-center">
            Cognitive Tribes
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: "Creatives", color: "text-purple-400", bg: "bg-purple-400/10" },
              { name: "Analysts", color: "text-blue-400", bg: "bg-blue-400/10" },
              { name: "Strategists", color: "text-neon-green", bg: "bg-neon-green/10" },
              { name: "Guardians", color: "text-orange-400", bg: "bg-orange-400/10" },
            ].map((tribe) => (
              <div
                key={tribe.name}
                className={`${tribe.bg} rounded-lg p-4 text-center border border-current/10`}
              >
                <div className={`font-grotesk font-bold text-lg ${tribe.color}`}>
                  {tribe.name}
                </div>
                <div className="text-xs text-soft-grey mt-1">Cognitive Tribe</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

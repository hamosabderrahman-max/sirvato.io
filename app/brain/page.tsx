import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: "Sirvato Brain 3.0",
  description: "Multi-agent cognitive architecture with synthetic emotions, meta-memory, and self-optimization.",
};

const brainComponents = [
  {
    title: "Meta-Agents",
    description:
      "Multiple specialized agents collaborate, each focusing on a specific cognitive role.",
  },
  {
    title: "Synthetic Emotions",
    description:
      "Synthetic emotional signals help prioritize risk, opportunity, and urgency.",
  },
  {
    title: "Optimization Cycle",
    description:
      "Sirvato continuously tests, measures, and refines strategies in iterative cycles.",
  },
  {
    title: "Meta-Memory",
    description:
      "Meta-memory tracks not just data, but how decisions were made and why.",
  },
  {
    title: "Cognitive Layers",
    description:
      "From fast heuristics to deep analysis, Sirvato Brain 3.0 operates across multiple cognitive layers.",
  },
];

export default function BrainPage() {
  return (
    <div className="pt-24">
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle
          label="Cognition"
          title="Sirvato Brain 3.0"
          subtitle="A multi-agent cognitive architecture with synthetic emotions, meta-memory, and self-optimization. It learns from outcomes, refines strategies, and continuously improves how your digital empire operates."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brainComponents.map((c) => (
            <FeatureCard key={c.title} title={c.title} description={c.description} />
          ))}
        </div>

        {/* Cognitive cycle visualization */}
        <div className="mt-24">
          <SectionTitle label="How it works" title="The cognitive cycle." center />
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {["Observe", "Analyze", "Synthesize", "Decide", "Act", "Learn"].map(
              (step, i) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="glass-card px-6 py-4 text-center min-w-[100px]">
                    <div className="text-xs text-soft-grey mb-1">0{i + 1}</div>
                    <div className="font-grotesk font-semibold text-white">{step}</div>
                  </div>
                  {i < 5 && (
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                      <path d="M1 6h18M14 1l5 5-5 5" stroke="#39FF14" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";

export const metadata: Metadata = {
  title: "Quantum Layer",
  description: "Sirvato's quantum-inspired decision and strategy engine.",
};

const quantumComponents = [
  {
    title: "Superposition",
    description:
      "Sirvato evaluates multiple strategies simultaneously before committing to one.",
  },
  {
    title: "Entanglement",
    description:
      "Decisions in one area influence and are influenced by others, creating a coherent global strategy.",
  },
  {
    title: "Collapse Engine",
    description:
      "The Collapse Engine selects the most promising path based on evidence and constraints.",
  },
  {
    title: "Quantum Memory",
    description:
      "Quantum-inspired memory structures allow Sirvato to retain and recombine patterns efficiently.",
  },
];

export default function QuantumPage() {
  return (
    <div className="pt-24">
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle
          label="Quantum Layer"
          title="Beyond binary. Beyond linear."
          subtitle="Sirvato's Quantum Layer enables parallel strategy evaluation, coherent global decision-making, and pattern-based memory—inspired by principles of quantum computation."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quantumComponents.map((c) => (
            <FeatureCard key={c.title} title={c.title} description={c.description} />
          ))}
        </div>
      </section>
    </div>
  );
}

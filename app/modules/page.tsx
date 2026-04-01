import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ModuleCard from "@/components/ModuleCard";

export const metadata: Metadata = {
  title: "Modules",
  description: "Explore all Sirvato AI Engines: Branding, Content, Ecommerce, Sponsor, Monitoring, Scaling, and Support.",
};

const modules = [
  {
    title: "Branding Engine",
    description:
      "Defines and evolves your brand identity, visual language, and tone of voice across all channels.",
    features: [
      "Generates brand guidelines and visual systems",
      "Suggests palettes, typography, and layouts",
      "Adapts tone and style for different audiences",
    ],
  },
  {
    title: "Content Engine",
    description:
      "Creates multilingual content (IT/FR/EN/ES) for websites, social media, email, and campaigns.",
    features: [
      "Writes, edits, and optimizes content",
      "Adapts to platform and audience",
      "Maintains consistency with your brand",
    ],
  },
  {
    title: "Ecommerce Engine",
    description:
      "Builds and optimizes ecommerce funnels, product pages, and campaigns.",
    features: [
      "Suggests product structures and offers",
      "Optimizes pricing and positioning",
      "Generates ad creatives and landing pages",
    ],
  },
  {
    title: "Sponsor Engine",
    description:
      "Finds, qualifies, and manages sponsors and partnerships.",
    features: [
      "Identifies potential sponsors",
      "Generates outreach messages and pitch decks",
      "Tracks deals and follow-ups",
    ],
  },
  {
    title: "Monitoring Engine",
    description:
      "Monitors KPIs, performance, and system health in real time.",
    features: [
      "Centralized dashboards",
      "Alerts and anomaly detection",
      "Periodic reports and insights",
    ],
  },
  {
    title: "Scaling Engine",
    description:
      "Designs and executes scaling strategies across markets and channels.",
    features: [
      "Market expansion scenarios",
      "Replication of successful funnels",
      "Capacity and infrastructure planning",
    ],
  },
  {
    title: "Support Engine",
    description:
      "Handles support flows, FAQs, and customer interactions with AI.",
    features: [
      "AI-driven responses",
      "Ticket triage and routing",
      "Knowledge base integration",
    ],
  },
];

export default function ModulesPage() {
  return (
    <div className="pt-24">
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle
          label="Sirvato Engines"
          title="Seven autonomous engines. One coherent system."
          subtitle="Each engine is specialized, self-contained, and fully integrated into the Sirvato ecosystem."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => (
            <ModuleCard key={mod.title} {...mod} />
          ))}
        </div>
      </section>
    </div>
  );
}

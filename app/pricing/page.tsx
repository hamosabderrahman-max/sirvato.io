import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import PricingTable from "@/components/PricingTable";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Choose your Sirvato plan: Starter, Pro, or God-Mode.",
};

export default function PricingPage() {
  return (
    <div className="pt-24">
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle
          label="Pricing"
          title="Start small. Scale infinitely."
          subtitle="From solo creators to global digital empires, Sirvato has a plan for your ambition."
          center
        />
        <PricingTable />

        <div className="mt-16 text-center">
          <p className="text-soft-grey text-sm">
            All plans include a 14-day trial. No credit card required.{" "}
            <span className="text-neon-green">Contact us</span> to discuss custom enterprise pricing.
          </p>
        </div>
      </section>
    </div>
  );
}

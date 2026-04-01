import type { Metadata } from "next";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Pricing — Sirvato.io",
  description: "Simple, transparent pricing for every team size. Start free, scale as you grow.",
};

export default function PricingPage() {
  return (
    <div className="pt-20">
      <Pricing />
      <CTA />
    </div>
  );
}

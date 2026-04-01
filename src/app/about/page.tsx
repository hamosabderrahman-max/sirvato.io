import type { Metadata } from "next";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About — Sirvato.io",
  description: "Learn about Sirvato.io, our mission, team, and values.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
      <CTA />
    </div>
  );
}

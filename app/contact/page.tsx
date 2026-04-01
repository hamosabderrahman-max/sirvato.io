import type { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sirvato to explore autonomous AI for your digital empire.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionTitle
              label="Get in touch"
              title="Let's build your digital empire."
              subtitle="Ready to explore Sirvato for your digital empire? Let's talk."
            />

            <div className="mt-8 glass-card p-6">
              <h3 className="font-grotesk font-semibold text-white mb-1">
                Strategic Partnerships
              </h3>
              <p className="text-soft-grey text-sm leading-relaxed">
                For strategic partnerships, integrations, or enterprise deployments, reach out to our partner team.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-neon-green text-sm font-grotesk font-semibold">
                partners@sirvato.io
              </div>
            </div>

            <div className="mt-4 glass-card p-6">
              <h3 className="font-grotesk font-semibold text-white mb-1">Response time</h3>
              <p className="text-soft-grey text-sm">
                We respond within 24 hours on business days.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                <span className="text-xs text-soft-grey">System online</span>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}

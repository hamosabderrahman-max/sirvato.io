"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import Link from "next/link";
import AnimatedText from "@/components/ui/AnimatedText";
import Badge from "@/components/ui/Badge";
import GradientText from "@/components/ui/GradientText";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 29,
    annualPrice: 23,
    description: "Perfect for small teams getting started with AI analytics.",
    features: [
      "Up to 5 users",
      "10 data sources",
      "Basic AI analytics",
      "Standard dashboards",
      "Email support",
      "99.5% uptime SLA",
    ],
    cta: "Start Free Trial",
    href: "/contact",
    highlighted: false,
  },
  {
    name: "Pro",
    monthlyPrice: 99,
    annualPrice: 79,
    description: "For growing teams that need powerful automation and insights.",
    features: [
      "Up to 25 users",
      "Unlimited data sources",
      "Advanced AI analytics",
      "Custom dashboards",
      "Smart automation",
      "Priority support",
      "99.9% uptime SLA",
      "API access",
    ],
    cta: "Get Started",
    href: "/contact",
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: null,
    annualPrice: null,
    description: "Custom solutions for large organizations at any scale.",
    features: [
      "Unlimited users",
      "Unlimited data sources",
      "Custom AI models",
      "White-label options",
      "Dedicated support",
      "99.99% uptime SLA",
      "SSO & SAML",
      "Custom integrations",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
    href: "/contact",
    highlighted: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedText delay={0}>
            <div className="flex justify-center mb-4">
              <Badge variant="neon">Pricing</Badge>
            </div>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight mb-4">
              Simple, <GradientText>transparent</GradientText> pricing
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-lg text-white/50 max-w-xl mx-auto mb-8">
              Start free, scale as you grow. No hidden fees, no surprises.
            </p>
          </AnimatedText>

          {/* Toggle */}
          <AnimatedText delay={0.3}>
            <div className="inline-flex items-center gap-3 p-1 rounded-full bg-dark-200 border border-white/5">
              <button
                onClick={() => setAnnual(false)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  !annual
                    ? "bg-neon text-dark shadow-[0_0_15px_rgba(0,255,136,0.3)]"
                    : "text-white/50 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  annual
                    ? "bg-neon text-dark shadow-[0_0_15px_rgba(0,255,136,0.3)]"
                    : "text-white/50 hover:text-white"
                }`}
              >
                Annual
                <span className="text-xs font-bold bg-neon/20 text-neon px-1.5 py-0.5 rounded-full border border-neon/30">
                  -20%
                </span>
              </button>
            </div>
          </AnimatedText>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                plan.highlighted
                  ? "bg-dark-200 border-neon/50 shadow-[0_0_40px_rgba(0,255,136,0.12)] scale-105"
                  : "bg-dark-200 border-white/5 hover:border-white/10"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-neon text-dark text-xs font-heading font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(0,255,136,0.5)]">
                    <Zap className="w-3 h-3 fill-dark" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-heading font-bold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-white/50">{plan.description}</p>
              </div>

              <div className="mb-8">
                {plan.monthlyPrice ? (
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-heading font-bold text-white">
                      ${annual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-white/40 mb-2">/mo</span>
                  </div>
                ) : (
                  <div className="text-4xl font-heading font-bold text-white">
                    Custom
                  </div>
                )}
                {plan.monthlyPrice && annual && (
                  <p className="text-xs text-neon mt-1">
                    Save ${((plan.monthlyPrice - (plan.annualPrice ?? 0)) * 12).toFixed(0)}/year
                  </p>
                )}
              </div>

              <Link
                href={plan.href}
                className={`block w-full text-center py-3 px-6 rounded-lg font-heading font-semibold text-sm transition-all duration-200 mb-8 ${
                  plan.highlighted
                    ? "bg-neon text-dark hover:bg-neon/90 shadow-[0_0_20px_rgba(0,255,136,0.3)]"
                    : "border border-white/15 text-white hover:bg-white/5 hover:border-white/25"
                }`}
              >
                {plan.cta}
              </Link>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-neon flex-shrink-0" />
                    <span className="text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon/3 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedText delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neon/10 border border-neon/20 text-neon text-xs font-heading font-medium tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
            Limited Early Access
          </div>
        </AnimatedText>

        <AnimatedText delay={0.1}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-6">
            Ready to unlock your
            <br />
            <span className="text-neon neon-text-glow">business intelligence?</span>
          </h2>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p className="text-lg text-white/50 max-w-xl mx-auto mb-10">
            Join 10,000+ businesses already using Sirvato to make smarter
            decisions, faster. Start your free trial today.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg font-heading font-semibold text-base bg-neon text-dark hover:bg-neon/90 shadow-[0_0_30px_rgba(0,255,136,0.4)] hover:shadow-[0_0_50px_rgba(0,255,136,0.6)] transition-all duration-200"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-heading font-semibold text-base border border-white/15 text-white/80 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
            >
              Talk to Sales
            </Link>
          </div>
        </AnimatedText>

        <AnimatedText delay={0.4}>
          <p className="mt-6 text-sm text-white/30">
            No credit card required · 14-day free trial · Cancel anytime
          </p>
        </AnimatedText>
      </div>
    </section>
  );
}

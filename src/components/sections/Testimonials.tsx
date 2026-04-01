"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import Badge from "@/components/ui/Badge";
import GradientText from "@/components/ui/GradientText";

const testimonials = [
  {
    quote:
      "Sirvato transformed how we approach data. What used to take our team days now happens instantly with AI-powered insights.",
    author: "Sarah Chen",
    role: "Head of Analytics",
    company: "TechScale Inc.",
    avatar: "SC",
    color: "bg-violet-500",
  },
  {
    quote:
      "The automation capabilities alone saved us 40 hours per week. It's like having an AI co-pilot for every business decision.",
    author: "Marcus Williams",
    role: "CTO",
    company: "Velocity Labs",
    avatar: "MW",
    color: "bg-blue-500",
  },
  {
    quote:
      "ROI was clear within the first month. Sirvato's intelligence engine found $200K in cost savings we didn't even know existed.",
    author: "Elena Rodriguez",
    role: "VP Operations",
    company: "NorthStar Corp",
    avatar: "ER",
    color: "bg-emerald-500",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedText delay={0}>
            <div className="flex justify-center mb-4">
              <Badge variant="neon">Testimonials</Badge>
            </div>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight mb-4">
              Loved by <GradientText>forward-thinking</GradientText> teams
            </h2>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, author, role, company, avatar, color }, i) => (
            <motion.div
              key={author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-xl bg-dark-200 border border-white/5 hover:border-neon/20 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-neon/40 mb-4" />
              <p className="text-white/70 text-sm leading-relaxed mb-6">{quote}</p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                >
                  {avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{author}</p>
                  <p className="text-xs text-white/40">
                    {role}, {company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

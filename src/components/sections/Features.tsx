"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Zap,
  Activity,
  Puzzle,
  Shield,
  TrendingUp,
} from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import Badge from "@/components/ui/Badge";
import GradientText from "@/components/ui/GradientText";

const features = [
  {
    icon: BarChart3,
    title: "AI Analytics",
    description:
      "Deep machine learning models analyze your business data and surface actionable insights automatically.",
  },
  {
    icon: Zap,
    title: "Smart Automation",
    description:
      "Automate complex workflows with AI-driven decision trees that learn and improve over time.",
  },
  {
    icon: Activity,
    title: "Real-time Insights",
    description:
      "Monitor live business metrics with sub-second latency dashboards and instant anomaly detection.",
  },
  {
    icon: Puzzle,
    title: "50+ Integrations",
    description:
      "Connect seamlessly with your existing stack — CRMs, ERPs, databases, and custom APIs.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 Type II certified with end-to-end encryption, RBAC, and full audit trails.",
  },
  {
    icon: TrendingUp,
    title: "Infinite Scale",
    description:
      "Built on a distributed architecture that scales from startup to enterprise without re-engineering.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Features() {
  return (
    <section id="engine" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedText delay={0}>
            <div className="flex justify-center mb-4">
              <Badge variant="neon">The Platform</Badge>
            </div>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight mb-4">
              The <GradientText>Sirvato Engine</GradientText>
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              Six core capabilities that power your entire business intelligence
              stack — from data ingestion to executive insights.
            </p>
          </AnimatedText>
        </div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group p-6 rounded-xl bg-dark-200 border border-white/5 hover:border-neon/20 hover:shadow-[0_0_30px_rgba(0,255,136,0.06)] transition-all duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center mb-5 group-hover:bg-neon/20 group-hover:shadow-[0_0_15px_rgba(0,255,136,0.2)] transition-all duration-300">
                <Icon className="w-5 h-5 text-neon" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-white mb-2">
                {title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

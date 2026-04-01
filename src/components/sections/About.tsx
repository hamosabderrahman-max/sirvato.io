"use client";

import { motion } from "framer-motion";
import { Users, Target, Heart, Globe } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import Badge from "@/components/ui/Badge";
import GradientText from "@/components/ui/GradientText";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We exist to democratize business intelligence — making powerful AI analytics accessible to every team, regardless of size.",
  },
  {
    icon: Users,
    title: "Customer-First",
    description:
      "Every decision we make starts with a simple question: how does this make our customers more successful?",
  },
  {
    icon: Heart,
    title: "Radical Transparency",
    description:
      "We believe in open communication with our customers, team, and community. No hidden agendas.",
  },
  {
    icon: Globe,
    title: "Built for Scale",
    description:
      "We design for the long term — building infrastructure and systems that grow with you from day one to IPO.",
  },
];

const team = [
  {
    name: "Alex Morgan",
    role: "CEO & Co-founder",
    bio: "Former ML engineer at Google. Built and scaled two AI startups.",
    avatar: "AM",
    color: "bg-violet-500",
  },
  {
    name: "Jordan Lee",
    role: "CTO & Co-founder",
    bio: "Ex-Meta infrastructure engineer. Distributed systems expert.",
    avatar: "JL",
    color: "bg-blue-500",
  },
  {
    name: "Taylor Kim",
    role: "Head of Product",
    bio: "Product leader from Stripe and Notion. Obsessed with UX.",
    avatar: "TK",
    color: "bg-emerald-500",
  },
  {
    name: "Sam Rivera",
    role: "Head of AI",
    bio: "PhD in ML from MIT. Published researcher in NLP and forecasting.",
    avatar: "SR",
    color: "bg-orange-500",
  },
];

export default function About() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission */}
        <div className="max-w-3xl mb-24">
          <AnimatedText delay={0}>
            <div className="mb-4">
              <Badge variant="neon">About Us</Badge>
            </div>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight mb-6">
              We&apos;re building the{" "}
              <GradientText>AI backbone</GradientText>
              <br />
              of modern business
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-lg text-white/60 leading-relaxed mb-4">
              Sirvato was founded in 2023 with a simple belief: every business
              deserves access to the kind of intelligence that was previously
              reserved for the Fortune 500.
            </p>
          </AnimatedText>
          <AnimatedText delay={0.3}>
            <p className="text-lg text-white/50 leading-relaxed">
              Today, we power over 10,000 businesses across 50+ countries —
              from seed-stage startups to publicly traded enterprises — helping
              them make faster, smarter decisions with AI.
            </p>
          </AnimatedText>
        </div>

        {/* Values */}
        <div className="mb-24">
          <AnimatedText delay={0}>
            <h3 className="text-2xl font-heading font-bold text-white mb-8">Our Values</h3>
          </AnimatedText>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 p-6 rounded-xl bg-dark-200 border border-white/5"
              >
                <div className="w-10 h-10 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-neon" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-semibold text-white mb-1">{title}</h4>
                  <p className="text-sm text-white/50 leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <AnimatedText delay={0}>
            <h3 className="text-2xl font-heading font-bold text-white mb-8">Meet the Team</h3>
          </AnimatedText>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map(({ name, role, bio, avatar, color }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl bg-dark-200 border border-white/5 hover:border-neon/20 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center text-white text-lg font-bold mb-4`}
                >
                  {avatar}
                </div>
                <h4 className="text-sm font-heading font-semibold text-white mb-0.5">{name}</h4>
                <p className="text-xs text-neon mb-3">{role}</p>
                <p className="text-xs text-white/50 leading-relaxed">{bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

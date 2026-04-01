"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedText from "@/components/ui/AnimatedText";

const stats = [
  { value: 10000, suffix: "+", label: "Businesses Using Sirvato", prefix: "" },
  { value: 99.9, suffix: "%", label: "Uptime SLA Guaranteed", prefix: "" },
  { value: 50, suffix: "+", label: "Native Integrations", prefix: "" },
  { value: 2, suffix: "B+", label: "Transactions Processed", prefix: "$" },
];

function Counter({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  const display = value % 1 !== 0
    ? count.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })
    : Math.floor(count).toLocaleString();

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neon/5 via-transparent to-neon/5" />
      <div className="absolute inset-0 border-y border-neon/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedText>
          <div className="text-center mb-12">
            <p className="text-white/40 text-sm font-heading uppercase tracking-widest">
              Trusted by teams worldwide
            </p>
          </div>
        </AnimatedText>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ value, suffix, label, prefix }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-heading font-bold text-neon mb-2 neon-text-glow">
                <Counter value={value} suffix={suffix} prefix={prefix} />
              </div>
              <p className="text-sm text-white/50">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  neonBorder?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = false,
  neonBorder = false,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ duration: 0.2 }}
      className={`
        rounded-xl bg-dark-200 border
        ${neonBorder ? "border-neon/50 shadow-[0_0_20px_rgba(0,255,136,0.1)]" : "border-white/5"}
        ${hover ? "hover:border-neon/30 hover:shadow-[0_0_30px_rgba(0,255,136,0.08)] transition-all duration-300 cursor-pointer" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}

import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "neon" | "outline" | "subtle";
  className?: string;
}

export default function Badge({
  children,
  variant = "subtle",
  className = "",
}: BadgeProps) {
  const variants = {
    neon: "bg-neon/20 text-neon border border-neon/30",
    outline: "border border-white/20 text-white/70",
    subtle: "bg-white/5 text-white/60 border border-white/10",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium font-heading tracking-wider uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

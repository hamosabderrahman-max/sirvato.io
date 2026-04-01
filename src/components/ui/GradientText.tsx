import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-neon via-neon/80 to-emerald-400 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}

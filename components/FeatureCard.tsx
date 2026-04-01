import React from "react";

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="glass-card p-6 hover:border-neon-green/30 transition-all duration-300">
      {icon && (
        <div className="mb-4 w-10 h-10 flex items-center justify-center rounded-lg bg-neon-green/10 text-neon-green">
          {icon}
        </div>
      )}
      <h3 className="font-grotesk font-semibold text-white text-lg mb-2">{title}</h3>
      <p className="text-soft-grey text-sm leading-relaxed">{description}</p>
    </div>
  );
}

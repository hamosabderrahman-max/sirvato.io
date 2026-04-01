import Link from "next/link";

interface ModuleCardProps {
  title: string;
  description: string;
  features: string[];
  href?: string;
}

export default function ModuleCard({
  title,
  description,
  features,
  href = "/modules",
}: ModuleCardProps) {
  return (
    <div className="glass-card p-6 flex flex-col gap-4 hover:border-neon-green/40 transition-all duration-300 group">
      <div>
        <h3 className="font-grotesk font-bold text-xl text-white mb-2 group-hover:text-neon-green transition-colors duration-200">
          {title}
        </h3>
        <p className="text-soft-grey text-sm leading-relaxed">{description}</p>
      </div>
      <ul className="flex flex-col gap-1.5">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-soft-grey">
            <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-neon-green" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-2">
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-sm font-grotesk font-semibold text-neon-green hover:gap-3 transition-all duration-200"
        >
          View details
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M8 2l5 5-5 5" stroke="#39FF14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

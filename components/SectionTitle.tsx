interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  center = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {label && (
        <span className="inline-block mb-3 text-xs font-grotesk font-semibold text-neon-green uppercase tracking-[0.2em]">
          {label}
        </span>
      )}
      <h2 className="font-grotesk text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-soft-grey text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

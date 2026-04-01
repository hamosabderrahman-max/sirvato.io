export default function SirvatoLogo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sirvato Logo"
    >
      {/* Hexagon outline */}
      <polygon
        points="16,2 28,9 28,23 16,30 4,23 4,9"
        stroke="#39FF14"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
      />
      {/* Diagonal cut line */}
      <line x1="8" y1="10" x2="24" y2="22" stroke="#39FF14" strokeWidth="0.5" strokeOpacity="0.4" />
      {/* Stylized S */}
      <path
        d="M20 11.5 C20 11.5 13 11.5 13 15 C13 18.5 19 18.5 19 22 C19 22 19 24.5 12 24.5"
        stroke="#39FF14"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

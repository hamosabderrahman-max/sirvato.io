import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-green": "#39FF14",
        "deep-graphite": "#0D0D0D",
        "soft-grey": "#A3A3A3",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        grotesk: ["var(--font-space-grotesk)", "sans-serif"],
      },
      boxShadow: {
        "neon-sm": "0 0 8px #39FF14, 0 0 16px rgba(57,255,20,0.3)",
        "neon-md": "0 0 16px #39FF14, 0 0 32px rgba(57,255,20,0.4)",
        "neon-lg": "0 0 24px #39FF14, 0 0 48px rgba(57,255,20,0.5)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "pulse-neon": "pulseNeon 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseNeon: {
          "0%, 100%": { boxShadow: "0 0 8px #39FF14, 0 0 16px rgba(57,255,20,0.3)" },
          "50%": { boxShadow: "0 0 16px #39FF14, 0 0 32px rgba(57,255,20,0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

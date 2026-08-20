/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        accent: {
          DEFAULT: "#ff6b2b",
          dark: "#e55a1b",
          light: "#ff8f5c",
        },
        amber: {
          accent: "#f59e0b",
        },
        surface: {
          deep: "var(--bg-deep)",
          DEFAULT: "var(--bg-surface)",
          card: "var(--bg-card)",
          elevated: "var(--bg-elevated)",
          glass: "var(--border-glass)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Outfit", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "glow": "glow-pulse 3s ease-in-out infinite",
        "gradient": "gradient-shift 4s ease infinite",
        "shimmer": "shimmer 2s ease-in-out infinite",
        "border-beam": "beam-rotate 3s linear infinite",
        "shimmer-sweep": "shimmer-sweep 3s ease-in-out infinite",
        "slide-up-fade": "slide-up-fade 0.6s ease-out forwards",
        "blur-in": "blur-in 0.6s ease-out forwards",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "marquee": "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(255, 107, 43, 0.1)",
        "glow": "0 0 40px rgba(255, 107, 43, 0.15)",
        "glow-lg": "0 0 60px rgba(255, 107, 43, 0.2)",
        "glow-xl": "0 0 80px rgba(255, 107, 43, 0.25), 0 0 40px rgba(245, 158, 11, 0.1)",
        "glass": "0 4px 24px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.04)",
        "card-hover": "0 12px 40px rgba(0, 0, 0, 0.15), 0 0 40px rgba(255, 107, 43, 0.06)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-accent": "linear-gradient(135deg, #ff6b2b, #f59e0b)",
      },
    },
  },
  plugins: [],
};

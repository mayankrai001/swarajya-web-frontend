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
          glass: "var(--border-glass)",
        },
        /* fallback mapping so previous opacity classes don't break CSS completely */
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "glow": "glow-pulse 3s ease-in-out infinite",
        "gradient": "gradient-shift 4s ease infinite",
        "shimmer": "shimmer 2s ease-in-out infinite",
      },
      boxShadow: {
        "glow-sm": "0 0 20px rgba(255, 107, 43, 0.1)",
        "glow": "0 0 40px rgba(255, 107, 43, 0.15)",
        "glow-lg": "0 0 60px rgba(255, 107, 43, 0.2)",
      },
    },
  },
  plugins: [],
};

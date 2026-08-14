/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        axom: {
          red: "#C8102E",
          redDark: "#A00C24",
          charcoal: "#121826",
          navy: "#0F172A",
          gold: "#D97706",
          goldLight: "#F59E0B",
          surface: "#1E293B",
          card: "#182234",
          border: "#334155",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

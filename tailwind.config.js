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
          red: "#9E3A26",
          redDark: "#7D2B1B",
          charcoal: "#F1ECE2",
          navy: "#F9F4EB",
          gold: "#C9A468",
          goldLight: "#E7C792",
          surface: "#F3EDE2",
          card: "#F3EDE2",
          border: "#E5DAC8",
          muted: "#6B5D52",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

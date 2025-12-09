const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Amiri", "Georgia", "serif"],
        arabic: ["Amiri", "Traditional Arabic", "serif"],
      },
      colors: {
        paper: {
          DEFAULT: "#f9f7f1",
          light: "#fdfcf8",
          dark: "#f0ede3",
        },
        ink: {
          DEFAULT: "#2d2d2d",
          light: "#4a4a4a",
          lighter: "#6b6b6b",
        },
        accent: {
          DEFAULT: "#1a7f7f",
          light: "#2d9999",
          dark: "#0f5555",
          gold: "#b8860b",
        },
        category: {
          theologie: "#4a5568",
          recht: "#2c5282",
          mystik: "#6b46c1",
          allgemein: "#2f855a",
          grammatik: "#c05621",
        },
      },
    },
  },
  plugins: [],
};

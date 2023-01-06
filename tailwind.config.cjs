/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: {
        500: "#3294f8",
      },
      gray: {
        200: "#e7edf4",
        300: "#c4d4e3",
        400: "#afc2d4",
        500: "#7b96b2",
      },
      darkGray: {
        300: "#3a536b",
        400: "#1c2f41",
        500: "#112131",
        600: "#0b1b2b",
        700: "#071422",
        800: "#040f1a",
      },
    },
    fontWeight: {
      regular: 400,
      bold: 700,
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
    },
    extend: {
      content: {
        headerPatternLeft: "url(/src/assets/header/header-bg-left.svg)",
        headerPatternRight: "url(/src/assets/header/header-bg-right.svg)",
      },
    },
  },
  plugins: [],
};

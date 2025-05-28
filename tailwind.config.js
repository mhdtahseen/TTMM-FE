/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mint: {
          light: '#e6fff7',  // very soft mint
          DEFAULT: '#aaf0d1', // soft mint
          dark: '#6ed7b0',    // deeper mint
        },
        blue: {
          light: '#e3f0ff',  // very soft blue
          DEFAULT: '#8ecae6', // soft blue
          dark: '#219ebc',    // deeper blue
        },
        gray: {
          light: '#f7fafc',  // very light gray
          DEFAULT: '#e2e8f0', // soft gray
          dark: '#94a3b8',    // medium gray
        },
      },
    },
  },
  plugins: [],
});

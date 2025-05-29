/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7B2E2E', // Soft Maroon
        },
        accent: {
          DEFAULT: '#A45D5D', // Dusty Rose
        },
        highlight: {
          DEFAULT: '#F6D776', // Soft Gold / Butter
        },
        sand: {
          DEFAULT: '#FFF3C7', // Pastel Sand (Muted Yellow)
        },
        background: {
          DEFAULT: '#FCFAF9', // Off White
        },
        surface: {
          DEFAULT: '#F2F0EB', // Mist White
        },
        taupe: {
          DEFAULT: '#B9B4A8', // Taupe Gray (Border/Text)
        },
        hover: {
          DEFAULT: '#F2B263', // Muted Orange (Hover)
        },
      },
    },
  },
  plugins: [],
});

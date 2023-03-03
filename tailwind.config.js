/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          light: "#d3d3d3",
        },
      },
    },
  },
  variants: {
    // ...
    scrollbar: ["rounded", "overflow", "invisible"],
  },
  plugins: [require("tailwind-scrollbar")],
};

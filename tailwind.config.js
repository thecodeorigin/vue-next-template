const colors = require("./src/core/constants/config/tailwindcss/colors");
const screens = require("./src/core/constants/config/tailwindcss/screens");
const extend = require("./src/core/constants/config/tailwindcss/extend");
module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens,
      colors
    }
  },
  variants: {
    extend
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    mode: "all",
    preserveHtmlElements: false,
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"]
  }
};

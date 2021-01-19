const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      orange: {
        DEFAULT: "#FF4F40",
      },
    },
    fontFamily: {
      sans: ["Space Grotesk"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

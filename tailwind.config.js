const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      orange: {
        DEFAULT: "#eb5424"
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

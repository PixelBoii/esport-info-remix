const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
        primary: '#A72603',
      }
    },
  },
  plugins: [],
}

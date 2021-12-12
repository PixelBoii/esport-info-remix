module.exports = {
  mode: "jit",
  purge: ["./app/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#A72603',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

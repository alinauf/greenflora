/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  purge: [
    "./layouts/**/*.vue",
    "./layouts/*.vue",
    "./components/*.vue",
    "./pages/*.vue"
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        gf: {
          white: "#E5EAEA",
          light: "#95BEB6",
          grey: "#62625D",
          main: "#54C3AC",
          dark: "#211F1F"
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      }
    }
  },
  variants: {},
  plugins: []
};

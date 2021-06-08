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
          light: "#ccede6",
          grey: "#34495e",
          main: "#54C3AC",
          bggr: "#34495e",
          dark: "#211F1F"
        }
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      }
    }
  },
  variants: {
    extend: { fontSize: ["hover"], fontWeight: ["hover"] },
    textDecoration: ["hover"],
    borderColor: ["hover", "active"],
    borderWidth: ["hover", "focus"]
  },

  plugins: [require("@tailwindcss/typography")]
};

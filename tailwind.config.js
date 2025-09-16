/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"], // raiz e src
  theme: {
    extend: {
      screens: {
        desktop: "450px",
      },
      fontFamily: {
        redhat: ['"Red Hat Display"', "sans-serif"],
      },
    },
  },
  plugins: [],
}
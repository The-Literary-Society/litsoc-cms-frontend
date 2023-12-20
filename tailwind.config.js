/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: "#F1A661",
      dark: {
        hard: "#995508",
        soft:"#E38B29"
      },
      fontFamily: {
        opensans: ["Open Sans","sans-serif"],
        roboto: ["Roboto","sans-serif"]
      }
    },
  },
  plugins: [],
}
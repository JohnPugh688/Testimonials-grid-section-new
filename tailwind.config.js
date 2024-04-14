/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        ModerateViolet: "#7541C8",
        VeryDarkGrayishBlue: "#48556A",
        VeryDarkBlackishBlue: "#19212E",
        LightGray: "#CFCFCF",
        LightGrayishBlue: "#ECF2F8",
      },

      fontFamily: {
        BarlowSemiCondensed: ["Barlow+Semi+Condensed", "Barlow"],
      },
    },
  },
  plugins: [],
};

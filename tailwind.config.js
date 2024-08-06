import withMT from "@material-tailwind/react/utils/withMT"


// const { yekan } = require("@/utils/font");
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
   content: [
    // "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
 

  ],
  theme: {
    // fontFamily: {
    //   yekan: ["YekanBakh"],
    // },

    extend: {},
  },
  plugins: [],
});
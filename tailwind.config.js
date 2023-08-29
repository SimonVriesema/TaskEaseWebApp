module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3D5A80",
        primaryText: "#1F3B5F",
        secondary: "#E07A5F",
        secondaryhover: "#C15B40",
        grayish: "#7a7a7a",
        hovergray: "#181818",
        lightblue: "#F4F1DE",
        lighterShade: "#F8F6EB",
        lightSecondary: "#F4F1DE",
        darkerShade: "#EAE6D2",
      },
      fontFamily: {
        paragraphStyle: ["VarelaRound", "serif"],
        headingStyle: ["NotoSerif", "serif"],
      },
      // Add more theme-related configurations as needed
    },
  },
  plugins: [require("flowbite/plugin")],
};

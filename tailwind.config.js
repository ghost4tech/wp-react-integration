const { heroui } = require("@heroui/react");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#006FEE",
              foreground: "#FFFFFF",
            },
            focus: "#006FEE",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#006FEE",
              foreground: "#FFFFFF",
            },
            focus: "#006FEE",
          },
        },
      },
    }),
  ],
};

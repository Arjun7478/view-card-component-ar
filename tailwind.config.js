const { Container } = require("postcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        "Soft-blue": " hsl(215, 51%, 70%)",
        Cyan: " hsl(178, 100%, 50%)",
        "Very-dark-blue-1": " hsl(217, 54%, 11%)",
        "Very-dark-blue": " hsl(216, 50%, 16%)",
        "Very-dark-blue-2": " hsl(215, 32%, 27%)",
        White: " hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};

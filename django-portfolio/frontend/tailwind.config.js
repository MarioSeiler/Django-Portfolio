const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',

],
  theme: {
    extend: {
      colors: {
        "darkGray1": "#333333",
        "darkGray2": "#666666",
        "lightGray": "#CCCCCC",
        "blue1": "#5C9CD8",
        "blue2": "#89B9E8",
        "blue3": "#B6D7F8"
      },
      spacing: {
        88: '22rem',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};

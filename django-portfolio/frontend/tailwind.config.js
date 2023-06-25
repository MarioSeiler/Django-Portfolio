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
        main1: "#0f0f0f",
        main2: "#0f0132",
        main3: "#3b3dff",
        main4: "#4867ff",
        main5: "#81c1f9"
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

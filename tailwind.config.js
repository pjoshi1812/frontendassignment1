// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        oklchGray: 'oklch(70.8% 0 0)', // You can name it whatever you want
      },
    },
  },
  plugins: [],
};

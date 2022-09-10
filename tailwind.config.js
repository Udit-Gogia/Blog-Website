/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'lightpinkish':'#F9BDA1',
        'darkpinkish' : '#FF6766',
        'lightbeige' : '#F1E4CD',
        'brickred' : '#c5352c',
      }
    },
  },
  plugins: [],
}
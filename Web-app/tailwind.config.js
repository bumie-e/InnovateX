/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pry-col": "#5250CD",
        "feature-bg": "linear-gradient(180deg, #FFF 0%, #FBF8F6 53.65%, #F4F1F7 100%)"
      }
    },
  },
  plugins: [],
}


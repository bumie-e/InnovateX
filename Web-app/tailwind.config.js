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
        "feature-bg": "linear-gradient(180deg, #FFF 0%, #FBF8F6 53.65%, #F4F1F7 100%)",
        "start-learning": "linear-gradient(94deg, rgba(139, 138, 187, 0.75) -4.72%, rgba(172, 171, 222, 0.56) 56.34%, rgba(123, 106, 169, 0.66) 117.42%, rgba(107, 106, 169, 0.66) 117.42%)"

      },
      boxShadow: {
        "chat-onboarding": "2px 6px 36px 0px rgba(206, 202, 216, 0.25);"
      }
    },
  },
  plugins: [],
}


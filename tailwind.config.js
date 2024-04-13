/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurpleBlue: "#7b91ff",
        customPurpleBlueLight: "#95beff",
      }
    },
  },
  plugins: [],
}
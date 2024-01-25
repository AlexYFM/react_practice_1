/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // this below line NEEDS to be added for the dark mode to work
  darkMode: "class", 
  theme: {
    extend: {},
  },
  plugins: [],
}
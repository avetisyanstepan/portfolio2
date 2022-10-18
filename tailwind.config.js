/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'abril': ["Abril Fatface", 'cursive']
      },
    },
    colors: {
      darkGrey: "rgb(19, 21, 27)",
      lightGrey: "#292c39",
      custom_grey_100: '#383C4F',
      custom_grey_200: '#8F92A0',
      custom_grey_300: '#c1c4d0',
      orange: "#E44026",
      white: "#ffffff",
      blue: "#007bff",
      fbBlue: '#3a579a',
      linkDinBlue: "#0077b5",
      twitterBlue: "#00abf0"

      
    }
  },
  plugins: [],
}

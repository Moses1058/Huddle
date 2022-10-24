/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bg_color: 'hsl(257, 40%, 49%)',
        active: 'hsl(300, 69%, 71%)',
      },
      fontFamily: {
        main: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

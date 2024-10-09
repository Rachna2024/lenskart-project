/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        times: ['"Times New Roman"', 'serif'],
        arial: ['Arial', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lkfutura: ['"LK Futura"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

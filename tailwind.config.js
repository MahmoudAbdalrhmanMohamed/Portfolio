/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        spinReverse: 'spin 3s reverse infinite'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}

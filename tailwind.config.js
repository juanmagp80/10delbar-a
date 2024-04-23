/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      just: ['just', 'Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        blau: '#0000ff',
        grana: '#ab003c',
      },

    },
  },
  plugins: [],
}
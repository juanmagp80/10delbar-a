/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      just: ['Jost', 'Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        blau: '#0000ff',
        grana: '#ab003c',
        'blue-opaque': 'rgba(59, 130, 246, 0.3)',
        'red-opaque': 'rgba(239, 68, 68, 0.3)',
      },

    },
  },
  plugins: [],
}
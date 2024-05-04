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
        'blau': '#3B82F6', // Reemplaza con el código de color que desees para 'blau'
        'grana': '#DC2626', // Reemplaza con el código de color que desees para 'grana'
      },
      animation: {
        'slide-down': 'slide-down 2s ease-in-out',
        'slide-up': 'slide-up 2s ease-in-out forwards',
      },
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },

    },
  },
  variants: {},
  plugins: [],
}
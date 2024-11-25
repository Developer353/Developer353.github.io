/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: 'rgb(255 250 235)',
          100: 'rgb(254 235 200)',
          200: 'rgb(252 217 155)',
          300: 'rgb(250 196 107)',
          400: 'rgb(247 174 59)',
          500: 'rgb(218 165 32)',
          600: 'rgb(192 134 12)',
          700: 'rgb(161 98 7)',
          800: 'rgb(133 77 14)',
          900: 'rgb(113 63 18)',
          950: 'rgb(67 32 4)',
        },
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        brand: {
          DEFAULT: '#0F766E',
          light: '#14B8A6',
          dark: '#115E59',
        },
      },
      fontFamily: {
        cairo: ['var(--font-cairo)'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

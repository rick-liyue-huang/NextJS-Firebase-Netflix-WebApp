/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      textShadow: {
        md: '2px 2px 4px rgb(0 0 0 / 45%);',
      },
      backgroundImage: {
        'gradient-to-b':
          'linear-gradient(to bottom,rgba(88, 28, 135, 0) 0,rgba(88, 28, 135,.15) 15%,rgba(88, 28, 135,.35) 29%,rgba(88, 28, 135,.58) 44%,rgb(88, 28, 135, 0) 68%,rgba(88, 28, 135, 0) 100%);',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
};

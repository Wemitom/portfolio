/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFF',
        secondary: '#000000',
        accent: '#4D8B31',
        darkPrimary: '#121212',
        darkSecondary: '#FFF',
      },
      fontFamily: {
        sans: ['Oswald', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        fadeInLeft: {
          from: { marginRight: '100%', opacity: 0 },
          to: { marginLeft: '0', opacity: 1 },
        },
        fadeInBottom: {
          from: { transform: 'translateY(1000px)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        'fade-in-left': 'fadeInLeft 0.5s linear',
        'fade-in-bottom': 'fadeInBottom 1s linear',
        'fade-in': 'fadeIn 1s linear',
      },
      transitionProperty: {
        width: 'width',
        bgSize: 'background-size',
      },
      backgroundSize: { '100%': '100%', '150%': '150%' },
    },
  },
  plugins: [],
};

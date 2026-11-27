/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./_layouts/**/*.html",
      "./_includes/**/*.html",
      "./*.html",
      "./!(node_modules|_site|vendor|.bundle|.jekyll-cache)/**/*.{html,md}"
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            50:  '#e8f9fb',
            100: '#c7f1f6',
            200: '#8ee3ee',
            300: '#4ccfe0',
            400: '#1cb9ce',
            500: '#08a1b5',
            600: '#058396',
            700: '#086978',
            800: '#0b515c',
            900: '#09363d',
            950: '#042024',
          }
        },
        fontFamily: {
          sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        }
      }
    },
    plugins: [],
  }
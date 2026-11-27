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
            50:  '#e8f8fb',
            100: '#c7eff6',
            200: '#8ee0ee',
            300: '#4ccbe0',
            400: '#1cb4ce',
            500: '#0899b5',
            600: '#057c96',
            700: '#086078',
            800: '#0b475c',
            900: '#092c3d',
            950: '#041824',
          }
        },
        fontFamily: {
          sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        }
      }
    },
    plugins: [],
  }
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./_layouts/**/*.html",
      "./_includes/**/*.html",
      "./*.html",
      "./*.md",
      "./lt/**/*.html",
      "./lt/**/*.md",
      "./no/**/*.html",
      "./no/**/*.md",
      "./en/**/*.html",
      "./en/**/*.md"
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            50:  '#eef9f9',
            100: '#d7f1f2',
            200: '#addfe2',
            300: '#76c8cf',
            400: '#49adb8',
            500: '#2e8f9f',
            600: '#287b8c',
            700: '#225f71',
            800: '#1a4958',
            900: '#11323e',
            950: '#091d26',
          }
        },
        fontFamily: {
          sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        }
      }
    },
    plugins: [],
  }
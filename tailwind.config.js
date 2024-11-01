/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#4C1D95',
          800: '#5B21B6',
          700: '#6D28D9',
          600: '#7C3AED',
        },
        secondary: {
          900: '#831843',
          800: '#9D174D',
          700: '#BE185D',
          600: '#DB2777',
        },
      },
    },
  },
  plugins: [],
}
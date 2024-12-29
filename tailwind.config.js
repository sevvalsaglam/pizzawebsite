/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD84D',
        error: '#CE2829',
        border: '#E6E6E6',
        text: {
          primary: '#1A1A1A',
          secondary: '#999999',
        }
      },
      borderRadius: {
        DEFAULT: '8px',
      }
    },
  },
  plugins: [],
}


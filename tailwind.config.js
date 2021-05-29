module.exports = {
  purge: ['./src/**/*.{ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          100: '#E5F0EE',
          300: '#3ecfaf',
          400: '#5B6866',
          800: '#012D26',
        },
      },
      minHeight: {
        88: '88vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

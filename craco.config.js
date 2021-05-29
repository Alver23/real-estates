// Dependencies
const path = require(`path`);
module.exports = {
  webpack: {
    alias: {
      '@alversoft': path.resolve(__dirname, 'src/')
    }
  },
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};

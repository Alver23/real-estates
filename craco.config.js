// Dependencies
const path = require(`path`);
const jestConfiguration = require('./jest.config');
module.exports = {
  jest: {
    configure: jestConfiguration
  },
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: '#d50057',
        'brand-light-gray': '#e6e6e6',
        'brand-gray': '#524f4f',
        'brand-peach': '#f5e5de',
        'brand-dark-peach': '#e3d9d1',
        'brand-light-peach': '#f5f0eb',
        'brand-brown': '#b0a69c',
      },
      fontFamily: {
        'brand-book': 'Gotham Book',
        'brand-book-bold': 'Gotham Bold',
        'brand-medium': 'Gotham Medium',
        brand: 'calluna',
      },
    },
  },
  plugins: [],
};

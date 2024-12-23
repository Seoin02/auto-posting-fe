/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#350DFF',
        sub: '#637CF6',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};

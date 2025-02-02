/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        bounce: 'bounce 1s infinite',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};
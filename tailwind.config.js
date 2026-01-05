/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A3D62',
        accent: '#F1C40F',
        dark: '#7B241C',
        orange: '#E67E22',
      },
    },
  },
  plugins: [],
};

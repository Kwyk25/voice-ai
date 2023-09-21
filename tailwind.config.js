/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'transparent-black': 'rgba(0, 0, 0, 0.2)', // Change the alpha value (0.5) for transparency
      },
    },
  },
  plugins: [],
}
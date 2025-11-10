/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // INTWARI brand colors
        'light-green': '#C8E6C9',
        'dark-teal': '#0A4A4A',
        'cream': '#F5F3ED',
        'teal-hover': '#2C7873',
      },
      borderRadius: {
        'xl': '1.25rem',
      },
    },
  },
  plugins: [],
}

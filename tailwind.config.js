/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // INTWARI brand colors
        'light-green': '#C8E6C9',
        'dark-teal': '#0A4A4A',
        'cream': '#F5F3ED',
        'teal-hover': '#2C7873',
        'outline-ring': 'rgba(0, 0, 0, 0.1)',
        border: 'var(--border, #e2e8f0)',
      },
      borderRadius: {
        'xl': '1.25rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

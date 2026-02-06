/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
        'arial': ['Arial', 'sans-serif'],
        'sans': ['Arial', 'sans-serif'], // Default body font
        'heading': ['Lato', 'sans-serif'], // Default heading font
        'accent': ['Roboto Slab', 'serif'], // Accent font
      },
    },
  },
  plugins: [],
}

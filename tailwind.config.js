/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        biscuit: {
          50: '#fffcf7',
          100: '#fdf6ee',
          200: '#faf0e6',
          300: '#f4e3d1',
          400: '#e8cbaf',
          500: '#d9ad85',
          600: '#c58e5e',
        },
        maroon: {
          50: '#fdf2f4',
          100: '#fbe5e8',
          200: '#f7cfd5',
          300: '#f0aab5',
          400: '#e27588',
          500: '#ce4760',
          600: '#b62d47',
          700: '#991f37',
          800: '#800020', // Rich Classic Burgundy Maroon
          900: '#66051b',
          950: '#3d010e',
        },
        royalGold: {
          light: '#FDE68A',
          DEFAULT: '#D4AF37',
          dark: '#B45309',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        heading: ['Playfair Display', 'Plus Jakarta Sans', 'serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'maroon-sm': '0 2px 10px -1px rgba(128, 0, 32, 0.12)',
        'maroon-md': '0 6px 20px -2px rgba(128, 0, 32, 0.18)',
        'maroon-lg': '0 12px 32px -4px rgba(128, 0, 32, 0.25)',
      }
    },
  },
  plugins: [],
}

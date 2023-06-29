/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        zinc: {
          50: '#FAFAFA',
          800: '#5C5C5C',
          900: '#1D1D1D',
        },
        orange: {
          700: '#FF7E35',
        },
        pink: {
          700: '#FF3565',
        },
        gold: {
          500: '#D49B4E',
        },
        white: '#F4F3F3',
      },
    },
  },
  plugins: [],
};

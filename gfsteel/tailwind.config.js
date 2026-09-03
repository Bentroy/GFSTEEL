/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        steel: {
          950: '#0d1117',
          900: '#12161c',
          800: '#1b2129',
          700: '#2a323d',
          600: '#3f4c5a',
          500: '#5a6b7c',
          400: '#8b98a5',
          300: '#c2c9d1',
          100: '#eef1f4',
        },
        ember: {
          600: '#c1440e',
          500: '#e0591a',
          400: '#f0762f',
        },
        cream: {
          DEFAULT: '#F5F1E8',
          200: '#efe9db',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

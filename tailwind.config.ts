/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        awabel: {
          primary: '#1A3FA8',
          dark: '#0D2680',
          light: '#EBF0FF',
          accent: '#F28C28',
          yellow: '#F28C28',
          cream: '#F8F5F0',
          text: '#1E293B',
        },
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

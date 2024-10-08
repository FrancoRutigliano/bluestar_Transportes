/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily:{
        poppins: [ "Poppins", 'sans-serif']
      },
      colors:{
        'azul': '#0102FA',
        'gris': '#f1f1f1'
      },
      
    },
  },
  plugins: [],
}


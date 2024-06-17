/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    colors: {
      maindark: '#222831',
      subdark: '#31363F',
      maingreen: '#65B741',
      subgreen: '#549637',
      grey: '#B4B4B8',
      mainlight:'#EEEEEE',
      sublight:'#dfdfdf',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [],
}


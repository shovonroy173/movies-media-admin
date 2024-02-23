/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./src/assets/index.css",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "primary":"#010851" , 
      "secondary":"#9A7AF1" , 
      "tertiary":"#707070" , 
     "pink":"#EE9AE5" , 
     "white":"#ffff" , 
     "black":"#000000" ,
     "lightGreen":"#39DC98" , 
      "lightRed":"#FD809E" , 
     } , 
  },
  plugins: [],
}


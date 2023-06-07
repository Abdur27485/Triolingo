/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "slider1" : "url('https://bilingualkidspot.com/wp-content/uploads/2019/01/Spanish-Mama-Site.png')"
      }
    },
  },
  plugins: [require("daisyui")],
}


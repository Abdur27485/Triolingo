/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "slider1" : "url('https://bilingualkidspot.com/wp-content/uploads/2019/01/Spanish-Mama-Site.png')",
        "slider2" : "url('https://www.wondriumdaily.com/wp-content/uploads/2020/12/Laughing-Feature-1024x555.jpg')",
        "slider3" : "url('https://t4.ftcdn.net/jpg/02/82/22/19/360_F_282221917_zHU8r7dtvYc4xJ1tbpYeZ83ffym9GaT6.jpg')",
        "slider4" : "url('https://media.istockphoto.com/id/1349302576/photo/happy-graduate-student-holding-his-diploma-on-graduation-day.jpg?s=612x612&w=0&k=20&c=5tC0cWX5hv77DixVGIZkyf-1sh5GU7fDphhcXcRUD8g=')",
      }
    },
  },
  plugins: [require("daisyui")],
}


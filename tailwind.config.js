/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
 
    daisyui: {
      themes: [
        {
          mytheme: {

            "primary": "#FE9900",

            "secondary": "#000000EB",

            "accent": "#D9D9D9",

            "neutral": "#3D4451",

            "base-100": "#FFFFFF",

            "info": "#3ABFF8",

            "success": "#36D399",

            "warning": "#FBBD23",

            "error": "#F87272",
          },
        },
      ],
    },
 
  plugins: [require("daisyui")],
}

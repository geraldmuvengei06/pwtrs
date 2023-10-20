  /** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["media"],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#7CB078",

          secondary: "#FF7F2D",

          accent: "#1fb2a6",

          neutral: "#222333",

          "base-100": "#f5f5f4",

          info: "#4CB1FF",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ],
  },

  plugins: [require("tailwindcss-animate"), require("daisyui")],
};
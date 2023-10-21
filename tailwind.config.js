  /** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["media"],

  daisyui: {
    themes: [
      {
        mytheme: {
          // primary: "#7CB078",

          primary: "#3ae88b",

          secondary: "#FF7F2D",

          accent: "#1fb2a6",

          neutral: "#222333",

          // "base-100": "#f5f5f4",

          "base-100": "#f4f4f8",

          info: "#4CB1FF",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",

          extend: {
            animation: {
              blob: "blob 1s infinite",
            },
            keyframes: {
              blob: {
                "0%": {
                  transform: "translate(0px, 0px) scale(1)",
                },
                "33%": {
                  transform: "translate(30px, -50px) scale(1.4)",
                },
                "66%": {
                  transform: "translate(-20px, 20px) scale(0.5)",
                },
                "100%": {
                  transform: "tranlate(0px, 0px) scale(1)",
                },
              },
            },
          },
        },
        theme: {
          extend: {
            animation: {
              blob: "blob 1s infinite",
            },
            keyframes: {
              blob: {
                "0%": {
                  transform: "translate(0px, 0px) scale(1)",
                },
                "33%": {
                  transform: "translate(30px, -50px) scale(1.1)",
                },
                "66%": {
                  transform: "translate(-20px, 20px) scale(0.9)",
                },
                "100%": {
                  transform: "tranlate(0px, 0px) scale(1)",
                },
              },
            },
          },
        },
      },
    ],
  },

  plugins: [
    require("tailwindcss-animate"),
    require("daisyui"),
    require("@tailwindcss/typography"),
  ],
};
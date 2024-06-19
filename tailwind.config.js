/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        avengers: ["Avengero", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      translate: {
        "-full-more": "-105%",
      },
      screens: {
        xs: "480px",
        mini: "340px",
      },
    },
  },
  plugins: [],
};

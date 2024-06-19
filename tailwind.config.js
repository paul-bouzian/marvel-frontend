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
        "-full-more": "-105%", // Ajout d'une valeur personnalisée pour un décalage supplémentaire
      },
    },
  },
  plugins: [],
};

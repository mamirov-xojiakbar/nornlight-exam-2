/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center:true,
      padding: "90px",
      screens: {
        xl: "1332px",
        '2xl': "1332px",
      }
    },
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./components/**/*.{html,js}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html", "./dist/**/*.{js,html}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Sono", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        html: { fontSize: "62.5%" },
      });
    },
  ],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('https://i.ibb.co/Qm0gh0X/herobg.jpg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};

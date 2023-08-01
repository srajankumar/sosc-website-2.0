/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat",
        Poppins: "Poppins",
      },
      colors: {
        chartreuse: {
          100: "#70ff07",
          200: "#70ff00",
        },
      },
    },
  },
  plugins: [],
};

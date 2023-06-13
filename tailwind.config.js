/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary_100: "#4130A4",
        primary_90: "rgb(32, 24, 82)",
        secondary_100: "rgb(124, 127, 148)",
        // primary_60:""
      },

      backgroundColor: {
        primary_100: "#4130A4",
        secondary_100: "rgb(124, 127, 148)",
        secondary_80: "rgb(40, 41, 50)",
        unactive_100: "#efefef",
      },
      fontFamily: {
        crimson: ["'Crimson Text', serif"],
      },
    },
  },

  plugins: [],
};

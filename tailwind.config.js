/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*/*/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        5: "5",
        15: "15",
        25: "25",
        35: "35",
      },
      opacity: {
        25: "0.25",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary_100: "#4130A4",
        primary_90: "rgb(32, 24, 82)",
        secondary_100: "rgb(124, 127, 148)",
      },

      backgroundColor: {
        primary_130: "rgb(238, 235, 250)",
        primary_120: "rgb(203, 197, 240)",
        primary_110: "rgb(168, 158, 230)",
        primary_100: "#4130A4",
        primary_90: "rgb(32, 24, 82)",

        secondary_100: "rgb(124, 127, 148)",
        secondary_80: "rgb(40, 41, 50)",

        gray_100: "rgb(239 241 249)",
        gray_100_opacity: "rgb(239 241 249 / 0.7)",
        unactive_100: "#efefef",
      },
      backgroundImage: {
        home_btn:
          "linear-gradient(270deg, rgb(151, 114, 228) 0%, rgb(113, 53, 211) 39.06%, rgb(55, 40, 145) 100%)",
      },
      fontFamily: {
        crimson: ["'Crimson Text', serif"],
      },
    },
  },

  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  "#FEFBF0",
          100: "#FDF3CC",
          200: "#FAE38A",
          300: "#F0C84A",
          400: "#D4A017",
          500: "#B8860B",
          600: "#9A6F08",
          700: "#7A5506",
          800: "#5A3D04",
          900: "#3A2502",
        },
        obsidian: {
          50:  "#F2F2F2",
          100: "#E0E0E0",
          200: "#BDBDBD",
          300: "#9E9E9E",
          400: "#757575",
          500: "#424242",
          600: "#2C2C2C",
          700: "#1A1A1A",
          800: "#111111",
          900: "#080808",
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        body:    ['"Jost"',               "sans-serif"],
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

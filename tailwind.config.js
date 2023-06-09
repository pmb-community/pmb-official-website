/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/layouts/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-beranda-proker-card":
          "linear-gradient(to right top, #c0d1b6, #b4c8a8, #a8bf9a, #9db78d, #91ae7f)",
      },
      colors: {
        inquares: {
          loafer: {
            50: "#fefffe",
            100: "#fefefc",
            200: "#fcfef8",
            300: "#fafdf4",
            400: "#f7fbeb",
            500: "#f3f9e3",
            600: "#dbe0cc",
            700: "#b6bbaa",
            800: "#929588",
            900: "#777a6f",
          },
          "blue-whale": {
            50: "#f3f4f6",
            100: "#e7eaec",
            200: "#c3cad0",
            300: "#9fa9b4",
            400: "#57697c",
            500: "#0f2944",
            600: "#0e253d",
            700: "#0b1f33",
            800: "#091929",
            900: "#071421",
          },
          pizazz: {
            50: "#fff9f2",
            100: "#fff4e6",
            200: "#ffe3c0",
            300: "#ffd39b",
            400: "#feb14f",
            500: "#fe9004",
            600: "#e58204",
            700: "#bf6c03",
            800: "#985602",
            900: "#7c4702",
          },
          "hippie-green": {
            50: "#f7f9f6",
            100: "#eff3ed",
            200: "#d8e2d1",
            300: "#c0d1b6",
            400: "#91ae7f",
            500: "#628b48",
            600: "#587d41",
            700: "#4a6836",
            800: "#3b532b",
            900: "#304423",
          },
          "green-apple": {
            50: "#f8fbf6",
            100: "#f0f8ed",
            200: "#daedd1",
            300: "#c3e1b5",
            400: "#97cb7e",
            500: "#6ab547",
            600: "#5fa340",
            700: "#508835",
            800: "#406d2b",
            900: "#345923",
          },
        },
      },
    },
  },
  plugins: [],
};

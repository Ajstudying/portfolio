/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      primary: "#db7093",
      secondary: "#f5c3c3",
      grayscaleA: "#000",
      grayscaleB: "#111",
      grayscaleC: "#666",
      grayscaleD: "#777",
      grayscaleE: "#eee",
      grayscaleF: "#fff",
      grayscaleG: "#5f6368",
    },
    backgroundPosition: {
      center: "center",
      "right-top": "right 30%",
    },
    backgroundSize: {
      8: "2rem",
      12: "3rem",
      16: "4rem",
      "30%": "30%",
      contain: "contain",
      cover: "cover",
    },
    extend: {
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
      },
      fontFamily: {
        omyu: ["omyu_pretty"],
      },
      animation: {
        slide: "slide 0.3s linear 0.01s",
        spread: "spread 0.3s ease 0.01s ",
      },
      keyframes: {
        slide: {
          "0%": { left: "-100%" },
          "100%": { left: "0" },
        },
        spread: {
          "0%": { width: 0, height: 0 },
          "100%": { width: "100%", height: "100%" },
        },
      },
      rotate: {
        full: "360deg",
      },
    },
  },
  plugins: [],
};

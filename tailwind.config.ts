import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "white-bg": "#ffffff",
        "orange-primary": "#D95F27",
        "orange-bg": "#2B1308",
        "black-primary": "#1E1E1E",
        "black-secondary": "#242424",
        "gray-primary": "#919191",
        "gray-secondary": "#CFD2D2",
        "gray-tertiary": "#484848",
        "gray-border": "#747474",
        "gray-text": "#CDD0D1",
      },

      fontFamily: {
        fontInter: "Inter, sans-serif",
        fontRaleway: "Raleway, sans-serif",
        fontLato: "Lato, sans-serif",
      },
    },
  },
  plugins: [],
};
export default config;

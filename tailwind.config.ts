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
        "grey-primary": "#919191",
        "grey-secondary": "#CFD2D2",
        "grey-tertiary": "#484848",
      },
    },
  },
  plugins: [],
};
export default config;

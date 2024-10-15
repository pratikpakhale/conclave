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
        background: "var(--background)",
        foreground: "var(--foreground)",
        color1: "#2b2d42",
        color2: "#8d99ae",
        color3: "#edf2f4",
        color4: "#ef233c",
        color5: "#d90429",
      },
      boxShadow: {
        "hover-landing": "0 0 20px #3a506b",
        landing: "0 9px 20px #0000000f",
      },
    },
  },
  plugins: [],
};
export default config;

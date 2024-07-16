import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#555555",
        color2: "#0c0c0c",
      },
    },
  },
  variants: {},
  plugins: [],
};
export default config;

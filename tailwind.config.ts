import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#E5E5E5",
      background: "#000000",
      gray: "#D4D4D4",
      boxButton:
        "linear-gradient(90deg, rgba(250,85,96,1) 0%, rgba(231,83,133,1) 45%, rgba(77,145,255,1) 99%);",
    },
  },
  plugins: [],
};
export default config;

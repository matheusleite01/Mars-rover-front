import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      'Plus': ["Plus Jakarta Sans"]
    },
    colors: {
      white: "#E5E5E5",
      background: "#000000",
      gray: "#D4D4D4",
      inputColor: "#27272A",
      inputBorder: "#6B7280",
      border: "#424246",
      erroColor: "#FA5560"
    },
    backgroundImage: {
      "gradient-custom":
        "linear-gradient(90deg, rgba(250,85,96,1) 0%, rgba(231,83,133,1) 45%, rgba(77,145,255,1) 99%)",
    },
    boxShadow: {
      input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
    },
  },
  plugins: [],
};
export default config;

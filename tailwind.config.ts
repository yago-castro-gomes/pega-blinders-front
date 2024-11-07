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
        black: {
          DEFAULT: "#000",
          100: '#1C1C1C',
          200: '#191919',
          300: '#121212'
        },
        primary: {
          DEFAULT: '#DAA520',
          100: '#FF0000',
          200: '#FF0000'
        }
      },
      textColor: {
        primary: '#FF0000',
        secondary: '#DAA520',
        tertiary: '#1C1C1C'
      }
    },
  },
  plugins: [],
};
export default config;

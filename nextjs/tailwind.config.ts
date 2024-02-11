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
        "darkBackground": "#181818",
        "background": "#F0F0F0",
        "darkText": "#E0E0E0",
        "text": "#2E2E2E"
      }
    },
  },
  plugins: [],
};
export default config;

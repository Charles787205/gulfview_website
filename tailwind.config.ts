import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "primary-blue": "#00001D",
        "secondary-blue": "#0021F5",
        yellow: "#FFEB00",
        gray: "#333333",
      },
    },
  },
  plugins: [],
};
export default config;

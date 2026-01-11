
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Aqui adicionamos suporte para as fontes que dão o ar "Premium"
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'sans-serif'],
        serif: ['var(--font-playfair-display)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
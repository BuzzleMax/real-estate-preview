import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#050816",
        surface: "#0c1020",
        soft: "#10162d",
        line: "rgba(255,255,255,0.08)",
        text: "#f8f8fb",
        muted: "#b7bdd2",
        emerald: "#2fd0a1",
        royal: "#5f7dff",
        gold: "#d4b36c",
        plum: "#9b6dff"
      },
      boxShadow: {
        luxe: "0 28px 80px rgba(0, 0, 0, 0.28)",
        glass: "0 16px 40px rgba(14, 18, 36, 0.26)"
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top left, rgba(95,125,255,0.22), transparent 30%), radial-gradient(circle at top right, rgba(47,208,161,0.16), transparent 28%), linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0))"
      }
    }
  },
  plugins: []
};

export default config;

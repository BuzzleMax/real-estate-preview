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
        surface: "#0b1020",
        soft: "#11182d",
        ink: "#02050f",
        line: "rgba(255,255,255,0.08)",
        text: "#f8f8fb",
        muted: "#a9b2c8",
        emerald: "#2fd0a1",
        royal: "#5f7dff",
        gold: "#d4b36c",
        plum: "#9b6dff",
        lavender: "#c2b6ff",
        rosegold: "#e8c4b8",
        champagne: "#f7e7ce"
      },
      boxShadow: {
        luxe: "0 30px 90px rgba(0, 0, 0, 0.32)",
        glass: "0 20px 60px rgba(14, 18, 36, 0.28)",
        glow: "0 0 0 1px rgba(255,255,255,0.05), 0 24px 70px rgba(95,125,255,0.18)",
        "glow-plum": "0 0 40px rgba(155,109,255,0.3), 0 0 80px rgba(155,109,255,0.1)",
        "glow-emerald": "0 0 40px rgba(47,208,161,0.3), 0 0 80px rgba(47,208,161,0.1)",
        "inner-glow": "inset 0 1px 0 rgba(255,255,255,0.08)",
        "card-hover": "0 40px 100px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)"
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "3.5rem"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top left, rgba(95,125,255,0.22), transparent 30%), radial-gradient(circle at top right, rgba(47,208,161,0.16), transparent 28%), linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "glass-gradient":
          "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
        "premium-dark":
          "linear-gradient(180deg, #030612 0%, #070b17 35%, #050816 100%)",
        "spotlight-plum":
          "radial-gradient(circle at 50% 0%, rgba(155,109,255,0.15), transparent 50%)",
        "spotlight-emerald":
          "radial-gradient(circle at 50% 0%, rgba(47,208,161,0.12), transparent 50%)",
        "spotlight-royal":
          "radial-gradient(circle at 50% 0%, rgba(95,125,255,0.15), transparent 50%)"
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)",
        "out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "float-3d": {
          "0%, 100%": { transform: "translateY(0px) rotateX(0deg)" },
          "50%": { transform: "translateY(-14px) rotateX(2deg)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.04)" }
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.1)" }
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "ping-slow": {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "75%, 100%": { transform: "scale(2)", opacity: "0" }
        },
        "width-expand": {
          "0%": { width: "0%" },
          "100%": { width: "100%" }
        },
        "scroll-indicator": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(8px)" }
        }
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-3d": "float-3d 8s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        "pulse-soft": "pulseSoft 5s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "slide-down": "slide-down 0.3s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
        "spin-slow": "spin-slow 8s linear infinite",
        "ping-slow": "ping-slow 3s ease-out infinite",
        "scroll-indicator": "scroll-indicator 2s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Sampled from the Chop Beta AI logo
        primary: "#1E9054",
        leaf: "#2AAE66",
        forest: "#0C3B24",
        accent: "#FC7200",
        "accent-deep": "#D95F00",
        pepper: "#FFB703",
        tomato: "#E4472B",
        cream: "#FFF8EE",
        alternate: "#FBF1E3",
        canvas: "#FFFFFF",
        ink: "#15201A",
        muted: "#5E6660",
      },
      fontFamily: {
        heading: ["var(--font-jakarta)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
        control: "12px",
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(21,32,26,.04), 0 12px 32px -12px rgba(21,32,26,.18)",
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

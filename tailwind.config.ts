import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "site-inner": "1080px",
      },
      width: {
        "site-inner": "89.84375%",
      },
      height: {
        "header-desktop": "80px",
        "header-mobile": "60px",
        "main-image": "560px",
      },
      colors: {
        primary: "#023F73",    // Daiwa navy
        gold: "#C8B536",       // Daiwa gold/olive
        secondary: "#07121C",  // deep dark (body text)
        footer: "#343D45",     // Daiwa footer bg
        footerWidget: "#f4f6fb",
      },
      spacing: {
        "hero-link-min": "220px",
        "content-pad-x": "7.5%",
        "widget-y": "78px",
      },
      keyframes: {
        slideDown: {
          "0%": { top: "-100%" },
          "100%": { top: "0" },
        },
        slideUp: {
          "0%": { bottom: "-100%" },
          "100%": { bottom: "0" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(50%)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        slideDown: "slideDown 1.5s ease-in-out 0s forwards",
        slideUp: "slideUp 1.5s ease-in-out 0s forwards",
        fadeInUp: "fadeInUp 1s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;

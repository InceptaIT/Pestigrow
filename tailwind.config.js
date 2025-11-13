// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // This is the CORRECT location for the theme configuration
    extend: {
      colors: {
        primary: "#2e7d32",
        "primary-light": "#4caf50",
        "primary-dark": "#1b5e20",
        secondary: "#f5f5f5",
        // You should also define the text colors we used previously
        textDark: "#333333",
        textLight: "#ffffff",
      },
    },
    animation: {
      fadeInUp: "fadeInUp 0.8s ease-out forwards",
      slideInLeft: "slideInLeft 0.8s ease-out forwards",
      slideInRight: "slideInRight 0.8s ease-out forwards",
      scaleX: "scaleX 0.8s ease-out forwards",
      "pulse-slow": "pulse 3s infinite",
      "bounce-slow": "bounce 2s infinite",
      "gradient-x": "gradient-x 3s ease infinite",
      float: "float 6s ease-in-out infinite",
      count: "count 2s ease-out forwards",
      shine: "shine 1.5s ease-out forwards",
    },
    keyframes: {
      fadeInUp: {
        "0%": { opacity: "0", transform: "translateY(30px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      slideInLeft: {
        "0%": { opacity: "0", transform: "translateX(-50px)" },
        "100%": { opacity: "1", transform: "translateX(0)" },
      },
      slideInRight: {
        "0%": { opacity: "0", transform: "translateX(50px)" },
        "100%": { opacity: "1", transform: "translateX(0)" },
      },
      scaleX: {
        "0%": { transform: "scaleX(0)" },
        "100%": { transform: "scaleX(1)" },
      },
      "gradient-x": {
        "0%, 100%": { backgroundPosition: "0% 50%" },
        "50%": { backgroundPosition: "100% 50%" },
      },
      float: {
        "0%, 100%": { transform: "translateY(0px)" },
        "50%": { transform: "translateY(-20px)" },
      },
      count: {
        "0%": { transform: "scale(0.5)", opacity: "0" },
        "100%": { transform: "scale(1)", opacity: "1" },
      },
      shine: {
        "0%": { left: "-100%" },
        "100%": { left: "100%" },
      },
    },
  },

  plugins: [],
};

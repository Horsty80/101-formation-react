module.exports = {
  mode: "jit",
  presets: [require("./kanoma-preset.js")],
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "480px",
      // => @media (min-width: 480px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      laptop: "768px",
      // => @media (min-width: 768px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      desktop: "991px",
      // => @media (min-width: 991px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    boxShadow: {
      curveShadowAfter: "35px -35px 0 10px var(--white)",
      curveShadowBefore: "35px 35px 0 10px var(--white)",
      card: "0 7px 25px rgba(0, 0, 0, 0.08)",
    },
    extend: {
      colors: {
        primary: "var(--purple)",
        secondary: "var(--yellow)",
        black2: "var(--black2)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],
};

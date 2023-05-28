module.exports = {
  mode: "jit",
  presets: [require("./kanoma-preset.js")],
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    boxShadow: {
      curveShadowAfter: "35px -35px 0 10px var(--white)",
      curveShadowBefore: "35px 35px 0 10px var(--white)",
    },
    extend: {
      colors: {
        primary: "var(--purple)",
        secondary: "var(--yellow)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
    require("tailwind-scrollbar-hide"),
  ],
};

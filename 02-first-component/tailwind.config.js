module.exports = {
  mode: "jit",
  presets: [require("./kanoma-preset.js")],
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
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

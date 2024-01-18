/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavenderblush: "#f5eaea",
        black: "#000",
        lightblue: "#97d5e8",
        snow: "rgba(250, 243, 243, 0.66)",
        gray: {
          "100": "#0b0101",
          "200": "rgba(16, 14, 14, 0.66)",
        },
        aliceblue: "#eef6f8",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      "17xl": "36px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

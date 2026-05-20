/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],

        bricolage: ["var(--font-bricolage)"],

        calligraffitti: ["var(--font-calligraffitti)"],

        sfpro: [
          "-apple-system",
          "BlinkMacSystemFont",
          "San Francisco",
          '"SF Pro Display"',
          '"SF Pro Text"',
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },

  plugins: [],
};
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white1: "#E8E8E8",
        black1: "#0f0f0f",
        black2: "#0d0c0c",
      },
      screens: {
        phone: "414px",

        tablet: "640px",

        laptop: "1024px",

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};

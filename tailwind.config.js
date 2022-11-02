/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
        "4xl": "1820px",
      },
      fontSize: {
        112.5: "28.125rem",
        57.5: "14.375rem",
      },
      spacing: {
        296: "74rem",
      },
      colors: {
        glassExtraLight: "rgba(255, 255, 255, 0.1)",
        primaryDark: "#404040",
        primaryMediumDark: "#777777",
        accent: "#FC9788",
      },
      height: {
        primary: "calc(100vh - 80px)",
      },
      backgroundImage: {
        primary:
          "radial-gradient(47.19% 174.68% at 88.51% 100%, #FF1A57 0%, rgba(254, 23, 85, 0.5) 55.73%, rgba(254, 22, 84, 0.2) 100%), radial-gradient(41.94% 100% at 64.1% 0%, #FEB263 0%, rgba(254, 178, 99, 0.615686) 60.09%, rgba(254, 178, 99, 0.2) 100%), radial-gradient(37.29% 77.29% at 22.4% 0%, #FE7059 0%, rgba(251, 103, 92, 0.7) 67.71%, rgba(248, 93, 95, 0.25) 92.71%), radial-gradient(28.61% 83.35% at 17.15% 100%, #D427A5 67.19%, rgba(212, 39, 165, 0.2) 100%), radial-gradient(27.05% 59.26% at 47.22% 100%, #D427A5 0%, rgba(212, 39, 165, 0.7) 100%)",
        glassLight:
          " linear-gradient(334.14deg, rgba(255, 255, 255, 0.31) -14.65%, rgba(255, 255, 255, 0) 103.2%), linear-gradient(149.49deg, rgba(255, 232, 191, 0.4) -4.75%, rgba(255, 232, 191, 0) 119.61%)",

        glassDark:
          "linear-gradient(334.14deg, rgb(0 0 0 / 31%) -14.65%, rgb(90 43 43 / 0%) 103.2%), linear-gradient(149.49deg, rgb(63 54 38 / 40%) -4.75%, rgb(192 162 109 / 0%) 119.61%)",
      },
    },
  },
  plugins: [],
};

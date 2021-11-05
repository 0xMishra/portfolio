module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          550: "rgb(19, 47, 76)",
          650: "rgba(19, 47, 76,0.94)",
          750: "rgba(19, 47, 76,0)",
        },
        gray: {
          750: "rgba(250, 250, 250, 0.001)",
        },
      },
      fontFamily: {
        poppins: ["Poppins"],
        // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  content: [
    "./resources/**/*.{js,jsx,ts,tsx}",
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extends: {},
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        brand: {
          DEFAULT: "#9C483E",
          prime: "#D5F4FD",
          secondary: "#00ced1",
          night: '#212121'
        },
    },
  },
  plugins: [require('@tailwindcss/forms'), require("@tailwindcss/line-clamp")],
}
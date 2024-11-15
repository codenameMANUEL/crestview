// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#001f3f",
      },
      fontFamily: {
        "space-grotesk": ['"Space Grotesk"', "sans-serif"],
      },
      fontSize: {
        'text-100': '100px'
      }
    },
  },
  plugins: [],
};

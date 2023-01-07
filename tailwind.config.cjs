/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
          "grayscale": {
            "50": "rgb(247, 247, 247)",
            "100": "rgb(239, 239, 239)",
            "200": "rgb(228, 228, 228)",
            "300": "rgb(208, 208, 208)",
            "400": "rgb(168, 168, 168)",
            "500": "rgb(135, 135, 135)",
            "600": "rgb(109, 109, 109)",
            "700": "rgb(95, 95, 95)",
            "800": "rgb(74, 74, 74)",
            "900": "rgb(61, 61, 61)",
            "1000": "rgb(42, 42, 42)",
            "1100": "rgb(28, 28, 28)",
            "1200": "rgb(18, 18, 18)"
          }
        }
    }
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
};
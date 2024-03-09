/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
      require("daisyui")
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "synthwave", "coffee"],
  },
}


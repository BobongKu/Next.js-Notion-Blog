/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',
  theme: {
    extend:{
      colors: {
        'dark': '#0F0F0F',
        'light': '#F5F7F8'
      },
    },
    fontFamily: {
      NanumSquareNeo: ['NanumSquareNeo-Variable']
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}


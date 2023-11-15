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
        'notion': '#1d1e1f'
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


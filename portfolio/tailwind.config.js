module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile': "url('./assets/background-mobile.png')",
        'desktop': "url('./assets/background.png')"
      },
      fontFamily: {
        'roboto': ['Roboto']
      },
      colors: {
        'orange-custom': "#FF7444"
      }
    },
  },
  plugins: [],
}
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'lexend': ['Lexend', 'sans-serif'],
        'ballad': ['BALLAD', 'sans-serif']
      },
      backgroundImage:{
        'img1': "url('img/palmira.jpg')",
        'img2': "url('img/ahr.jpg')",
        'img3': "url('img/stfe.jpg')"
      },
      colors:{
        'primary': '#54428E',
        'secondary': '#FFF',
        'tertiary': '#f97316'
      }
    },
  },
  plugins: [],
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      width: {
        'img-small': '60px',
      },
      height: {
        'img-small': '60px',
      },
      colors: {
        'bg-dark': '#6d210f',
        'highlight': '#e49d32',
      },
      borderWidth: {
        'standard': '3px',
      },
    },
  },
  plugins: [],
}

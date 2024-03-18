/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", 'sans-serif'],
        'roboto': ["Roboto", 'sans-serif']

      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}

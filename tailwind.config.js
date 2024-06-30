/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#000000',
        dark_blur: 'rgba(0, 0, 0, 25%)',
        collection_blur: 'rgba(0, 0, 0, 75%)',
        overlay: 'rgba(0, 0, 0, 95%)',
        purple: '#52057B',
        light_purple: '#816797',
        beige: '#D6D5A8'
      }
    }
  },
  plugins: []
}

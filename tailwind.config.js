/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#171525",
        secondary: "#5F5B6B",
        deepPurple: "#4F46E5",
        violet: "#8B5CF6",
        lavender: "#A78BFA",
        pinkAccent: "#EC4899",
        canvas: "#FAFAFF",
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

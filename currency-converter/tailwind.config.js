// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // This is crucial:
    // It tells Tailwind to scan your HTML file (where your React app mounts)
    "./index.html",
    // It tells Tailwind to scan all JS, JSX, TS, TSX files in your 'src' directory
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
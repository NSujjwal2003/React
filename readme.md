npm create vite@latest

cd my-tailwind-app

npm install

npm install -D tailwindcss@next @tailwindcss/postcss postcss autoprefixer





Manually Create tailwind.config.js

// tailwind.config.js (in react-router project)
/** @type {import('tailwindcss').Config} c*/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}





Manually Create postcss.config.js

// postcss.config.js (in react-router project)
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}





in index.css

@import "tailwindcss";
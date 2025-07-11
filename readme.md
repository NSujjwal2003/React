npm create vite@latest Custombg -- --template react

               or
            

npm create vite@latest my-project



now name some pachange name

cd Custombg
npm install
npm run dev



✅ 2. Install Tailwind & PostCSS dependencies
bash
Copy code
npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss



✅ 3. Create config files
tailwind.config.js


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


postcss.config.js (if using "type": "module" in package.json)

import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
}

🔁 Or use postcss.config.cjs with CommonJS if not using ESM.

✅ 4. Create or update src/index.css
css
Copy code
@tailwind base;
@tailwind components;
@tailwind utilities;


✅ 5. Import the CSS in main.jsx
jsx
Copy code
import './index.css';


✅ 6. Start the dev server
bash
Copy code
npm run dev


✅ 7. Verify setup in App.jsx
jsx
Copy code
function App() {
  return (
    <div className="text-3xl font-bold text-blue-500 underline">
      Tailwind is working!
    </div>
  );
}
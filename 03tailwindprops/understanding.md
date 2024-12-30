# To add tailwind to the file
open the offical tailwind site: https://tailwindcss.com/
then go to the docs , check for the framework guide
then as per the framework (vite in this case),follow the steps to install tailwind into the file
1.check the file of project "cd<file>"
2.installing :
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
3.the in tailwind.config.js check the content section make changes as per the things
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

4.then go to public check for index.css and add the extension on top of css
@tailwind base;
@tailwind components;
@tailwind utilities;

5.just run the project
npm run dev

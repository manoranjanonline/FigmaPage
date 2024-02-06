/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}',
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  'node_modules/flowbite-react/lib/esm/**/*.js',
],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin'),],
}


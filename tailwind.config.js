/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    
  },
  plugins: [],
  variants: {
    extend: {
        opacity: [
            "disabled"
        ],
        backgroundColor: [
            "disabled"
        ],
        cursor: [
            "disabled"
        ]
    }
},
}
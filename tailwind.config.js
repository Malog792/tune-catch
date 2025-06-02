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
  
  theme: {
  extend: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
},

 
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.25s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-4px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },

}


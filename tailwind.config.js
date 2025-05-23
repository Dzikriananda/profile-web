const { fontFamily } = require("tailwindcss/defaultTheme");
const Unfonts = require("unplugin-fonts");
const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".flowbite-react\\class-list.json"
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", ...fontFamily.sans],
      // jersey: ["Jersey","AdventPro"]
    },
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        bouncing: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-80px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        reverseBouncing: {
          '0%': { transform: 'translateY(-80px)' },
          '50%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-80px)' },
        },
      
        
      },

      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'bouncing-logo': 'bouncing 4s infinite',
        'reverse-bouncing-logo': 'reverseBouncing 4s infinite'
      },
    },
  },
  plugins: [flowbiteReact],
}
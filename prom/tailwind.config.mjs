// First, let's add the animations to our Tailwind config
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        sway: {
          '0%, 100%': { transform: 'translateX(0) rotate(0deg)' },
          '25%': { transform: 'translateX(5px) rotate(5deg)' },
          '75%': { transform: 'translateX(-5px) rotate(-5deg)' },
        }
      },
      animation: {
        'float-slow': 'float 4s ease-in-out infinite',
        'float-medium': 'float 3s ease-in-out infinite',
        'float-fast': 'float 2.5s ease-in-out infinite',
        'sway-slow': 'sway 6s ease-in-out infinite',
        'sway-medium': 'sway 5s ease-in-out infinite',
        'sway-fast': 'sway 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

// Now, let's create a new component for our animated elements
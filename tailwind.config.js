/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'despensa-green': '#7CA98D',
        'despensa-bg': '#F2F7FA',
        'despensa-gray': '#3E4C59',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'roll-continuous-left': 'rollContinuousLeft 8s linear infinite',
        'roll-continuous-right': 'rollContinuousRight 10s linear infinite',
        'roll-continuous-left-slow': 'rollContinuousLeft 12s linear infinite',
        'roll-continuous-right-slow': 'rollContinuousRight 14s linear infinite',
        'roll-continuous-left-fast': 'rollContinuousLeft 6s linear infinite',
        'roll-continuous-right-fast': 'rollContinuousRight 7s linear infinite',
      },
      keyframes: {
        rollContinuousLeft: {
          '0%': { 
            transform: 'translateX(-100px) rotate(0deg)',
            opacity: '0'
          },
          '10%': { 
            opacity: '1'
          },
          '90%': { 
            opacity: '1'
          },
          '100%': { 
            transform: 'translateX(calc(100vw + 100px)) rotate(720deg)',
            opacity: '0'
          },
        },
        rollContinuousRight: {
          '0%': { 
            transform: 'translateX(calc(100vw + 100px)) rotate(0deg)',
            opacity: '0'
          },
          '10%': { 
            opacity: '1'
          },
          '90%': { 
            opacity: '1'
          },
          '100%': { 
            transform: 'translateX(-100px) rotate(-720deg)',
            opacity: '0'
          },
        },
      },
    },
  },
  plugins: [],
};
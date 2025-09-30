/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette based on TiranaJS design
        primary: {
          50: '#f8f7ff',   // Very light lavender
          100: '#f0edff',  // Light lavender background
          200: '#e6e0ff',  // Soft lavender
          300: '#d4c9ff',  // Medium lavender
          400: '#b8a7ff',  // Accent lavender
          500: '#9c85ff',  // Primary purple
          600: '#8b6eff',  // Medium purple
          700: '#7c5aff',  // Deep purple
          800: '#6b47db',  // Dark purple
          900: '#5a3bb5',  // Very dark purple
          950: '#3d2875',  // Deep indigo
        },
        accent: {
          pink: '#ff9a9e',    // Light pink for gradient
          purple: '#a18cd1',  // Light purple for gradient
        },
        dark: {
          primary: '#2F2853',  // Dark indigo for text/backgrounds
          secondary: '#3d2875', // Slightly lighter dark
        }
      },
      backgroundImage: {
        'gradient-cloud': 'linear-gradient(135deg, #a18cd1 0%, #ff9a9e 100%)',
        'gradient-primary': 'linear-gradient(135deg, #9c85ff 0%, #7c5aff 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'float': 'float 12s ease-in-out infinite',
        'float-delayed': 'float-delayed 15s ease-in-out infinite',
        'float-slow': 'float-slow 18s ease-in-out infinite',
        'morph': 'morph 20s ease-in-out infinite',
        'bubble-rise': 'bubble-rise 15s linear infinite',
        'bubble-rise-slow': 'bubble-rise-slow 20s linear infinite',
        'bubble-rise-fast': 'bubble-rise-fast 10s linear infinite',
        'bubble-drift': 'bubble-drift 25s ease-in-out infinite',
        'bubble-pulse': 'bubble-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) rotate(0deg) scale(1)',
          },
          '25%': { 
            transform: 'translateY(-20px) translateX(10px) rotate(5deg) scale(1.05)',
          },
          '50%': { 
            transform: 'translateY(-10px) translateX(-15px) rotate(-3deg) scale(0.95)',
          },
          '75%': { 
            transform: 'translateY(15px) translateX(5px) rotate(2deg) scale(1.02)',
          },
        },
        'float-delayed': {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) rotate(0deg) scale(1)',
          },
          '20%': { 
            transform: 'translateY(10px) translateX(-8px) rotate(-2deg) scale(1.03)',
          },
          '40%': { 
            transform: 'translateY(-25px) translateX(12px) rotate(4deg) scale(0.98)',
          },
          '60%': { 
            transform: 'translateY(-5px) translateX(-10px) rotate(-1deg) scale(1.01)',
          },
          '80%': { 
            transform: 'translateY(20px) translateX(8px) rotate(3deg) scale(0.97)',
          },
        },
        'float-slow': {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) rotate(0deg) scale(1)',
          },
          '33%': { 
            transform: 'translateY(-15px) translateX(-12px) rotate(-4deg) scale(1.08)',
          },
          '66%': { 
            transform: 'translateY(12px) translateX(18px) rotate(6deg) scale(0.92)',
          },
        },
        morph: {
          '0%, 100%': {
            borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
          },
          '25%': {
            borderRadius: '36% 64% 64% 36% / 64% 48% 52% 36%',
          },
          '50%': {
            borderRadius: '73% 27% 83% 17% / 72% 39% 61% 28%',
          },
          '75%': {
            borderRadius: '42% 58% 70% 30% / 45% 45% 55% 55%',
          },
        },
        'bubble-rise': {
          '0%': { 
            transform: 'translateY(100vh) translateX(0px) rotate(0deg) scale(0.5)',
            opacity: '0',
          },
          '10%': { 
            opacity: '0.6',
          },
          '50%': { 
            transform: 'translateY(50vh) translateX(20px) rotate(180deg) scale(1)',
            opacity: '0.8',
          },
          '90%': { 
            opacity: '0.4',
          },
          '100%': { 
            transform: 'translateY(-20vh) translateX(-10px) rotate(360deg) scale(0.3)',
            opacity: '0',
          },
        },
        'bubble-rise-slow': {
          '0%': { 
            transform: 'translateY(100vh) translateX(0px) rotate(0deg) scale(0.3)',
            opacity: '0',
          },
          '15%': { 
            opacity: '0.5',
          },
          '50%': { 
            transform: 'translateY(50vh) translateX(-30px) rotate(270deg) scale(0.8)',
            opacity: '0.7',
          },
          '85%': { 
            opacity: '0.3',
          },
          '100%': { 
            transform: 'translateY(-10vh) translateX(15px) rotate(540deg) scale(0.1)',
            opacity: '0',
          },
        },
        'bubble-rise-fast': {
          '0%': { 
            transform: 'translateY(100vh) translateX(0px) rotate(0deg) scale(0.8)',
            opacity: '0',
          },
          '5%': { 
            opacity: '0.9',
          },
          '50%': { 
            transform: 'translateY(50vh) translateX(40px) rotate(180deg) scale(1.2)',
            opacity: '1',
          },
          '95%': { 
            opacity: '0.2',
          },
          '100%': { 
            transform: 'translateY(-30vh) translateX(-20px) rotate(360deg) scale(0.4)',
            opacity: '0',
          },
        },
        'bubble-drift': {
          '0%, 100%': { 
            transform: 'translateX(0px) scale(1)',
          },
          '25%': { 
            transform: 'translateX(100px) scale(1.1)',
          },
          '50%': { 
            transform: 'translateX(-80px) scale(0.9)',
          },
          '75%': { 
            transform: 'translateX(60px) scale(1.05)',
          },
        },
        'bubble-pulse': {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '0.6',
          },
          '50%': { 
            transform: 'scale(1.2)',
            opacity: '0.9',
          },
        }
      }
    },
  },
  plugins: [],
}

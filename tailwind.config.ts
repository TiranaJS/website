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
          50: '#F8EBFF',   // Logo light color - main accent
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
          lavender: '#F8EBFF', // Main accent lavender
          light: '#D6BCE5',   // Lighter lavender
        },
        dark: {
          primary: '#2d1b69',  // Dark indigo for text/backgrounds
          secondary: '#3d2875', // Slightly lighter dark
        },
        logo: {
          primary: '#2F2853',  // Logo's main color
        }
      },
      backgroundImage: {
        'gradient-cloud': 'linear-gradient(135deg, #a18cd1 0%, #ff9a9e 100%)',
        'gradient-primary': 'linear-gradient(135deg, #9c85ff 0%, #7c5aff 100%)',
        'gradient-lavender': 'linear-gradient(135deg, #F8EBFF 0%, #ffffff 100%)',
        'gradient-lavender-soft': 'linear-gradient(135deg, #F8EBFF 0%, #f0edff 50%, #ffffff 100%)',
        'gradient-hero': 'linear-gradient(135deg, #F8EBFF 0%, #e6e0ff 25%, #ffffff 50%, #f8f7ff 75%, #F8EBFF 100%)',
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
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite 1s',
        'float-1': 'float1 12s ease-in-out infinite',
        'float-2': 'float2 15s ease-in-out infinite',
        'float-3': 'float3 18s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-10px) translateX(5px)' },
          '66%': { transform: 'translateY(5px) translateX(-5px)' },
        },
        float1: {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) rotate(0deg) scale(1)',
            opacity: '0.4',
          },
          '25%': { 
            transform: 'translateY(-20px) translateX(10px) rotate(5deg) scale(1.05)',
            opacity: '0.6',
          },
          '50%': { 
            transform: 'translateY(-10px) translateX(-15px) rotate(-3deg) scale(0.95)',
            opacity: '0.3',
          },
          '75%': { 
            transform: 'translateY(15px) translateX(5px) rotate(2deg) scale(1.02)',
            opacity: '0.5',
          },
        },
        float2: {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) rotate(0deg) scale(1)',
            opacity: '0.5',
          },
          '20%': { 
            transform: 'translateY(10px) translateX(-8px) rotate(-2deg) scale(1.03)',
            opacity: '0.7',
          },
          '40%': { 
            transform: 'translateY(-25px) translateX(12px) rotate(4deg) scale(0.98)',
            opacity: '0.4',
          },
          '60%': { 
            transform: 'translateY(-5px) translateX(-10px) rotate(-1deg) scale(1.01)',
            opacity: '0.6',
          },
          '80%': { 
            transform: 'translateY(20px) translateX(8px) rotate(3deg) scale(0.97)',
            opacity: '0.3',
          },
        },
        float3: {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) rotate(0deg) scale(1)',
            opacity: '0.3',
          },
          '33%': { 
            transform: 'translateY(-15px) translateX(-12px) rotate(-4deg) scale(1.08)',
            opacity: '0.6',
          },
          '66%': { 
            transform: 'translateY(12px) translateX(18px) rotate(6deg) scale(0.92)',
            opacity: '0.4',
          },
        },
      }
    },
  },
  plugins: [],
}

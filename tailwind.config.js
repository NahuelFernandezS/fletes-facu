/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkest: '#070D1B',
          dark: '#0E172A',
          surface: '#17233D',
          border: '#243656',
          navy: '#1E293B',
          blue: '#3B82F6',
          sky: '#38BDF8',
          teal: '#0D9488',
          emerald: '#10B981',
          mint: '#34D399',
          glow: '#00E599',
          accentGreen: '#10B981',
          accentBlue: '#0284C7'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}

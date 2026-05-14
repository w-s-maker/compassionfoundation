
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cosmic: {
          900: '#1a0525',
          800: '#2a0a3d',
          700: '#4B0082',
          600: '#6B2D8C',
          500: '#8A2BE2',
        },
        gold: {
          400: '#FFD700',
          500: '#FFC107',
          600: '#D4AF37',
        },
        magenta: {
          500: '#D946EF',
        },
        cyan: {
          300: '#E0F7FF',
          400: '#00FFFF',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, filter: 'drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))' },
          '50%': { opacity: .7, filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))' },
        },
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        }
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'glass-gradient-dark': 'linear-gradient(135deg, rgba(75, 0, 130, 0.2), rgba(26, 5, 37, 0.4))',
      }
    },
  },
  plugins: [],
}

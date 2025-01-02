/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1A0B2E',
        secondary: '#7B2CFF',
        accent: '#BE2CFF',
        purple: {
          dark: '#1A0B2E',
          main: '#7B2CFF',
          light: '#BE2CFF',
        }
      },
      boxShadow: {
        glow: '0 0 20px rgba(190, 44, 255, 0.3)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(123, 44, 255, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(190, 44, 255, 0.4)' },
        },
      }
    },
  },
  plugins: []
}
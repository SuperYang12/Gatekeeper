/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        backgroundDark: '#2e2a4f',
        accentPrimary: '#6e00ff',
        accentGlow: '#8ce9ff',
        currencyGold: '#ffd700',
        warningRed: '#ff4d4d',
        backgroundShadow: '#1b132b',
        currencyCrystal: '#9b5de5',
        textMuted: '#bfbcd3',
      },
      fontFamily: {
        heading: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        gateGlow: '0 0 20px #6e00ffaa',
        dangerGlow: '0 0 10px #ff4d4daa',
        softGlow: '0 0 15px #8ce9ff',
      },
      animation: {
        flicker: 'flicker 3s infinite',
        fadeInUp: 'fadeInUp 0.8s ease-out',
      },
      keyframes: {
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.4' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        gateScene: "url('/assets/bg-gate.jpg')",
        shadowRealm: "url('/assets/bg-shadow.jpg')",
      },
      blur: {
        shadow: '3px',
      },
      borderRadius: {
        xl2: '1.5rem',
      },
    },
  },
  plugins: [],
}

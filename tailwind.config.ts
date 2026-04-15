import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {

    // Consistent rhythm
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '64px',
      '2xl': '96px',
      '3xl': '128px',
    },

    maxWidth: {
      content: '1200px',
      prose: '720px',
    },

    boxShadow: {
      soft: '0 10px 30px rgba(0, 0, 0, 0.35)',
      glow: '0 0 25px rgba(255, 154, 60, 0.25)',
    },

    borderRadius: {
      soft: '12px',
      card: '16px',
      full: '999px',
    },

    transitionDuration: {
      fast: '150ms',
      base: '300ms',
      slow: '600ms',
    },
    },
  },
  plugins: [],
}

export default config
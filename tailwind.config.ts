import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#10B981',
        'background-light': '#FFFFFF',
        'background-dark': '#0F172A',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
        arabic: ['var(--font-arabic)', 'serif'],
      },
      borderRadius: {
        DEFAULT: '12px',
        '2xl': '24px',
        '3xl': '32px',
      },
    },
  },
  plugins: [],
}

export default config

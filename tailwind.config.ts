import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        slide_up: {
          '0%': {
            transform: 'translateY(600px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
      },

      animation: {
        'pulse-slow': 'pulse 12s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
        'slide-up': 'slide_up 5s ease 1',
      }
    },
  },
  plugins: [],
}
export default config

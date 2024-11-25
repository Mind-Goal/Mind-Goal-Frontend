import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      colors: {
        primary: {
          opct1: '#F4C1421A',
          opct3: '#F4C1424D',
          opct5: '#F4C14280',
          opct8: '#F4C142CC',
          default: '#F4C142',
          dark1: '#EEB118',
          dark2: '#D39908',
          dark3: '#B5850D',
          dark4: '#976D0C',
        },
        secondary: {
          opct1: '#5F9F0D1A',
          opct3: '#5F9F0D4D',
          opct5: '#5F9F0D80',
          opct8: '#5F9F0DCC',
          default: '#5F9F0D',
        },
        black: {
          opct1: '#1C1C1C1A',
          opct3: '#1C1C1C4D',
          opct5: '#1C1C1C80',
          opct8: '#1C1C1CCC',
          default: '#1C1C1C',
        },
        gray: {
          light: '#F9F9F9',
          default: '#CFCFCF',
          dark: '#8B8B8B',
        },
        white: {
          opct1: '#FFFFFF1A',
          opct3: '#FFFFFF4D',
          opct5: '#FFFFFF80',
          opct8: '#FFFFFFCC',
          default: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
}
export default config

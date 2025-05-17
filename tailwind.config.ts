import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: "#B3953C",
          200: "#D1B85E",
        },
        accent: {
          DEFAULT: "#F3353C",
          200: "#F8767A",
        },
        gray: {
          DEFAULT: "#B3B3B3",
          200: "#E6E6E6",
          300: "#F4F4F4",
        },
        secondary: {
          DEFAULT: "#001A2D",
          200: "#00365E",
          300: "#005DA2",
        },
        overlay: {
          DEFAULT: "#001A2D99",
        }
      },
      screens: {
        xxl: '1440px',
        xl: '1200px',
        lg: '1024px',
        md: '768px',
        sm: '425px',
        xs: '390px'
      },
      maxWidth: {
        '8xl': '1440px',
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Extracted from DH Financial logo
        primary: {
          50:  '#EEEDF8',
          100: '#D5D4EE',
          200: '#A9A6DC',
          300: '#7E79CB',
          400: '#524DB9',
          500: '#2D2A7B',  // Logo exact background
          600: '#252268',
          700: '#1D1A55',
          800: '#151242',
          900: '#0D0B2F',
          950: '#080722',
        },
        accent: {
          50:  '#FFF9EB',
          100: '#FFF0CC',
          200: '#FFE199',
          300: '#FFD266',
          400: '#F7C948',  // Logo swoosh top yellow
          500: '#F5A623',  // Logo swoosh mid gold
          600: '#E8891D',  // Logo swoosh bottom orange
          700: '#C97216',
          800: '#A85C10',
          900: '#87470B',
          950: '#5C3007',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'brand': '12px',
        'brand-lg': '16px',
        'brand-xl': '20px',
      },
      boxShadow: {
        'brand': '0 4px 14px 0 rgba(45, 42, 123, 0.12)',
        'brand-lg': '0 8px 28px 0 rgba(45, 42, 123, 0.16)',
        'brand-accent': '0 4px 14px 0 rgba(245, 166, 35, 0.25)',
        'card': '0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(45,42,123,0.06)',
        'card-hover': '0 4px 8px rgba(0,0,0,0.08), 0 8px 24px rgba(45,42,123,0.12)',
      },
    },
  },
  plugins: [],
};

export default config;

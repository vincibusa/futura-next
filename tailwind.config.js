/** @type {import('tailwindcss').Config} */
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
    animation: {
      'fade-in': 'fadeIn 0.7s ease-in-out forwards',
      'fade-in-up': 'fadeInUp 0.7s ease-in-out forwards',
      'fade-in-down': 'fadeInDown 0.7s ease-in-out forwards',
      'fade-in-left': 'fadeInLeft 0.7s ease-in-out forwards',
      'fade-in-right': 'fadeInRight 0.7s ease-in-out forwards',
      'float': 'float 3s ease-in-out infinite',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      fadeInUp: {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
      fadeInDown: {
        '0%': { opacity: 0, transform: 'translateY(-20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
      fadeInLeft: {
        '0%': { opacity: 0, transform: 'translateX(-20px)' },
        '100%': { opacity: 1, transform: 'translateX(0)' },
      },
      fadeInRight: {
        '0%': { opacity: 0, transform: 'translateX(20px)' },
        '100%': { opacity: 1, transform: 'translateX(0)' },
      },
      float: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
      }
    },
  },
};
export const plugins = [];

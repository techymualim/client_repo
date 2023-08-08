/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      transitionDuration: {
        long: '2s',
      },
      animation: {
        rocket: 'rocket 45s ease 9999',
      },
      fontFamily: {
        'poppins-black': ['Poppins Black', 'sans-serif'],
        'poppins-bold': ['Poppins Bold', 'sans-serif'],
        'poppins-extrabold': ['Poppins ExtraBold', 'sans-serif'],
        'poppins-extralight': ['Poppins ExtraLight', 'sans-serif'],
        'poppins-light': ['Poppins Light', 'sans-serif'],
        'poppins-medium': ['Poppins Medium', 'sans-serif'],
        'poppins-regular': ['Poppins Regular', 'sans-serif'],
        'poppins-semibold': ['Poppins Semibold', 'sans-serif'],
        'poppins-thin': ['Poppins Thin', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

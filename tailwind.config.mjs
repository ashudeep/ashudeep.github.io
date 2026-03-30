/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: {
          light: '#B71C1C',
          dark: '#2698BA',
        },
        hover: {
          light: '#FF3636',
          dark: '#59d0ed',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      maxWidth: {
        content: '860px',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
          },
        },
        dark: {
          css: {
            color: '#fff',
            'h1, h2, h3, h4, h5, h6': {
              color: '#fff',
            },
            strong: {
              color: '#fff',
            },
            a: {
              color: '#3b82f6',
            },
            code: {
              color: '#fff',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

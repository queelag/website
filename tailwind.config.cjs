/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      maxHeight: {
        'screen-minus-header': 'calc(100vh - 96px)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}

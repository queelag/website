/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#ffffea',
          100: '#fffbc5',
          200: '#fff885',
          300: '#ffee46',
          400: '#ffdf1b',
          500: '#ffc001',
          600: '#e29400',
          700: '#bb6902',
          800: '#985108',
          900: '#7c420b',
          950: '#482200'
        },
        blue: {
          50: '#eff4ff',
          100: '#dce7fd',
          200: '#c0d5fd',
          300: '#95bbfb',
          400: '#6296f8',
          500: '#4c7bf4',
          600: '#2851e8',
          700: '#203dd5',
          800: '#2033ad',
          900: '#203188',
          950: '#182053'
        },
        mint: {
          50: '#effef4',
          100: '#dbfde6',
          200: '#b8facd',
          300: '#90f5b2',
          400: '#43e57a',
          500: '#1bcc58',
          600: '#10a944',
          700: '#108539',
          800: '#126931',
          900: '#11562a',
          950: '#033015'
        },
        rose: {
          50: '#fff0f8',
          100: '#ffe3f4',
          200: '#ffc6e8',
          300: '#ff98d3',
          400: '#ff58b5',
          500: '#ff2796',
          600: '#ff1479',
          700: '#df0054',
          800: '#b80045',
          900: '#98033d',
          950: '#5f0020'
        },
        seance: {
          50: '#f6f3ff',
          100: '#efe8ff',
          200: '#e1d4ff',
          300: '#cbb2ff',
          400: '#b386ff',
          500: '#9c56fc',
          600: '#9133f4',
          700: '#8121e0',
          800: '#6519af',
          900: '#5a189a',
          950: '#380d68'
        }
      },
      maxHeight: {
        'screen-minus-header': 'calc(100vh - 96px)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}

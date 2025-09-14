const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['*.html', '_site/*.html','_site/**/*.html', '_pages/**/*.md', '_posts/**/*.md', '_layouts/**/*.html', '_includes/**/*.html'],
  theme: {
    extend: {
      colors: {
        gray: colors.slate,
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#bae0ff',
          300: '#7cc8ff',
          400: '#36adff',
          500: '#0b94ff',
          600: '#1C459D',
          700: '#1a3d8a',
          800: '#1c3570',
          900: '#1d2f5d',
          950: '#161e3e',
        },
        secondary: colors.cyan,
        tertiary: colors.slate,
        danger: colors.red,
        success: colors.emerald,
      },
      fontFamily: {
        sans: ['Work Sans','Inter var', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ]
}

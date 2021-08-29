module.exports = {
  plugins: [
    require('@tailwindcss/typography')
  ],
  darkMode: 'media',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      }
    },
  }
}
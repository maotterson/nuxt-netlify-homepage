module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: 'black',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      }
    },
  },
}
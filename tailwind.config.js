module.exports = {
  variants: {
    extend: {
      typography: ['dark']
    }
  },

  plugins: [
    require('@tailwindcss/typography')
  ],
  darkMode: 'media',
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
        buttons: {
          css: {
            a: {
              color: theme('colors.white'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.white'),
              },
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.blue.100'),
              '&:hover': {
                color: theme('colors.blue.100'),
              },
            },
            h1: {
              color: 'white'
            },
            h2: {
              color: '#cccccc'
            },
            h3: {
              color: '#cccccc'
            },
            h4: {
              color: '#cccccc'
            },
            h5: {
              color: '#cccccc'
            },
            h6: {
              color: '#cccccc'
            },
            strong: {
              color: "white"
            }
          },
        },
      })
    },
  }
}
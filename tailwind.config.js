module.exports = {
  purge: {
    enabled: true,
    content: [
      './pages/*.js',
      './components/*.js',
      './sections/*.js',
    ],
  },
  theme: {
    container: {
      center: true,
      padding: {
        default: '0.5rem',
        md: '1.25rem',
        xl: '1rem',
      }
    },
    extend: {
      screens: {
        xxl: '1450px',
      },
      fontSize: {
        '4.5xl': '2.6rem',
        '7.5xl': '5.5rem'
      },
      fontFamily: {
        titleFont: ['Gilroy'],
        bodyFont: ['Heebo'],
      },
      colors: {
        titleFontColor: '#333333',
        bodyFontColor: '#53627C',
        primaryColor: '#DE3AFC',
        primaryHovered: '#D800FF',
        secondaryColor: '#207FFC',
        lightColor: '#7A889F',
        bgColor: '#F9F9F9'
      },
      spacing: {
        '14': '3.5rem',
        '23': '5.6rem',
        'screen-25': '25vh',
        'screen-50': '50vh',
        'screen-60': '60vh',
        'screen-65': '65vh',
        'screen-70': '70vh',
        'screen-75': '75vh',
        'full-25': '25%',
        'full-50': '50%',
        'full-75': '75%'
      },
      padding: {
        '68': '18rem',
        '70': '20rem',
        '72': '22rem',
        '74': '24rem' 
      }
    },
  },
  variants: [
    'responsive',
    'group-hover',
    'group-focus',
    'focus-within',
    'first',
    'last',
    'odd',
    'even',
    'hover',
    'focus',
    'active',
    'visited',
    'disabled',
  ],
  plugins: [],
}

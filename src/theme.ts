export const palette = {
  purple: {
    A100: '#E6E0EB',
    A200: '#CDBBDB',
    A300: '#B496CA',
    A400: '#9970B7',
    A500: '#8556A9',
    A600: '#713B9D',
    A700: '#6A3790',
    A800: '#613282',
    A900: '#582C74',
    A1000: '#4A235B',
  },
  green: {
    A100: '#DDF3F3',
    A200: '#ADE2E2',
    A300: '#7ED5D2',
    A400: '#53C3BE',
    A500: '#37B7B2',
    A600: '#1CABA4',
    A700: '#1A9B98',
    A800: '#178A8B',
    A900: '#127477',
    A1000: '#0D4F59',
  },
  grayLight: {
    A100: '#FAFAFA',
    A200: '#F6F5F5',
    A300: '#EFEEED',
    A400: '#E2E0DE',
    A500: '#C1BDB9',
  },
  grayDark: {
    A600: '#414161',
    A700: '#36354F',
    A800: '#29293B',
    A900: '#1D1C29',
    A1000: '#111119',
  },
  white: {
    A100: '#ffffff'
  }
}

export default {
  palette: {
    primary: {
      light: palette.purple.A300,
      main: palette.purple.A600,
      dark: palette.purple.A1000,
      contrastText: palette.white.A100,
    },
  },
}
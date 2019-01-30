export const palette = {
  primary: {
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
    }
  },
  secondary: {
    grayLight: {
      A600: '#A49E98',
      A700: '#7D756E',
      A800: '#67615B',
      A900: '#46423E',
      A1000: '#23211F',
    },
    grayDark: {
      A100: '#E2E2E8',
      A200: '#BBBBC9',
      A300: '#9595A9',
      A400: '#727189',
      A500: '#595873',
    },
    
  }
}

export default {
  palette: {
    primary: {
      light: palette.primary.purple.A300,
      main: palette.primary.purple.A600,
      dark: palette.primary.purple.A1000,
      contrastText: palette.primary.grayLight.A100,
    },
  },
}
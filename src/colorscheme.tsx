
import { DefaultTheme } from 'styled-components'



declare module 'styled-components' {
  export interface DefaultTheme {
      isDark: boolean
      main: string
      primaryColor: string
      secondaryColor: string
      text: string
      opacityText: string
  }
}

export const lightTheme: DefaultTheme = {
  isDark: false,
  main: '#FFF',
  primaryColor: '#DA22F2',
  secondaryColor: '#8af321',
  text: '#6241AF',
  opacityText: 'rgba(0, 0, 0, .75)',
}

export const darkTheme: DefaultTheme = {
  isDark: true,
  main: '#353535',
  primaryColor: '#ffdb9c',
  secondaryColor: '#fca075',
  text: '#fff',
  opacityText: 'rgba(255, 255, 255, .75)',
}

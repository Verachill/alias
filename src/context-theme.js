import React, { createContext, useReducer } from 'react'

export const ThemeContext = createContext()

const lightTheme = {
  isDark: false,
  main: '#FFF',
  primaryColor: '#DA22F2',
  secondaryColor: '#8af321',
  text: '#6241AF',
  opacityText: 'rgba(0, 0, 0, .75)',
}
const darkTheme = {
  isDark: true,
  main: '#353535',
  primaryColor: '#ffdb9c',
  secondaryColor: '#fca075',
  text: '#fff',
  opacityText: 'rgba(255, 255, 255, .75)',
}

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'light':
      return lightTheme
    case 'dark':
      return darkTheme
    default:
      return state
  }
}

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, lightTheme)

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

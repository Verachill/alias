import React, { useContext } from 'react'
import StartPage from './pages/StartPage'
// ------------------------
import { ThemeProvider } from 'styled-components'
import { GameProvider } from './contexts/GameContext'
import { Context as ConfigContext } from './contexts/ConfigContext'
// ------------------------

import { darkTheme, lightTheme } from './colorscheme'

export default function App() {
  const config = useContext(ConfigContext)

  return (
    <ThemeProvider theme={config?.state.isDark ? darkTheme : lightTheme}>
      <GameProvider>
        <StartPage
          toggleTheme={() => config?.dispatch({ type: 'toggle_isDark' })}
        />
      </GameProvider>
    </ThemeProvider>
  )
}

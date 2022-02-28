import React from 'react'
import { ThemeContext } from './context-theme'
import themeObject from './interfaces'
import StartPage from './pages/StartPage'

export default function App(): JSX.Element {
  const theme: themeObject = React.useContext(ThemeContext).state
  return (
    <div
      className="main"
      style={{
        color: theme.text,
        fontSize: 16,
      }}
    >
      <StartPage />
    </div>
  )
}

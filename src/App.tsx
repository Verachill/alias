import React, { useState, useEffect } from 'react'
import { wordType } from './types'
import { fetchWordsThemesAll, fetchRandomWords } from './api/api'
import StartPage from './pages/StartPage'
// ------------------------
import { ThemeProvider } from 'styled-components'
import { GameProvider } from './contexts/GameContext'
import { ConfigProvider } from './contexts/ConfigContext'
// ------------------------

import { darkTheme, lightTheme } from './colorscheme'

export default function App() {
  const [, setData] = useState<wordType[]>([])
  const [, setData1] = useState<wordType[]>([])

  useEffect(() => {
    const getData = async () => {
      const dataFetched = await fetchRandomWords({ limit: 10 })
      setData(dataFetched)
    }
    getData()
  }, [setData])

  useEffect(() => {
    const getData = async () => {
      const dataFetched = await fetchWordsThemesAll({
        themes: 'test',
        limit: 10,
      })
      setData1(dataFetched)
    }
    getData()
  }, [setData1])

  const [isDark, setIsDark] = React.useState(false)

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <ConfigProvider>
        <GameProvider>
          <StartPage toggleTheme={() => setIsDark(!isDark)} />
        </GameProvider>
      </ConfigProvider>
    </ThemeProvider>
  )
}

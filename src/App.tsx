import React, { useState, useEffect } from 'react'
import { wordType } from './types'
import { fetch_words_themes_all, fetch_random_words } from './api/api'
import StartPage from './pages/StartPage'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './colorscheme'

export default function App() {
  const [, setData] = useState<wordType[]>([])
  const [, setData1] = useState<wordType[]>([])

  useEffect(() => {
    const getData = async () => {
      const dataFetched = await fetch_random_words({ limit: 10 })
      setData(dataFetched)
    }
    getData()
  }, [setData])

  useEffect(() => {
    const getData = async () => {
      const dataFetched = await fetch_words_themes_all({
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
      <StartPage toggleTheme={() => setIsDark(!isDark)} />
    </ThemeProvider>
  )
}

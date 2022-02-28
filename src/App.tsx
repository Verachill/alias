import React, { useState, useEffect } from 'react'
import { wordType } from './types'
import { fetch_words_themes_all, fetch_random_words } from './api/api'
import StartPage from './pages/StartPage'
import themeObject from './interfaces'
import { ThemeContext } from './context-theme'

export default function App() {
  const theme: themeObject = React.useContext(ThemeContext).state
  const [data, setData] = useState<wordType[]>([])
  const [data1, setData1] = useState<wordType[]>([])

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

  return (
    <div className="main" style={{ color: theme.text, fontSize: 16 }}>
      <StartPage />
    </div>
  )
}

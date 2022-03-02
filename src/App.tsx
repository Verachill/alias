import React, { useState, useEffect } from 'react'

import { wordType } from './types'
import { fetchWordsThemesAll, fetchRandomWords } from './api/api'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './colorscheme'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import StartPage from './pages/StartPage'
import Rules from './pages/Rules'
import Background from './components/Background'

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

  const defaultTheme: boolean = window.localStorage.getItem('theme') === 'dark'
  const [isDark, setIsDark] = React.useState(defaultTheme)

  const toggleTheme = (): void => {
    window.localStorage.setItem('theme', !isDark ? 'dark' : 'light')
    setIsDark(!isDark)
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage toggleTheme={toggleTheme} />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </BrowserRouter>

      <TransitionGroup>
        <CSSTransition
          key={isDark ? 'darkBackground' : 'lightBackground'}
          timeout={200}
          classNames="backgroundImage"
        >
          <Background isDark={isDark} />
        </CSSTransition>
      </TransitionGroup>
    </ThemeProvider>
  )
}

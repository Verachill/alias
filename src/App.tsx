import React, { useState, useEffect, useContext } from 'react'

import { wordType } from './types'
import { fetchWordsThemesAll, fetchRandomWords } from './api/api'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GameProvider } from './contexts/GameContext'
import { Context as ConfigContext } from './contexts/ConfigContext'

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

  const config = useContext(ConfigContext)

  return (
    <ThemeProvider theme={config?.state.isDark ? darkTheme : lightTheme}>
      <GameProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <StartPage
                  toggleTheme={() => config?.dispatch({ type: 'toggleIsDark' })}
                  toggleSound={() => config?.dispatch({ type: 'toggleSound' })}
                />
              }
            />
            <Route path="/rules" element={<Rules />} />
          </Routes>
        </BrowserRouter>

        <TransitionGroup>
          <CSSTransition
            key={config?.state.isDark ? 'darkBackground' : 'lightBackground'}
            timeout={200}
            classNames="backgroundImage"
          >
            <Background isDark={config?.state.isDark} />
          </CSSTransition>
        </TransitionGroup>
      </GameProvider>
    </ThemeProvider>
  )
}

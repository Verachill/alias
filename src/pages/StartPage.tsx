import React from 'react'
import {
  BrightnessHighFill,
  MoonFill,
  VolumeUpFill,
} from 'react-bootstrap-icons'
import Button from '../components/Button'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { ThemeContext } from '../context-theme'
import themeObject from '../interfaces'
import Background from '../components/Background'

export default function StartPage(): JSX.Element {
  const theme: themeObject = React.useContext(ThemeContext).state
  const changeTheme: ({}: { type: string }) => {} =
    React.useContext(ThemeContext).dispatch

  return (
    <>
      <div
        style={{
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: window.innerWidth,
          height: window.innerHeight,
        }}
      >
        <h1
          style={{
            fontFamily: 'Roboto',
            fontSize: '72px',
            transition: '.2s ease-in',
          }}
        >
          Alias
        </h1>
        <div
          className="buttons"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Button style={{ width: 200 }}>Новая игра</Button>
          <Button style={{ width: 200 }}>Правила</Button>

          <div
            className="smallButtons"
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <Button
              onclick={() => {
                changeTheme(theme.isDark ? { type: 'light' } : { type: 'dark' })
              }}
            >
              <TransitionGroup>
                <CSSTransition
                  key={theme.isDark ? 'dark' : 'light'}
                  timeout={200}
                  classNames="themeIcon"
                >
                  {theme.isDark ? (
                    <BrightnessHighFill
                      size={32}
                      style={{
                        position: 'absolute',
                        top: 60 / 2 - 32 / 2,
                        left: 100 / 2 - 32 / 2,
                      }}
                    />
                  ) : (
                    <MoonFill
                      size={24}
                      style={{
                        position: 'absolute',
                        top: 60 / 2 - 24 / 2,
                        left: 100 / 2 - 24 / 2,
                      }}
                    />
                  )}
                </CSSTransition>
              </TransitionGroup>
            </Button>
            <Button>
              <VolumeUpFill size={32} />
            </Button>
          </div>
        </div>
      </div>
      <TransitionGroup>
        <CSSTransition
          key={theme.isDark ? 'dark' : 'light'}
          timeout={200}
          classNames="backgroundImage"
        >
          <Background isDark={theme.isDark} />
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}

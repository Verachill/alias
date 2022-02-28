import React from 'react'
import {
  BrightnessHighFill,
  MoonFill,
  VolumeUpFill,
} from 'react-bootstrap-icons'

import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { AnimatePresence, motion } from "framer-motion";

import { ThemeContext } from '../context-theme'
import themeObject from '../interfaces'
import Background from '../components/Background'

// Components
import Button from '../components/Button'
import ButtonAnimation from '../components/ButtonAnimation';


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
          width: '100vw',
          height: '100vh',
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
          <ButtonAnimation>
            <Button style={{ width: '100%' }}>Новая игра</Button>
          </ButtonAnimation>
          <ButtonAnimation>
            <Button style={{ width: '100%' }}>Правила</Button>
          </ButtonAnimation>

          <div
            className="smallButtons"
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <Button
              style={{ width: '100%' }}
              onclick={() => {
                changeTheme(theme.isDark ? { type: 'light' } : { type: 'dark' })
              }}
            >

              <AnimatePresence exitBeforeEnter initial={false}>
                <motion.div
                  className="themeIcon"
                  style={{ display: "inline-block" }}
                  key={theme.isDark ? 'dark' : 'light'}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                 
                    <BrightnessHighFill
                      size={32}
                      style={{display: !theme.isDark ? 'block' : 'none'}}
                    />
                 
                    <MoonFill
                      size={24}
                      style={{display: theme.isDark ? 'block' : 'none'}}
                    />
               
                </motion.div>
              </AnimatePresence>
              {/* <TransitionGroup>
                <CSSTransition
                  key={theme.isDark ? 'dark' : 'light'}
                  timeout={200}
                  classNames="themeIcon"
                >
                  {theme.isDark ? (
                    <BrightnessHighFill
                      size={32}
                      
                    />
                  ) : (
                    <MoonFill
                      size={24}
                     
                    />
                  )}
                </CSSTransition>
              </TransitionGroup> */}
            </Button>
            <Button style={{ width: '100%' }}>
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

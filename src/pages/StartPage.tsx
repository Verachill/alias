import React from 'react'
import {
  BrightnessHighFill,
  MoonFill,
  VolumeUpFill,
} from 'react-bootstrap-icons'

import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Background from '../components/Background'
import styled, { useTheme } from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'

import ButtonAnimation from '../components/ButtonAnimation'
import Button from '../components/Button'
import Logo from '../images/Logo'

export default function StartPage({
  toggleTheme,
}: {
  toggleTheme: () => void
}): JSX.Element {
  const theme = useTheme()

  return (
    <>
      <Container>
        <Logo />
        {
          // Logo may change
        }
        <ButtonsContainer className="buttons">
          <ButtonAnimation>
            <Button>Новая игра</Button>
          </ButtonAnimation>
          <ButtonAnimation>
            <Button>Правила</Button>
          </ButtonAnimation>

          <ButtonsSubContainer className="subButtons">
            <Button onclick={toggleTheme}>
              <AnimatePresence exitBeforeEnter initial={false}>
                <motion.div
                  className="themeIcon"
                  style={{ display: 'inline-block' }}
                  key={theme.isDark ? 'dark' : 'light'}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <BrightnessHighFill
                    size={32}
                    style={{ display: !theme.isDark ? 'block' : 'none' }}
                  />

                  <MoonFill
                    size={24}
                    style={{ display: theme.isDark ? 'block' : 'none' }}
                  />
                </motion.div>
              </AnimatePresence>
            </Button>

            <Button>
              <VolumeUpFill size={32} />
            </Button>
          </ButtonsSubContainer>
        </ButtonsContainer>
      </Container>

      <TransitionGroup>
        <CSSTransition
          key={theme.isDark ? 'darkBackground' : 'lightBackground'}
          timeout={200}
          classNames="backgroundImage"
        >
          <Background isDark={theme.isDark} />
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: ${window.innerWidth}px;
  height: ${window.innerHeight}px;
`
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`
const ButtonsSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Title = styled.h1`
  font-family: Roboto;
  font-size: 72px;
  transition: 0.2s ease-in;
  color: ${(props) => props.theme.text};
`

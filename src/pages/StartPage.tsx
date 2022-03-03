import React, { useContext } from 'react'
import {
  BrightnessHighFill,
  MoonFill,
  VolumeUpFill,
  VolumeMuteFill,
} from 'react-bootstrap-icons'

import styled, { useTheme } from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'

import Button from '../components/Button'
import Logo from '../images/Logo'
import PageTransition from '../components/PageTransition'
import { Context as ConfigContext } from '../contexts/ConfigContext'

export default function StartPage({
  toggleTheme,
  toggleSound,
}: {
  toggleTheme: () => void
  toggleSound: () => void
}): JSX.Element {
  const [isExit, setIsExit] = React.useState(false)
  const config = useContext(ConfigContext)

  return (
    <PageTransition rightToLeft pageIsExit={isExit}>
      <Container>
        <Logo />
        {
          // Logo may change
        }
        <ButtonsContainer className="buttons">
          <Button>Новая игра</Button>

          <Button
            to="/rules"
            togglePageState={() => {
              setIsExit(!isExit)
            }}
          >
            Правила
          </Button>

          <ButtonsSubContainer className="subButtons">
            <Button onclick={toggleTheme}>
              <AnimatePresence exitBeforeEnter initial={false}>
                <IconContainer
                  trigger={config?.state.isDark ? 'dark' : 'light'}
                  type="theme"
                >
                  {config?.state.isDark ? (
                    <BrightnessHighFill size={32} />
                  ) : (
                    <MoonFill size={24} />
                  )}
                </IconContainer>
              </AnimatePresence>
            </Button>

            <Button onclick={toggleSound}>
              <AnimatePresence exitBeforeEnter initial={false}>
                <IconContainer
                  trigger={config?.state.sound ? 'unmuted' : 'muted'}
                  type="sound"
                >
                  {config?.state.sound ? (
                    <VolumeUpFill size={32} />
                  ) : (
                    <VolumeMuteFill size={32} />
                  )}
                </IconContainer>
              </AnimatePresence>
            </Button>
          </ButtonsSubContainer>
        </ButtonsContainer>
      </Container>
    </PageTransition>
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

function IconContainer({
  children,
  trigger,
  type,
}: {
  children: JSX.Element
  trigger: string
  type: 'sound' | 'theme'
}): JSX.Element {
  return (
    <motion.div
      className="soundIcon"
      style={{ display: 'inline-block' }}
      key={trigger}
      initial={type === 'sound' ? { opacity: 0 } : { opacity: 0, y: -20 }}
      animate={type === 'sound' ? { opacity: 1 } : { opacity: 1, y: 0 }}
      exit={type === 'sound' ? { opacity: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

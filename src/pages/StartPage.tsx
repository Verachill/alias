import React from 'react'
import {
  BrightnessHighFill,
  MoonFill,
  VolumeUpFill,
} from 'react-bootstrap-icons'
import Button from '../components/Button'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Background from '../components/Background'
import styled, { useTheme } from 'styled-components'

export default function StartPage({
  toggleTheme,
}: {
  toggleTheme: () => void
}): JSX.Element {
  const theme = useTheme()

  return (
    <>
      <Container>
        <Title>Alias</Title>

        <ButtonsContainer className="buttons">
          <Button style={{ width: 200 }}>Новая игра</Button>
          <Button style={{ width: 200 }}>Правила</Button>

          <ButtonsSubContainer className="subButtons">
            <Button onclick={toggleTheme}>
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
          </ButtonsSubContainer>
        </ButtonsContainer>
      </Container>

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
`
const ButtonsSubContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const Title = styled.h1`
  font-family: Roboto;
  font-size: 72px;
  transition: 0.2s ease-in;
  color: ${(props) => props.theme.text};
`

import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

type ButtonProps = {
  children: any
  onclick?: () => void
  style?: React.CSSProperties
  to?: string
  navigationTimeout?: number
  togglePageState?: () => void
  animationComplete?: boolean
}

export default function Button({
  children = 'default button',
  onclick = () => {},
  style = {},
  to = '',
  navigationTimeout = 200,
  togglePageState = () => {},
}: ButtonProps): JSX.Element {
  const navigate = useNavigate()
  const go = (): void => {
    togglePageState()
    setTimeout(() => {
      if (to !== '') {
        navigate(to)
      }
    }, navigationTimeout)
  }

  return (
    <StyledButton
      onClick={() => {
        onclick()
        go()
      }}
      style={style}
    >
      {children}
    </StyledButton>
  )
}

interface Props {
  navigation?: boolean
}
const StyledButton = styled.button<Props>`
   {
    border: 0 none;
    border-radius: 50px;
    min-width: 100px;
    min-height: 60px;
    backdrop-filter: blur(6px);
    font-size: 20px;
    font-weight: 400;
    margin: 5px;
    padding: 0px;
    transition: all 0.2s ease-in;
    position: relative;
    color: ${(props) => props.theme.text};
    width: 100%;
    background: ${(props) =>
      props.theme.isDark
        ? `radial-gradient(100% 2388.37% at 0% 0%, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.06) 100%);`
        : `radial-gradient(100% 2388.37% at 0% 50%, rgba(105, 113, 151, 0.48) 0%, rgba(105, 113, 151, 0.06) 100%);`};
    &:active {
      transform: scale(0.92);
      opacity: 0.6;
    }
  }
`

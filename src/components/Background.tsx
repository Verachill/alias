import React from 'react'
import styled from 'styled-components'

export default function Background({
  isDark,
}: {
  isDark?: boolean
}): JSX.Element {
  return (
    <BackgroundImage
      width={window.innerWidth}
      height={window.innerHeight}
      src={require(isDark
        ? '../images/backDark.jpg'
        : '../images/backLight.jpg')}
    />
  )
}

const BackgroundImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;

  &.backgroundImage-enter {
    opacity: 0;
  }
  &.backgroundImage-enter-active {
    opacity: 1;
    transition: 0.2s ease-in;
  }
  &.backgroundImage-exit {
    opacity: 1;
  }
  &.backgroundImage-exit-active {
    opacity: 0;
    transition: 0.2s ease-in;
  }
`

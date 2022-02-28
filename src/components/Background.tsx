import React from 'react'

export default function Background({
  isDark,
}: {
  isDark: boolean
}): JSX.Element {
  return (
    <img
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        backgroundColor: 'black',
      }}
      width={window.innerWidth}
      height={window.innerHeight}
      src={require(isDark
        ? '../images/backDark.jpg'
        : '../images/backLight.jpg')}
    />
  )
}

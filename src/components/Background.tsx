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
        filter: !isDark ? 'none' : 'invert(1)',
        width: '100vw',
        height: '100vh',
        objectFit: 'cover'
      }}
      width={window.innerWidth}
      height={window.innerHeight}
      src={require('../images/backLight.jpg')}
    />
  )
}

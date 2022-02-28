import React from 'react'
import { ThemeContext } from '../context-theme'
import themeObject from '../interfaces'

export default function Button({
  children = 'default button',
  onclick = () => {
    console.error('Button click event is not declared')
  },
  style = {},
}: {
  children: any
  onclick?: () => void
  style?: React.CSSProperties
}): JSX.Element {
  const theme: themeObject = React.useContext(ThemeContext).state
  const themedStyle: React.CSSProperties = theme.isDark
    ? {
        background:
          'radial-gradient(100% 2388.37% at 0% 0%, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.06) 100%)',
      }
    : {
        background:
          'radial-gradient(100% 2388.37% at 0% 50%, rgba(105, 113, 151, 0.48) 0%, rgba(105, 113, 151, 0.06) 100%)',
      }

  return (
    <button
      onClick={onclick}
      style={Object.assign(
        {
          border: '0 none',
          borderRadius: '50px',
          minWidth: 100,
          minHeight: 60,
          backdropFilter: 'blur(6px)',
          color: theme.text,
          fontSize: 20,
          fontWeight: 400,
          margin: 5,
          padding: 0,
          transition: 'all .2s ease-in',
          position: 'relative',
        },
        style,
        themedStyle
      )}
    >
      {children}
    </button>
  )
}

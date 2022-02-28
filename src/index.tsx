import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import { ThemeProvider } from 'styled-components'
import { darkTheme } from './colorscheme'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

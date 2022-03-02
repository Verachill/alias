import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import { ThemeProvider } from 'styled-components'
import { darkTheme } from './colorscheme'
import { ConfigProvider } from './contexts/ConfigContext'

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </React.StrictMode>,

  document.getElementById('root')
)

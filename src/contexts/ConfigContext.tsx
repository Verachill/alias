import React, { createContext, useReducer } from 'react'

type Action = { type: 'toggle_sound' } | { type: 'toggle_isDark' }

type Dispatch = (action: Action) => void
type State = { sound: boolean; isDark: boolean }

type ProviderProps = { children: React.ReactNode }

const Context = createContext<{ state: State; dispatch: Dispatch } | undefined>(
  undefined
)

function configReducer(state: State, action: Action) {
  switch (action.type) {
    case 'toggle_sound': {
      window.localStorage.setItem('sound', JSON.stringify(!state.sound))
      return { ...state, sound: !state.sound }
    }
    case 'toggle_isDark': {
      window.localStorage.setItem('isDark', JSON.stringify(!state.isDark))
      return { ...state, isDark: !state.isDark }
    }
    default: {
      throw new Error(`Unhandled action type`)
    }
  }
}

const loadConfigs = {
  sound: JSON.parse(window.localStorage.getItem('sound') || 'false'),
  isDark: JSON.parse(window.localStorage.getItem('isDark') || 'false'),
}

function ConfigProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(configReducer, loadConfigs)

  const value = { state, dispatch }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export { ConfigProvider, Context }

import React, { createContext, useReducer } from 'react'

type Action = { type: 'toggle_sound' }

type Dispatch = (action: Action) => void
type State = { sound: boolean }

type ProviderProps = { children: React.ReactNode }

const Context = createContext<{ state: State; dispatch: Dispatch } | undefined>(
  undefined
)

function configReducer(state: State, action: Action) {
  switch (action.type) {
    case 'toggle_sound': {
      return { ...state, sound: !state.sound }
    }
    default: {
      throw new Error(`Unhandled action type`)
    }
  }
}

function ConfigProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(configReducer, { sound: true })

  const value = { state, dispatch }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export { ConfigProvider, Context }

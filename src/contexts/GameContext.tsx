import React, { createContext, useReducer } from 'react'
import { playerType } from '../types'

type Action =
  | { type: 'add_player'; paylaod: playerType }
  | { type: 'delete_player'; paylaod: playerType }
  | { type: 'increment_score'; paylaod: playerType }
  | { type: 'decrement_score'; paylaod: playerType }

type Dispatch = (action: Action) => void
type State = { players: playerType[] }
type ProviderProps = { children: React.ReactNode }

const Context = createContext<{ state: State; dispatch: Dispatch } | undefined>(
  undefined
)

function playerReducer(state: State, action: Action) {
  switch (action.type) {
    case 'add_player': {
      return { ...state, players: state.players.concat(action.paylaod) }
    }
    case 'delete_player': {
      return {
        ...state,
        players: state.players.filter((e) => e.id !== action.paylaod.id),
      }
    }
    //--------------- Score --------------
    case 'increment_score': {
      return {
        ...state,
        players: state.players.map((palyer) => {
          if (palyer.id === action.paylaod.id) {
            palyer.score += 1
          }
          return palyer
        }),
      }
    }
    case 'decrement_score': {
      return {
        ...state,
        players: state.players.map((palyer) => {
          if (palyer.id === action.paylaod.id) {
            palyer.score -= 1
          }
          return palyer
        }),
      }
    }
    default: {
      throw new Error(`Unhandled action type`)
    }
  }
}

function GameProvider({ children }: ProviderProps) {
  const [state, dispatch] = useReducer(playerReducer, { players: [] })

  const value = { state, dispatch }
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export { GameProvider }

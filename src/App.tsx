import React, {useState, useEffect} from "react";
import "./style.scss";
import { wordType } from "./types";
import { fetch_words_all, fetch_words_themes_all, fetch_random_words } from "./api/api";
import { GameProvider } from './GameContext'

export default function App() {
  
  return (
  <GameProvider>
    <>
    </>
  </GameProvider>
  )
}

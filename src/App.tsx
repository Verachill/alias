import React, {useState, useEffect} from "react";
import "./style.scss";
import { wordType } from "./types";
import { fetch_words_all, fetch_words_themes_all, fetch_random_words } from "./api/api";

//test


export default function App() {
  const [data, setData] = useState<wordType[]>([])
  const [data1, setData1] = useState<wordType[]>([])
 
  useEffect(() => {
    const getData = async () => {
      const dataFetched = await fetch_random_words({limit: 10})
      setData(dataFetched)
    }
    getData()
  },[setData])

  useEffect(() => {
    const getData = async () => {
      const dataFetched = await fetch_words_themes_all({themes: 'test', limit: 10})
      setData1(dataFetched)
    }
    getData()
  },[setData1])

  return (
    <div>

      <div>
        <span>all</span>
        <br/>
        {data.map(e => {
          return (
            <>
            <br/>
            {e.name}
            </>
          )
        })}
      </div>
 <br/>
      <div>
        <span>themes</span>
         <br/>
        {data1.map(e => (e.name))}
      </div>

    </div>
  )

}

import { db } from "./db";
import { wordType } from "../types";

const themesRef = db.collection("themes");

export async function fetch_themes_all(): Promise<wordType[]>  {
  const snapshot = await themesRef.get();
  const data: wordType[] = []
  snapshot.forEach((doc) => {
    data.push(doc.data() as wordType);
  });
  return data;
}

const wordsRef = db.collection("words");

export async function fetch_words_all(): Promise<wordType[]>  {
  const snapshot = await wordsRef.get();
  const data: wordType[] = []
  snapshot.forEach((doc) => {
    data.push(doc.data() as wordType);
  });
  return data;
}

export async function fetch_words_themes_all(themes: String): Promise<wordType[]>  {
  const snapshot = await wordsRef.where("themes", "==", themes).get();
  const data: wordType[] = []
  snapshot.forEach((doc) => {
    data.push(doc.data() as wordType);
  });
  return data;
}

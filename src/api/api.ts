import { db } from './db'
import { wordType, themesType } from '../types'
import firebase from 'firebase/compat/app'

interface fetchInterface {
  limit?: number
  themes?: string
}

const themesRef = db.collection('themes')

export async function fetch_themes_all(): Promise<themesType[]> {
  const snapshot = await themesRef.get()
  const data: themesType[] = []
  snapshot.forEach((doc) => {
    data.push(doc.data() as themesType)
  })
  return data
}

const wordsRef = db.collection('words')

export async function fetchWordsAll({
  limit = 10,
}: fetchInterface): Promise<wordType[]> {
  const snapshot = await wordsRef.limit(limit).get()

  const data: wordType[] = []
  snapshot.forEach((doc) => {
    data.push(doc.data() as wordType)
  })
  return data
}

export async function fetchWordsThemesAll({
  themes,
  limit = 10,
}: fetchInterface): Promise<wordType[]> {
  const snapshot = await wordsRef
    .where('themes.name', '==', themes)
    .limit(limit)
    .get()

  const data: wordType[] = []
  snapshot.forEach((doc) => {
    data.push(doc.data() as wordType)
  })
  return data
}

// export async function fetch_words_all(): Promise<wordType[]>  {
//   const snapshot = await wordsRef.get();
//   const data: wordType[] = []
//   snapshot.forEach((doc) => {
//     data.push(doc.data() as wordType);
//   });
//   return data;
// }

export async function fetchRandomWords({ themes, limit = 10 }: fetchInterface) {
  var key = wordsRef.doc().id
  let snapshot = await wordsRef
    .where(firebase.firestore.FieldPath.documentId(), '>=', key)
    .limit(limit)
    .get()
  if (snapshot.size < limit) {
    snapshot = await wordsRef
      .where(firebase.firestore.FieldPath.documentId(), '<', key)
      .limit(limit)
      .get()
  }
  const data: wordType[] = []
  snapshot.forEach((doc) => {
    data.push(doc.data() as wordType)
  })
  return data
}

/** @format */

import axios from "axios";
import firebase from "firebase/compat/app";

import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeMjhLDlo_duOcI0ijhAL2NKWFfYIccM8",
  authDomain: "portfolio-13eca.firebaseapp.com",
  databaseURL:
    "https://portfolio-13eca-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-13eca",
  storageBucket: "portfolio-13eca.appspot.com",
  messagingSenderId: "782763120563",
  appId: "1:782763120563:web:4f32083fc4d276d1c15dc6",
  measurementId: "G-KGS6RHR6SE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

const getData = async (
  offset = 0,
  limit = 600,
  complexity = "normal",
  language = "rus"
) => {
  return await axios.get("https://shlyapa-game.ru/api/v1/words", {
    params: {
      offset,
      limit,
      complexity,
      language,
      fields: '["value"]',
    },
  });
};
const wordsRef = db.collection("words");

const complexity = 'normal'

async function start() {
  const total = (await getData()).data.result.total
  const pages = Math.ceil(total / 600)

  for (let i of [...Array(pages).keys()]) {
    const data = (await getData(600 * i, 600, complexity)).data.result.data
    data.forEach(async (element) => {
      const doc = await wordsRef.add({
        name: element.value,
        themes: {
          name: '*',
        },
      })
      console.log(doc.id)
    })
  }
}

start();

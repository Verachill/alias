import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDeMjhLDlo_duOcI0ijhAL2NKWFfYIccM8',
  authDomain: 'portfolio-13eca.firebaseapp.com',
  databaseURL:
    'https://portfolio-13eca-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'portfolio-13eca',
  storageBucket: 'portfolio-13eca.appspot.com',
  messagingSenderId: '782763120563',
  appId: '1:782763120563:web:4f32083fc4d276d1c15dc6',
  measurementId: 'G-KGS6RHR6SE',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

// Use these for db & auth
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth, db }

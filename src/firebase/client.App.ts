// Import the functions you need from the SDKs you need
import { initializeApp ,getApps, getApp} from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import {getDatabase} from 'firebase/database'
// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId:process.env.NEXT_PUBLIC_FIREBASE_APP_ID

  apiKey: "AIzaSyDemgvj9TjTGMyas2nMrDlGO9EzTUj33KU",
  authDomain: "red-social-57bee.firebaseapp.com",
  projectId: "red-social-57bee",
  storageBucket: "red-social-57bee.appspot.com",
  messagingSenderId: "603369104122",
  appId: "1:603369104122:web:581a620c74e59279475f43"
};

// Initialize Firebase


//check if app is initialized in the server side if not initialize
const app = !getApps().length ? initializeApp(firebaseConfig): getApp()
const firestore = getFirestore(app)
const storage = getStorage(app)
// const database = getDatabase(app)
const auth =  getAuth(app)



export {firestore , storage, auth, app} 
// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN6Tkrr1edwwzmNAjKw7mLIAuT54742fQ",
  authDomain: "instagram-web-clone-67033.firebaseapp.com",
  projectId: "instagram-web-clone-67033",
  storageBucket: "instagram-web-clone-67033.appspot.com",
  messagingSenderId: "509399986917",
  appId: "1:509399986917:web:1d10e11fbdb02c183a5a0c"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
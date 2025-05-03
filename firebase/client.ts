// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPHnVZLF-ke92rh2qK62uDBorw9R3g4p0",
  authDomain: "prepwise-3b385.firebaseapp.com",
  projectId: "prepwise-3b385",
  storageBucket: "prepwise-3b385.firebasestorage.app",
  messagingSenderId: "1078299416105",
  appId: "1:1078299416105:web:b566b5174d7f0818ba2e38",
  measurementId: "G-TP7YSD0FZZ"
};

// Initialize Firebase

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app)
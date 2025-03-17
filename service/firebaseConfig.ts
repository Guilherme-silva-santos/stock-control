// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2tOt1aicdwRwr8NbQY4HK5k-M1DFPyAk",
  authDomain: "stock-control-silva.firebaseapp.com",
  projectId: "stock-control-silva",
  storageBucket: "stock-control-silva.firebasestorage.app",
  messagingSenderId: "361435188177",
  appId: "1:361435188177:web:2e903bd4f7cd2b8c09aef0",
  measurementId: "G-SX347Q4P9C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

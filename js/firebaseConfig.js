// js/firebaseConfig.js

// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5BJPZ_dyP9BAAJa22I2QbWzN8pmzLRLg",
  authDomain: "studentjobbse.firebaseapp.com",
  projectId: "studentjobbse",
  storageBucket: "studentjobbse.appspot.com", // Corrected the storage bucket URL
  messagingSenderId: "266581801752",
  appId: "1:266581801752:web:02fdb51ffd75b302edfc6d",
  measurementId: "G-HLDWXM6H8P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

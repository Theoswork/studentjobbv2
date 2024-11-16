// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5BJPZ_dyP9BAAJa22I2QbWzN8pmzLRLg",
  authDomain: "studentjobbse.firebaseapp.com",
  projectId: "studentjobbse",
  storageBucket: "studentjobbse.firebasestorage.app",
  messagingSenderId: "266581801752",
  appId: "1:266581801752:web:02fdb51ffd75b302edfc6d",
  measurementId: "G-HLDWXM6H8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
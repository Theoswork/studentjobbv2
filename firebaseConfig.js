// js/firebaseConfig.js
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js"
import {getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestone.js"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5BJPZ_dyP9BAAJa22I2QbWzN8pmzLRLg",
  authDomain: "studentjobbse.firebaseapp.com",
  projectId: "studentjobbse",
  storageBucket: "studentjobbse.appspot.com",
  messagingSenderId: "266581801752",
  appId: "1:266581801752:web:02fdb51ffd75b302edfc6d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database  = firebase.database();

const app = initializeApp(firebaseConfig)
const signUp=document.getElementById('submitSignUp');
signUp.addEventListener('click', (event)=>{
  event.preventDefault();
  const email=document.getElementById('rEmail').value;
  const password=document.getElementById('rPassword').value;
  const firstName=document.getElementById('fFame').value;
  const lastName=document.getElementById('lName');

  const auth=getAuth ();
  const db=getFirestore();

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredentials)=>{
    const user=userCredentials.user
    const userData={
      email: email,
      firstName: firstName,
      lastName:lastName,
    };
  })
})
//register function

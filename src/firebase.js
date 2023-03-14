import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjT9lAJebznQqM_V3y0Wpr-7w8pzDByTA",
  authDomain: "linkedin-clone-sg-c27b9.firebaseapp.com",
  projectId: "linkedin-clone-sg-c27b9",
  storageBucket: "linkedin-clone-sg-c27b9.appspot.com",
  messagingSenderId: "574699226646",
  appId: "1:574699226646:web:377e8c7f4a50cde9d51737",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

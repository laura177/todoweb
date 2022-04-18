// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJwz1oI8EKGDLRIPwRvps68zto7GKJdtY",
  authDomain: "todolist-438e9.firebaseapp.com",
  projectId: "todolist-438e9",
  storageBucket: "todolist-438e9.appspot.com",
  messagingSenderId: "109217532632",
  appId: "1:109217532632:web:54cc3eee22c657ea2325ad",
  measurementId: "G-8WFDDSCKCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
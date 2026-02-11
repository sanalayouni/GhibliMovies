// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY5graSUE55UzvlB-zG9XC_Ux3qIWfDQ0",
  authDomain: "movie-214af.firebaseapp.com",
  projectId: "movie-214af",
  storageBucket: "movie-214af.firebasestorage.app",
  messagingSenderId: "534267950995",
  appId: "1:534267950995:web:09c2f1a5589d373b755a66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
  
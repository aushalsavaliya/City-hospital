// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import { getAutoHeightDuration } from "@mui/material/styles/createTransitions";

const firebaseConfig = {
  apiKey: "AIzaSyAXRrzfB3degS-3tpn_YKQxeHN_mlqb7V8",
  authDomain: "city-hospital-893d0.firebaseapp.com",
  projectId: "city-hospital-893d0",
  storageBucket: "city-hospital-893d0.appspot.com",
  messagingSenderId: "914850007480",
  appId: "1:914850007480:web:8aa3dbe21194f3de37274d",
  measurementId: "G-CYJ1EF5893"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const provider = new GoogleAuthProvider();

export {auth , provider , db}
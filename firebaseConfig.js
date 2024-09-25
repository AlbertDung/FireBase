// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  GoogleAuthProvider } from "firebase/auth";
//import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdaC5MlHbpvtdsaO2Y-iy2ADPPAVOLvNc",
  authDomain: "todosapp-df597.firebaseapp.com",
  projectId: "todosapp-df597",
  storageBucket: "todosapp-df597.appspot.com",
  messagingSenderId: "756702315456",
  appId: "1:756702315456:web:ac5da9055aa02102d8fe25",
  measurementId: "G-49H0X06ZQC"
};

// Initialize Firebase
const Fireapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(Fireapp);
const auth = getAuth(Fireapp);
//const db = getFirestore(Fireapp);
const provider = new GoogleAuthProvider();

export { Fireapp, analytics, auth, provider };
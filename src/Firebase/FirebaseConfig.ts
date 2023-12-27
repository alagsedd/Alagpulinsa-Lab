// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZt8ilVBTFKDa1ipf7bMOQ9X8Ql1EIMi0",
  authDomain: "alagpulinsa-s-laboratory.firebaseapp.com",
  projectId: "alagpulinsa-s-laboratory",
  storageBucket: "alagpulinsa-s-laboratory.appspot.com",
  messagingSenderId: "1076206732986",
  appId: "1:1076206732986:web:f8217d146b9e3111b5e483",
  measurementId: "G-23EFQP8CY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const googleProvider = new GoogleAuthProvider()
export const database = getFirestore(app)
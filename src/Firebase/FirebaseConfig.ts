// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALSV2Gb6wtBBrBIfonI0YhOYBg6cbfNxE",
  authDomain: "alagpulinsa-laboratory.firebaseapp.com",
  projectId: "alagpulinsa-laboratory",
  storageBucket: "alagpulinsa-laboratory.appspot.com",
  messagingSenderId: "144706433150",
  appId: "1:144706433150:web:7aa3215f337804da8ae82f",
  measurementId: "G-5VK1MJ4SXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const googleProvider = new GoogleAuthProvider()
export const database = getFirestore(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "socfinalproject-99d1a.firebaseapp.com",
  projectId: "socfinalproject-99d1a",
  storageBucket: "socfinalproject-99d1a.appspot.com",
  messagingSenderId: "403958869570",
  appId: "1:403958869570:web:5ac443ad4a2d93cb4e47db"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
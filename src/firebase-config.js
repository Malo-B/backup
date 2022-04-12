// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj4xzTRPSkPuoP8ydt90oIZ4NSMWR6W-c",
  authDomain: "supervision-salle-serveurs.firebaseapp.com",
  projectId: "supervision-salle-serveurs",
  storageBucket: "supervision-salle-serveurs.appspot.com",
  messagingSenderId: "386280892789",
  appId: "1:386280892789:web:b0d434aa7d35aaa1e28b3c",
  measurementId: "G-0HJSK74827"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
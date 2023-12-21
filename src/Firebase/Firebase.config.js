import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvyS33kZfCQKpoJnhaoY55KLX-wxHO2Jk",
  authDomain: "task-master-pro-a6e26.firebaseapp.com",
  projectId: "task-master-pro-a6e26",
  storageBucket: "task-master-pro-a6e26.appspot.com",
  messagingSenderId: "29540232848",
  appId: "1:29540232848:web:d297ef6c9b1402de1c3215"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
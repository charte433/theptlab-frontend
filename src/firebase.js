// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmHAKF152vbEY_1jWN-3542XfC56YKKSw",
  authDomain: "the-pt-lab.firebaseapp.com",
  projectId: "the-pt-lab",
  storageBucket: "the-pt-lab.appspot.com",
  messagingSenderId: "117781010993",
  appId: "1:117781010993:web:73bb03135bf4321ece9310"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
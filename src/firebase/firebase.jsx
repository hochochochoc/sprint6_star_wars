// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB09kRbYY8kSY4WtOPu-6U8s1cWAzSwweo",
  authDomain: "star-wars-f984d.firebaseapp.com",
  projectId: "star-wars-f984d",
  storageBucket: "star-wars-f984d.appspot.com",
  messagingSenderId: "458980870238",
  appId: "1:458980870238:web:2f73f07383451232344ccf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };

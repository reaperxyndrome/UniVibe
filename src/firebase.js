// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getDatabase } from "firebase/database";
import { json } from "react-router-dom";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//TODO fix firebase connection error
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "univibe-c75b3.firebaseapp.com",
  projectId: "univibe-c75b3",
  storageBucket: "univibe-c75b3.appspot.com",
  messagingSenderId: "1086854947676",
  appId: "1:1086854947676:web:fe6fbffedaafb1d24cd799",
  measurementId: "G-RPP2GP2K11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
const db = getDatabase(app);
//firebase authentication
export {auth, db}
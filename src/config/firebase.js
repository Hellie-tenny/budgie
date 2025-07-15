import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDF_9wXgFekArdzEf2YT2RNSOzKoZNFaZA",
  authDomain: "budgie-7dd8a.firebaseapp.com",
  projectId: "budgie-7dd8a",
  storageBucket: "budgie-7dd8a.firebasestorage.app",
  messagingSenderId: "605209595858",
  appId: "1:605209595858:web:27624a267bc6a8e91b820b",
  measurementId: "G-S3VHTTG41H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);
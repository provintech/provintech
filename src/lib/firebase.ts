// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH9fkKd8oQc4TwXlGzTarwpdj4S0AGiqI",
  authDomain: "gwttechnologies-615d6.firebaseapp.com",
  projectId: "gwttechnologies-615d6",
  storageBucket: "gwttechnologies-615d6.firebasestorage.app",
  messagingSenderId: "102222394283",
  appId: "1:102222394283:web:e257de527ac4cbdba498ee",
  measurementId: "G-BJKJMR1NNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Analytics (optional)
export const analytics = getAnalytics(app);

export default app;


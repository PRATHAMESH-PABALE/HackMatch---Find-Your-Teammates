// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAGT5-Ej4wxSfUfdY0_Bh7g2L4aKurgB5w",
    authDomain: "hackmatch-dcfb1.firebaseapp.com",
    projectId: "hackmatch-dcfb1",
    storageBucket: "hackmatch-dcfb1.firebasestorage.app",
    messagingSenderId: "129174816841",
    appId: "1:129174816841:web:d691abd87373d3c3579798"  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

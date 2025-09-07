// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA63tta665Cr3U7U7G4svzmogL7VxL5n-o",
  authDomain: "loveleey-8937d.firebaseapp.com",
  projectId: "loveleey-8937d",
  storageBucket: "loveleey-8937d.firebasestorage.app",
  messagingSenderId: "994956647193",
  appId: "1:994956647193:web:40fc86da1bd4745ad00388",
  measurementId: "G-DEXZNZJ36N",
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firestore 초기화
export const db = getFirestore(app);

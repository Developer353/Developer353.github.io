// lib/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCYbBI_-RhDDMtC4xnK3GQB1eRyT-SVG2g",
  authDomain: "vblush-705a9.firebaseapp.com",
  projectId: "vblush-705a9",
  storageBucket: "vblush-705a9.firebasestorage.app",
  messagingSenderId: "648786137913",
  appId: "1:648786137913:web:cf2c4950e55d68a26dcee8",
  measurementId: "G-R57ZX0PWE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

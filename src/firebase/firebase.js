import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBj1glSK4-fifGl6EiVhsHyXnIgVedQclk",
  authDomain: "nutrify-life.firebaseapp.com",
  projectId: "nutrify-life",
  storageBucket: "nutrify-life.firebasestorage.app",
  messagingSenderId: "686107433002",
  appId: "1:686107433002:web:b1f98dc387e7a5691ecb53"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db=getFirestore(app);
export default app;
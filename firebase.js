import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBu0BvaJdqTEUcpQ-GYss-sX-F-P6hVNgA",
  authDomain: "arcadia-chat-5480c.firebaseapp.com",
  projectId: "arcadia-chat-5480c",
  storageBucket: "arcadia-chat-5480c.firebasestorage.app",
  messagingSenderId: "887125304698",
  appId: "1:887125304698:web:d7a040f170e8ec7bf922c3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

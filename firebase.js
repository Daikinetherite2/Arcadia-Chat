import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

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

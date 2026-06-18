import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase.js";

const provider = new GoogleAuthProvider();

export async function login() {
  const res = await signInWithPopup(auth, provider);

  const user = res.user;

  await setDoc(doc(db, "users", user.uid), {
    name: user.displayName,
    photoURL: user.photoURL,
    email: user.email,
    online: true,
    lastSeen: Date.now()
  });
}

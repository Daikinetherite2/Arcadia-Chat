import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase.js";

const provider = new GoogleAuthProvider();

export function login() {
  signInWithPopup(auth, provider)
    .then((res) => {
      document.getElementById("user").innerText =
        res.user.displayName;
    });
}

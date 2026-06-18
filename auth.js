import { GoogleAuthProvider, signInWithPopup } 
from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import { auth } from "./firebase.js";

const provider = new GoogleAuthProvider();

export function login() {
  signInWithPopup(auth, provider)
    .then((res) => {
      console.log("LOGIN SUCCESS", res.user);
    })
    .catch((err) => {
      console.log("LOGIN ERROR", err);
    });
}

calls/{chatId}
  offer
  answer
  caller
  receiver

import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase.js";

export async function startCall(chatId, offer) {
  await setDoc(doc(db, "calls", chatId), {
    offer
  });
}

import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./firebase.js";

export function listenCall(chatId, callback) {
  onSnapshot(doc(db, "calls", chatId), (docSnap) => {
    callback(docSnap.data());
  });
}

const pc = new RTCPeerConnection();

async function createOffer() {
  const offer = await pc.createOffer();
  await pc.setLocalDescription(offer);
  return offer;
}

import { login } from "./auth.js";

window.login = login;

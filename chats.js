chats/{chatId}/messages/{msgId}
  text
  senderId
  createdAt

export function getChatId(a, b) {
  return [a, b].sort().join("_");
}

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase.js";

export async function sendMessage(chatId, uid, text) {
  await addDoc(collection(db, "chats", chatId, "messages"), {
    senderId: uid,
    text,
    createdAt: serverTimestamp()
  });
}

import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "./firebase.js";

export function listenMessages(chatId, callback) {
  const q = query(
    collection(db, "chats", chatId, "messages"),
    orderBy("createdAt")
  );

  onSnapshot(q, (snap) => {
    const msgs = [];
    snap.forEach(d => msgs.push(d.data()));
    callback(msgs);
  });
}

import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase.js";

export function setOnline(uid, status) {
  updateDoc(doc(db, "users", uid), {
    online: status,
    lastSeen: Date.now()
  });
}

import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase.js";

export function setTyping(chatId, uid, isTyping) {
  setDoc(doc(db, "typing", chatId + "_" + uid), {
    typing: isTyping
  });
}


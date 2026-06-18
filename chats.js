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

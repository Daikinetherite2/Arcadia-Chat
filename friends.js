friends/{uid}/list/{friendUid}
  createdAt

import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase.js";

export async function addFriend(myUid, friendUid) {
  await setDoc(doc(db, "friends", myUid, "list", friendUid), {
    createdAt: Date.now()
  });
}

import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase.js";

export function listenFriends(uid, callback) {
  onSnapshot(collection(db, "friends", uid, "list"), (snap) => {
    const list = [];
    snap.forEach(doc => list.push(doc.id));
    callback(list);
  });
}

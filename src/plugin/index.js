import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDVaJPnBh6bMG-PCvAkyFyYjamAva7XB8o",
  authDomain: "adminbookingroom.firebaseapp.com",
  projectId: "adminbookingroom",
  storageBucket: "adminbookingroom.appspot.com",
  messagingSenderId: "1005987633527",
  appId: "1:1005987633527:web:aa0b21b26e8fe939f9a972",
  measurementId: "G-MJN1EXW2X9",
});
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
export { db, storage };

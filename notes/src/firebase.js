import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCP520U1fZe1yvLaFOewDmsM8DvFuhEimg",
  authDomain: "react-notes-af3c1.firebaseapp.com",
  projectId: "react-notes-af3c1",
  storageBucket: "react-notes-af3c1.appspot.com",
  messagingSenderId: "472993933869",
  appId: "1:472993933869:web:537f7b192ac42f667aa6a4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
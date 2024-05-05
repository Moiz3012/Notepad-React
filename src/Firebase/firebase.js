// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCV25XRj2LxQ6OxZKP4-VzwtIh2nygSExY",
  authDomain: "react-notes-app-6ebde.firebaseapp.com",
  projectId: "react-notes-app-6ebde",
  storageBucket: "react-notes-app-6ebde.appspot.com",
  messagingSenderId: "726507115750",
  appId: "1:726507115750:web:d4a3e2a938d33b8e89d727"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAs0jp4dPgC-mRDwy114BVui38OkUF1aME",
  authDomain: "aula-3-a1ace.firebaseapp.com",
  projectId: "aula-3-a1ace",
  storageBucket: "aula-3-a1ace.firebasestorage.app",
  messagingSenderId: "549119941760",
  appId: "1:549119941760:web:f2cf3930939ae7c7a79a65",
  measurementId: "G-08WNX4M0BV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
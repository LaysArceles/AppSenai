// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
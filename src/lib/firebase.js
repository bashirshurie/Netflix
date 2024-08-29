// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwCF5NwrSUDIuJ-gGZ4iVGiRFlXDYuILs",
  authDomain: "ntf-clone-21298.firebaseapp.com",
  projectId: "ntf-clone-21298",
  storageBucket: "ntf-clone-21298.appspot.com",
  messagingSenderId: "780459040887",
  appId: "1:780459040887:web:b6976ff0fc8fa51ae5a672"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
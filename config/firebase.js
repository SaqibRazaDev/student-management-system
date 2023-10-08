// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIT1ZMg_UJD_F2EENprL_kvXKlfZ0363M",
  authDomain: "smit-admin.firebaseapp.com",
  projectId: "smit-admin",
  storageBucket: "smit-admin.appspot.com",
  messagingSenderId: "1008470909972",
  appId: "1:1008470909972:web:7c28dd10b350385bf87301"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
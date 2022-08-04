// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqmsyERoxSv4iSjgct0E6jdaoDyoHwUHU",
  authDomain: "ecommerce-milano.firebaseapp.com",
  projectId: "ecommerce-milano",
  storageBucket: "ecommerce-milano.appspot.com",
  messagingSenderId: "470459655091",
  appId: "1:470459655091:web:6c9ce323e89f7bd4ee61c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
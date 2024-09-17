// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore,collection } from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getStorage } from "firebase/storage";

import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4JTnVOSQu4_J_jlCzsr5GqyMfH_A3Fdk",
  authDomain: "texter-664b8.firebaseapp.com",
  projectId: "texter-664b8",
  storageBucket: "texter-664b8.appspot.com",
  messagingSenderId: "902763790886",
  appId: "1:902763790886:web:9fa93cada38043a4a71ce7",
  measurementId: "G-QZSNYK4X5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth=getAuth(app);
export const storage = getStorage(app);
export const provider=new GoogleAuthProvider();
export const Users=collection(db,"Users");

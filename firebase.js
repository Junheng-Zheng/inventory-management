// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgbxwqNZKPK8_BbzSFJCsSOpx0BuKSO8I",
  authDomain: "inventory-management-c5fed.firebaseapp.com",
  projectId: "inventory-management-c5fed",
  storageBucket: "inventory-management-c5fed.appspot.com",
  messagingSenderId: "795198218978",
  appId: "1:795198218978:web:154daed5300cfe240fb4bb",
  measurementId: "G-MH3ENR87DT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}
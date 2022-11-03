import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDbRgo3-IaSDZj9YEoqPG2MUZ7nz2kdk4M",
  authDomain: "journaling-application-de78b.firebaseapp.com",
  projectId: "journaling-application-de78b",
  storageBucket: "journaling-application-de78b.appspot.com",
  messagingSenderId: "580453151816",
  appId: "1:580453151816:web:5add8d80e5a01f5a1fd47d",
  measurementId: "G-L8QJVFQYDM"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db}
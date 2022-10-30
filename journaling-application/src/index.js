import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Topnav from './Topnav'
import Journal from './Journal'
import reportWebVitals from './reportWebVitals';
import TODO_list from './Journal';

import { initializeApp } from "firebase/app";
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Topnav signedIn='0'/>
    <Journal checkList={["get more sleep", "cry"]}/>
    {/* <App /> */}
    {/* <TODO_list checkList={["Apple", "Banana", "Tea", "Coffee"]}/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Topnav from './Topnav'
import Journal from './journal_components/Journal'
import reportWebVitals from './reportWebVitals';
import OldJournal from './OldJournal'
import TODO_list from './OldJournal';
import {app, db} from "./DatabaseInit.js"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Topnav signedIn='0'/>
    <OldJournal checkList={[{checked: false, str:"get more sleep"}, {checked: true, str: "cry"}]}/>
    {/* <App /> */}
    {/* <TODO_list checkList={["Apple", "Banana", "Tea", "Coffee"]}/> */}
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

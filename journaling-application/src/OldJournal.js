import React, {useEffect, useState} from "react";
import Popup from 'reactjs-popup';
import './Journal.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs} from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, db } from './DatabaseInit.js'
import { doc, setDoc, Timestamp } from "firebase/firestore"; 

import RightPage from "./journal_components/RightPage";

/*
Database formatting: 
    - each collection is named after the user's uid
    - each document in the user's collection is for a different day (can be saved/updated for that day)
*/

const auth = getAuth()
var user = auth.currentUser
// check if a user is signed in
onAuthStateChanged(auth, (user) => {
    if(user){
        console.log("signed in")
        console.log("user is " + user.uid)
    }else{
        console.log("not signed in")
    }
})

// global var for todo_list
let todos = []

// takes in list of text to put in checkboxes
function TODO_list(props){
    const [todoList, setTodoList] = useState(props)
    const [newVal, setNewVal] = useState("")

    todos = todoList

    const handleSubmit = () => {
        console.log("handling submit")
        // console.log(newVal)
        todoList.push({checked: false, str: newVal})
        console.log(todoList)
        todos = todoList
        setTodoList([...todoList])
    }

    return (
    <div className="checkList">
        <div className="list-container">
        {todoList.map((item, index) => (
            <div key={index}>
                <input defaultChecked={item.checked} type="checkbox"/>
                <span>{item.str}</span>
            </div>
        ))}
        </div>
        <Popup trigger={<button>+</button>} modal>
                {close => (
                    <div>
                        <h4>Add new To-Do</h4>
                            <label htmlFor="text">Text:
                                <input type="text" id="text" 
                                    onChange={(e) => setNewVal(e.target.value)}/>
                            </label>
                            <button onClick={handleSubmit}>submit</button>
                    </div>
                )}
            </Popup>
    </div>
    );
}

// function to save the data to the database
function save (){
    // console.log(goals + " " + values)
    const auth = getAuth()
    onAuthStateChanged(auth, function(user){
        if(user){
            // if the user is signed in, then we can save to database
            setDoc(doc(db, ("" + user.uid), ("" + Timestamp.now())), {
                goals: document.getElementById("goals").value,
                values: document.getElementById("values").value,
                todos: todos,
                jouranl_entry: document.getElementById("journal_entry").value
            })
            console.log("saved")
        } else {
            // if the user is not signed in, then we cannot save
            console.log("not signed in, cannot save")
        }
    })
}


function OldJournal(props){
    return (
        <div id="journal">
            {/* row seperating the two pages of the journal */}
            <div className="book_page" id="left">
                <div id="cur_goals" className="journal_part">
                    <h3>current goals:</h3>
                    <input type="text" className="text_form" id="goals">
                        {props.cur_goals}
                    </input>
                </div>
                <div id="core_values" className="journal_part">
                    <h3>core values:</h3>
                    <input type="text" className="text_form" id="values">
                        {props.cur_goals}
                    </input>
                </div>
                <div id="to_do" className="journal_part checkboxes">
                    <h3>to-do:</h3>
                    <section id="textarea">
                        {TODO_list(props.checkList)}
                    </section>
                </div>
            </div>

            <div className="vl"></div>

            <RightPage />
        </div>
    )
}

export default OldJournal;
// export default TODO_list;


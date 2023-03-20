import React, {useEffect, useState} from "react";
import '../Journal.css';

// old page imports just to get an idea of what the app will look like
import RightPage from './RightPage'
import TODO_list from '../OldJournal'

import ToDo from "./ToDo"

const Journal = (props) => {
    // use hooks to manage the state of all 4 input fields
    const [message, updateMessage] = useState("testing")
    const [goals, updateGoals] = useState("")
    const [values, updateValues] = useState("")
    const [todoText, updateTodoText] = useState("")
    const [todos, updateTodos] = useState([])
    
    return (
        <div id="journal">
            {/* row seperating the two pages of the journal */}
            <div className="book_page" id="left">
                <div id="cur_goals" className="journal_part">
                    <h3>current goals:</h3>
                    <input type="text" className="text_form" id="goals" value={goals} onChange={(event) => {updateGoals(event.target.value)}}>
                    </input>
                    <p>{goals}</p>
                </div>
                <div id="core_values" className="journal_part">
                    <h3>core values:</h3>
                    <input type="text" className="text_form" id="values" value={values} onChange={(event) => updateValues(event.target.value)}>
                    </input>
                </div>
                <div id="to_do" className="journal_part checkboxes">
                    <h3>to-do:</h3>
                    <input
                        type="text" 
                        className="text_form" 
                        id="todo_text_box"
                        value={todoText} 
                        onChange={(event) => {updateTodoText(event.target.value)}} 
                        onKeyDown={(event) => {
                            if(event.key === "Enter" && todoText != ""){
                                todos.push({text: todoText, checked: false})
                                updateTodos(todos);
                                updateTodoText("");
                            }
                        }}
                    ></input>

                    <section id="textarea">
                        <ul>
                        {todos.map((todo, index) => {
                            console.log("adding todo");
                            return <ToDo key={index} text={todo.text}/>
                        })}
                        </ul>
                    </section>
                </div>
            </div>

            <div className="vl"></div>
            <div className="book_page" id="right">
                <h3>Journal</h3>
                <input type="text" id="journal_entry" value={message} onChange={(event) => {updateMessage(event.target.value)}}></input>

                <div id="page_arrows">
                    <button id="left_arrow">page_left</button>
                    <button id="right_arrow">page_right</button>
                </div>

                {/* <button id="save" onClick={console.log("hi")}>save</button> */}
            </div>
        </div>

    )
}

export default Journal
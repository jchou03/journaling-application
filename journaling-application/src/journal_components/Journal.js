import React, {useEffect, useState} from "react";
import '../Journal.css';

// old page imports just to get an idea of what the app will look like
import RightPage from './RightPage'
import TODO_list from '../OldJournal'

const Journal = (props) => {
    // use hooks to manage the state of all 4 input fields
    const [message, updateMessage] = useState("")
    const [goals, updateGoals] = useState([])
    const [values, updateValues] = useState("")
    const [todos, updateTodos] = useState([])
    
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

export default Journal
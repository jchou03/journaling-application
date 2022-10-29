import React, {useEffect, useState} from "react";
import Popup from 'reactjs-popup';
import './Journal.css';

// create a popup for adding a new todo element
function Add_todo(){
    const [name, setName] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`);
      }

    return(
        <div>
            <Popup trigger={<button>+</button>} modal>
                {close => (
                    <div>
                        <h4>Add new To-Do</h4>
                        <form>
                            <label htmlFor="text">Text:
                                <input type="text" id="text" value={name}
                                    onChange={(e) => setName(e.target.value)} 
                                    onSubmit={handleSubmit}/>
                            </label>
                            <input type="submit" />
                        </form>

                        {/* <button onClick={() => {
                            todos.push(document.getElementById("text").value)
                            console.log(todos)
                            close()
                        }}>submit</button> */}
                    </div>
                )}
            </Popup>
        </div>
    )
}


// takes in list of text to put in checkboxes
function TODO_list(props){
    const [todoList, setTodoList] = useState(props)
    const [newVal, setNewVal] = useState("")
    // let todoList = todos

    const handleSubmit = () => {
        console.log("handling submit")
        console.log(newVal)
        // let newList = todoList
        // newList.push(newVal)
        // console.log(newList)
        todoList.push(newVal)
        console.log(todoList)
        setTodoList([...todoList])
        // this.setState(
        //     {reload: true},
        //     () => this.setState({reload: false})
        //   )
    }

    return (
    <div className="checkList">
        <div className="list-container">
        {todoList.map((item, index) => (
            <div key={index}>
                <input value={item} type="checkbox" />
                <span>{item}</span>
            </div>
        ))}
        </div>
        {/* {Add_todo()} */}
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


function Journal(props){
    return (
        <div id="journal">
            {/* row seperating the two pages of the journal */}
            <div className="book_page" id="left">
                <div id="cur_goals" className="journal_part">
                    <h3>current goals:</h3>
                    <section contentEditable="true">
                        {props.cur_goals}
                    </section> 
                </div>
                <div id="core_values" className="journal_part">
                    <h3>core values:</h3>
                    <section contentEditable="true">
                        {props.core_values}    
                    </section> 
                </div>
                <div id="to_do" className="journal_part checkboxes">
                    <h3>to-do:</h3>
                    <section id="textarea">
                        {TODO_list(props.checkList)}
                    </section>
                </div>
            </div>

            <div className="vl"></div>

            <div className="book_page" id="right">
                <h3>Journal</h3>
                <section contentEditable="true">
                </section>

                <div id="page_arrows">
                    <button id="left_arrow">page_left</button>
                    <button id="right_arrow">page_right</button>
                </div>
            </div> 
        </div>
    )
}

export default Journal;
// export default TODO_list;


import './Journal.css';

function TODO_element(props){
    return(
        <li><input type="checkbox" value={props.val}></input>{props.text}</li>
    )
}

// takes in list of text to put in checkboxes
function TODO_list(){
    // const [checked, setChecked] = useState([]);
    const checkList = ["Apple", "Banana", "Tea", "Coffee"];

    // Add/Remove checked item from list
    const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
        updatedList = [...checked, event.target.value];
    } else {
        updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    };

    // Generate string of checked items
    const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
        })
    : "";

    // Return classes based on whether item is checked
    var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

    return (
        <div className="app">
            <div className="checkList">
            <div className="title">Your CheckList:</div>
            <div className="list-container">
                {checkList.map((item, index) => (
                <div key={index}>
                    <input value={item} type="checkbox" onChange={handleCheck} />
                    <span className={isChecked(item)}>{item}</span>
                </div>
                ))}
            </div>
            </div>

            <div>
            {`Items checked are: ${checkedItems}`}
            </div>
        </div>
    );
}

function Journal(props){
    return (
        <div id="journal">
            {/* row seperating the two pages of the journal */}
            <div class="book_page" id="left">
                <div id="cur_goals" class="journal_part">
                    <h3>current goals:</h3>
                    <section contenteditable="true">
                        {props.cur_goals}
                    </section> 
                </div>
                <div id="core_values" class="journal_part">
                    <h3>core values:</h3>
                    <section contenteditable="true">
                        {props.core_values}    
                    </section> 
                </div>
                <div id="to_do" class="journal_part checkboxes">
                    <h3>to-do:</h3>
                    <section id="textarea" contenteditable="true">
                    <ul>
                        <li>{/*<input type="checkbox"></input>*/} testing</li>
                    </ul>
                    </section>
                </div>
            </div>

            <div class="vl"></div>

            <div class="book_page" id="right">
                <h3>Journal</h3>
                <section contenteditable="true">
                </section>

                <div id="page_arrows">
                    <button id="left_arrow">page_left</button>
                    <button id="right_arrow">page_right</button>
                </div>
            </div> 
        </div>
    )
}

// export default Journal;
export default TODO_list;


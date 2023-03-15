import React, {useEffect, useState} from "react";
import '../Journal.css';

const RightPage = (props) => {
    const [text, setText] = useState("")

    return (
        <div className="book_page" id="right">
            <h3>Journal</h3>
            <input type="text" id="journal_entry">
                {props.text}
            </input>

            <div id="page_arrows">
                <button id="left_arrow">page_left</button>
                <button id="right_arrow">page_right</button>
            </div>

            <button id="save" onClick={console.log("hi")}>save</button>
        </div> 
    )
}


export default RightPage
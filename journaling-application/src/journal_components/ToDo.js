import React from 'react';
import '../Journal.css';

function ToDo(props) {
    return (
        <div>
            <input type="checkbox" id={props.key}></input>
            <label for={props.key}>{props.text}</label>
        </div>
    )
}

export default ToDo
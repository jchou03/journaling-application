import Navbar from 'react-bootstrap/Navbar';
import './Topnav.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React from 'react';

function signUp(state, email, username, password) {
    console.log(email);
    console.log(username);
    console.log(password);
}

function signIn(state, username, password) {
    console.log(username);
    console.log(password);

}

function signOut(state) {
    console.log("signed out");
}

function signInPopup(state, close) {
    if (state.signedIn == 1) {
        return (
            <Popup trigger={<button> Sign out</button>} modal>
                {close => (
                    <>
                        <h1> Sign out? </h1>

                        <button onClick={() => {
                            signOut(state);
                            close();
                        }}>Yes</button>
                        <button>No</button>
                    </>
                )}
            </Popup>
        );
    } else {
        return (
            <>
                <Popup trigger={<button> Sign up</button>} modal>
                    {close => (
                        <>
                            <h1> Sign up </h1>

                            <label for="email">Email address: </label>
                            <input type="text" id="email"/><br/>
                            <label for="name">Username: </label>
                            <input type="text" id="name"/><br/>
                            <label for="pass">Password: </label>
                            <input type="text" id="pass"/><br/>
                            <button onClick={() => {
                                signUp(
                                    state, 
                                    document.getElementById("email").value, 
                                    document.getElementById("name").value, 
                                    document.getElementById("pass").value);
                                close();
                            }}>Sign Up</button>
                        </>
                    )}
                </Popup>

                <Popup trigger={<button> Sign in</button>} modal>
                    {close => (
                        <>
                            <h1> Sign in </h1>

                            <label for="name">Username: </label>
                            <input type="text" id="name"/><br/>
                            <label for="pass">Password: </label>
                            <input type="text" id="pass"/><br/>
                            <button onClick={() => {
                                signIn(state, document.getElementById("name").value, document.getElementById("pass").value);
                                close();
                            }}>Sign In</button>
                        </>
                    )}
                </Popup>
            </>
        );
    }
}

class Topnav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            signedIn: props.signedIn
        };
    }
    render() {
        return(
            <Navbar className="navbar" style={{height:'10%'}}>
                <b>
                    <img 
                        style={{maxHeight:'65px', paddingRight: '25px'}} 
                        src="https://aux.iconspalace.com/uploads/book-icon-256-2103632816.png">
                    </img>
                    Hello {this.state.signedIn == 1 ? this.state.username : ""} and welcome to your journal
                </b>
    
                {this.state.signedIn == 1 ? <a>Currently signed in as {this.state.username}</a> : <></>}
    
                {signInPopup(this.state)}
            </Navbar>
        );
    }
}

export default Topnav;
import Navbar from 'react-bootstrap/Navbar';
import './Topnav.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

function signUp(setState, email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        setState((state, props) => {
            return {
                signedIn: 1,
                user: userCredential.user,
                email: email
            }
        });
    }).catch((error) => {
        console.log("Error occurred while creating new user");
        console.log(error.code);
        console.log(error.message);
    });
    console.log(email);
    console.log(password);
}

function logIn(setState, email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        console.log("signed in with: " + userCredential.user.uid)
        setState((state, props) => {
            return {
                signedIn: 1,
                user: userCredential.user,
                email: email
            }
        });
    }).catch((error) => {
        console.log("Error occurred while signing in");
        console.log(error.code);
        console.log(error.message);
    });

}

function logOut(setState) {
    const auth = getAuth();
    signOut(auth).then(() => {
        console.log("signed out")
        setState((state, props) => {
            return {
                signedIn: 0,
                user: null,
                email: null
            }
        });
    }).catch((error) => {
        console.log("Error occurred while signing out");
        console.log(error.code);
        console.log(error.message);
    });
}

function signInPopup(state, setState) {
    if (state.signedIn == 1) {
        return (
            <Popup trigger={<button> Sign out</button>} modal>
                {close => (
                    <>
                        <h1> Sign out? </h1>

                        <button onClick={() => {
                            logOut(setState);
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
                            <label for="pass">Password: </label>
                            <input type="text" id="pass"/><br/>
                            <button onClick={() => {
                                signUp(
                                    setState, 
                                    document.getElementById("email").value, 
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

                            <label for="email">Email: </label>
                            <input type="text" id="email"/><br/>
                            <label for="pass">Password: </label>
                            <input type="text" id="pass"/><br/>
                            <button onClick={() => {
                                logIn(setState, document.getElementById("email").value, document.getElementById("pass").value);
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
            signedIn: props.signedIn,
            user: null,
            email: null
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
                    Welcome to your journal!
                </b>
    
                {this.state.signedIn == 1 ? <a>Currently signed in as {this.state.email}</a> : <></>}
    
                {signInPopup(this.state, this.setState.bind(this))}
            </Navbar>
        );
    }
}

export default Topnav;
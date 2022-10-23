import Navbar from 'react-bootstrap/Navbar';
import './Topnav.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function signIn(props, username, password) {
    console.log(username);
    console.log(password);
    //need to switch to using state instead of properties for this
    //props.signedIn = 1;
}

function signOut(props) {
    console.log("signed out");
    //props.signedIn = 0;
}

function signInPopup(props) {
    if (props.signedIn==1) {
        return (
            <>
                <h1> Sign out? </h1>

                <button onClick={() => signOut(props)}>Yes</button>
                <button>No</button>
            </>
        );
    } else {
        return (
            <>
                <h1> Sign in </h1>

                <form onSubmit={() => {
                    signIn(props, document.getElementById("name").value, document.getElementById("pass").value);
                }}>
                    <label for="name">Username: </label>
                    <input type="text" id="name"/><br/>
                    <label for="pass">Password: </label>
                    <input type="text" id="pass"/><br/>
                    <input type="submit" value="Sign in"/>
                </form>
            </>
        );
    }
}

function Topnav(props) {
    return(
        <Navbar className="navbar" style={{height:'10%'}}>
            <b>
                <img 
                    style={{maxHeight:'65px', paddingRight: '25px'}} 
                    src="https://aux.iconspalace.com/uploads/book-icon-256-2103632816.png">
                </img>
                Hello {props.username} and welcome to your journal
            </b>

            <a>Currently signed in as {props.username}</a>

            <Popup trigger={<button> {props.signedIn==1 ? "Sign out" : "Sign in"}</button>} modal>
                {signInPopup(props)}
             </Popup>
        </Navbar>
    );
}

export default Topnav;
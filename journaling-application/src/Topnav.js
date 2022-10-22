import Navbar from 'react-bootstrap/Navbar';
import './Topnav.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function signInPopup(signedIn) {
    if (signedIn == "true") {
        return (
            <>
                <h1> Sign out? </h1>

                <button>Yes</button>
                <button>No</button>
            </>
        );
    } else {
        return (
            <>
                <h1> Sign in </h1>

                <form action="/action_page.php">
                    <label for="fname">Username: </label>
                    <input type="text" id="fname" name="fname"/><br/>
                    <label for="lname">Password: </label>
                    <input type="text" id="lname" name="lname"/><br/>
                    <input type="submit" value="Submit"/>
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
                    style={{'max-height':'65px', 'padding-right': '25px'}} 
                    src="https://aux.iconspalace.com/uploads/book-icon-256-2103632816.png">
                </img>
                Hello {props.username} and welcome to your journal
            </b>

            <a>Currently signed in as {props.username}</a>

            <Popup trigger={<button> {props.signedIn=="true" ? "Sign out" : "Sign in"}</button>} modal>
                {signInPopup(props.signedIn)}
             </Popup>
        </Navbar>
    );
}

export default Topnav;
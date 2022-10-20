import Navbar from 'react-bootstrap/Navbar';
import './Topnav.css';

function Topnav() {
    return(
        <Navbar className="navbar">
            <b>
                <img 
                    style={{'max-height':'65px', 'padding-right': '25px'}} 
                    src="https://aux.iconspalace.com/uploads/book-icon-256-2103632816.png"></img>
                Hello [User] and welcome to your journal</b>
            <a>Currently signed in as []</a>
            <a>sign in/out</a>
        </Navbar>
    );
}

export default Topnav;
import React from 'react';

function LogInOverlay ({ toggleLogInBox, toggleSignUpBox, logInUser, handleTyping, usernameInput, errorOnLogIn }) {
    return (
    <div className="overlay">
        <form className="modal">
            <h3>Please log-in...</h3>
            <input type="text" value={usernameInput} onChange={handleTyping} id="usernameInput"/>
            <br/>
            {/* <input type="text" value="Password..." id="passwordInput"/>
            <br/> */}
            <button type="button" value="logIn" onClick={logInUser} id="logInButton">Log-In</button>
            <button type="button" value="close" onClick={toggleLogInBox} id="closeButton">Close Window</button>
            {errorOnLogIn && <h6 id="userNotFoundMessage">Username does not exist. :(</h6>}
        </form>
    </div>
    )
};

export default LogInOverlay;
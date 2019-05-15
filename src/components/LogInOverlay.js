import React from 'react';

function LogInOverlay (props) {
    const { toggleLogInBox, toggleSignUpBox, logInUser, handleTyping, usernameInput } = props;
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
        </form>
    </div>
    )
};

export default LogInOverlay;
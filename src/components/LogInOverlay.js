import React from 'react';

function LogInOverlay ({ toggleLogInBox, toggleSignUpBox, logInUser, handleTyping, usernameInput, errorOnLogIn, handleClick }) {
    return (
    <div className="overlay">
        <form className="modal">
            <h3 className="pleaseLogInText">please log in →</h3>
            <input type="text" value={usernameInput} onClick={handleClick} onChange={handleTyping} id="usernameInput"/>
            <br/>
            <button type="submit" value="logIn" disabled={errorOnLogIn} onClick={logInUser} id="logInButton">Log-In</button>
            <button type="button" value="close" onClick={toggleLogInBox} id="closeButton">Close Window</button>
        </form>
    </div>
    )
};

export default LogInOverlay;
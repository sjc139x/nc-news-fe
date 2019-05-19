import React from 'react';

function LogInOverlay ({ toggleLogInBox, logInUser, handleTyping, usernameInput, errorOnRequest, handleClick }) {
    return (
    <div className="overlay">
        <form className="modal">
            <h3 className="pleaseLogInText">please log in →</h3>
            <input type="text" value={usernameInput} onClick={handleClick} onChange={handleTyping} id="usernameInput"/>
            <br/>
            <button type="submit" value="logIn" onClick={logInUser} disabled={errorOnRequest} id="logInButton">LOG IN</button>
            <button type="button" value="close" onClick={toggleLogInBox} id="closeButton">CLOSE WINDOW</button>
        </form>
    </div>
    )
};

export default LogInOverlay;
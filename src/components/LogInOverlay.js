import React from 'react';

function LogInOverlay ({ toggleLogInBox, logInUser, handleTyping, usernameInput, errorOnRequest, handleClick }) {
    return (
    <div className="LogInOverlay-Overlay">
        <form className="LogInOverlay-Modal">
            <h3 className="LogInOverlay-HeaderText">please log in →</h3>
            <input type="text" value={usernameInput} onClick={handleClick} onChange={handleTyping} className="LogInOverlay-UsernameInput"/>
            <br/>
            <button type="submit" value="logIn" onClick={logInUser} disabled={errorOnRequest} className="LogInOverlay-LogInButton">LOG IN</button>
            <button type="button" value="close" onClick={toggleLogInBox} className="LogInOverlay-CloseWindowButton">CLOSE WINDOW</button>
        </form>
    </div>
    )
};

export default LogInOverlay;
import React from 'react';

function LogInOverlay () {
    return (
    <div className="overlay">
        <form className="modal">
            <h3>Please log-in...</h3>
            <input type="text" value="Username..." id="usernameInput"/>
            <br/>
            <input type="text" value="Password..." id="passwordInput"/>
            <br/>
            <button type="button" value="logIn">Log-In</button>
        </form>
    </div>
    )
};

export default LogInOverlay;
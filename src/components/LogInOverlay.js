import React from 'react';

function LogInOverlay () {
    return (
    <div className="overlay">
        <form className="modal">
            <h3>Please log-in...</h3>
            <label id="usernameLabel">Username:
                <input type="text" id="usernameInput"/>
            </label>
            <br/>
            <label id="passwordLabel">Password:
                <input type="password" id="passwordInput"/>
            </label>
        </form>
    </div>
    )
};

export default LogInOverlay;
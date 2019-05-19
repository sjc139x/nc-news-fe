import React from 'react';

function SignUpOverlay ({ toggleSignUpBox, signUpUser, handleTyping, usernameInput, errorOnRequest, handleClick }) {
    return (
        <div className="signup-overlay">
            <form className="signup-modal">
                <h3 className="pleaseSignUpText">please sign up →</h3>
                <input type="text" value={usernameInput} onChange={handleTyping} onClick={handleClick} />
                <br/>
                <button type="submit" value="signUp" id="signUpButton" onClick={signUpUser} disabled={errorOnRequest}>SIGN UP</button>
                <button type="button" value="close" onClick={toggleSignUpBox} id="closeButton">CLOSE WINDOW</button>
            </form>
        </div>
        )
};

export default SignUpOverlay;

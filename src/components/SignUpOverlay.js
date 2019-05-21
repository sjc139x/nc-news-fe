import React from 'react';

function SignUpOverlay ({ toggleSignUpBox, signUpUser, handleTyping, usernameInput, errorOnRequest, handleClick }) {
    return (
        <div className="SignUpOverlay-Overlay">
            <form className="SignUpOverlay-Modal">
                <h3 className="SignUpOverlay-HeaderText">please sign up →</h3>
                <input type="text" value={usernameInput} onChange={handleTyping} onClick={handleClick} />
                <br/>
                <button type="submit" value="signUp" className="SignUpOverlay-SignUpButton" onClick={signUpUser} disabled={errorOnRequest}>SIGN UP</button>
                <button type="button" value="close" onClick={toggleSignUpBox} className="SignUpOverlay-CloseWindowButton">CLOSE WINDOW</button>
            </form>
        </div>
        )
};

export default SignUpOverlay;

import React from 'react';
import { Link } from '@reach/router';

function LoggedIn (props) {
    const { userInfo, logOutUser } = props;
    return (
        <div id="loggedInInfoBox">
            <img src={userInfo.avatar_url} alt="avatar" className="loggedInUserImage"/>
            <p id="welcomeBackText">Welcome back, <Link to={`/profile/${userInfo.username}`}>{userInfo.username}</Link>!</p>
            <button type="button" onClick={logOutUser}id="signOutButton">LOG OUT</button>
        </div>
    )
};

export default LoggedIn;
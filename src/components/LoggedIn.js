import React from 'react';
import { Link } from '@reach/router';

function LoggedIn (props) {
    const { userInfo } = props;
    console.log(userInfo)
    return (
        <div id="loggedInInfoBox">
            <img src={userInfo.avatar_url} alt="avatar" className="loggedInUserImage"/>
            <p id="welcomeBackText">Welcome back, <Link to={`/profile/${userInfo.username}`}>{userInfo.username}</Link>!</p>
        </div>
    )
};

export default LoggedIn;
import React from 'react';
import { Link } from '@reach/router';

function LoggedInTile (props) {
    const { userInfo, logOutUser } = props;
    return (
        <div className="LoggedInTile-Container">
            <img src={userInfo.avatar_url} alt="avatar" className="LoggedInTile-AvatarImage"/>
            <p className="LoggedInTile-WelcomeBackText">Welcome back, <Link to={`/profile/${userInfo.username}`}>{userInfo.username}</Link>!</p>
            <button type="button" onClick={logOutUser} className="LoggedInTile-LogOutButton">LOG OUT</button>
        </div>
    )
};

export default LoggedInTile;
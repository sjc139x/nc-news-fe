import React from 'react';
import { Link } from '@reach/router';
import LoggedIn from './LoggedIn';

function Header ({ toggleLogInBox, toggleSignUpBox, loggedInUser, logOutUser }) {
    return (
        <div>
            <img src="https://i.ibb.co/r3dSYj6/Screen-Shot-2019-05-13-at-09-32-38.png" alt="logo" id="logo"/>
                {!loggedInUser && (
                    <div id="userAccountButtons">
                        <button type="button" onClick={toggleLogInBox}>LOG IN</button>
                        <br/>
                        <br/>
                        <button type="button" onClick={toggleSignUpBox}>SIGN UP</button>
                    </div>
                )}
                {loggedInUser && (
                    <div>
                        <LoggedIn userInfo={loggedInUser} logOutUser={logOutUser}/>
                    </div>
                )}
            <ul className="navBar">
                <li id="navBarListItem" key="home"><Link to="/">Home</Link></li>
                <li id="navBarListItem" key="recipes"><Link to="/recipes">Recipes</Link></li>
                <li id="navBarListItem" key="reviews"><Link to="/reviews">Reviews</Link></li>
                <li id="navBarListItem" key="top5"><Link to="/top5">Top 5</Link></li>
                <li id="navBarListItem" key="chef"><Link to="/chef">Chef's Table</Link></li>
                <li id="navBarListItem" key="healthy"><Link to="/healthy">Healthy Living</Link></li>
                <li id="navBarListItem" key="treats"><Link to="/treats">Treat Yo' Self</Link></li>
            </ul>
        </div>
    )
};



export default Header;
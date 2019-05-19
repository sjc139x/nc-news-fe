import React from 'react';
import { Link } from '@reach/router';
import LoggedIn from './LoggedInTile';

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
                <li id="navBarListItem" key="home"><Link to="/">home</Link></li>
                <li id="navBarListItem" key="recipes"><Link to="/recipes">recipes</Link></li>
                <li id="navBarListItem" key="reviews"><Link to="/reviews">reviews</Link></li>
                <li id="navBarListItem" key="top5"><Link to="/top5">top 5</Link></li>
                <li id="navBarListItem" key="chef"><Link to="/chef">chef's table</Link></li>
                <li id="navBarListItem" key="healthy"><Link to="/healthy">healthy living</Link></li>
                <li id="navBarListItem" key="treats"><Link to="/treats">treat yo' self</Link></li>
                {loggedInUser && <li id="navBarListItem" key="newArticle"><Link to="new-article">post new article</Link></li>}
            </ul>
        </div>
    )
};



export default Header;
import React from "react";
import { Link } from "@reach/router";
import LoggedInTile from "./LoggedInTile";

function Header({ toggleLogInBox, toggleSignUpBox, loggedInUser, logOutUser }) {
  return (
    <div>
      <Link to="/">
        <img
          src="https://i.ibb.co/r3dSYj6/Screen-Shot-2019-05-13-at-09-32-38.png"
          alt="logo"
          className="Header-Logo"
        />
      </Link>
      {!loggedInUser && (
        <div className="Header-UserAccountButtons">
          <button type="button" onClick={toggleLogInBox}>
            LOG IN
          </button>
          <br />
          <button type="button" onClick={toggleSignUpBox}>
            SIGN UP
          </button>
        </div>
      )}
      {loggedInUser && (
        <div>
          <LoggedInTile userInfo={loggedInUser} logOutUser={logOutUser} />
        </div>
      )}
      <ul className="Header-NavBar">
        <li className="Header-NavBarListItems" key="home">
          <Link to="/">home</Link>
        </li>
        <li className="Header-NavBarListItems" key="recipes">
          <Link to="/recipes">recipes</Link>
        </li>
        <li className="Header-NavBarListItems" key="reviews">
          <Link to="/reviews">reviews</Link>
        </li>
        <li className="Header-NavBarListItems" key="top5">
          <Link to="/top5">top 5</Link>
        </li>
        <li className="Header-NavBarListItems" key="chef">
          <Link to="/chef">chef's table</Link>
        </li>
        <li className="Header-NavBarListItems" key="healthy">
          <Link to="/healthy">healthy living</Link>
        </li>
        <li className="Header-NavBarListItems" key="treats">
          <Link to="/treats">treat yo' self</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;

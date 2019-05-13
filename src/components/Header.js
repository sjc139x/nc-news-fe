import React from 'react';

function Header () {
    return (
        <div>
            <img src="https://i.ibb.co/r3dSYj6/Screen-Shot-2019-05-13-at-09-32-38.png" alt="logo" id="logo"/>
            <form>
                <button type="button">LOG-IN</button>
                <button type="button">SIGN-UP</button>
            </form>
            <ul className="navBar">
                <li>Recipes</li>
                <li>Reviews</li>
                <li>Top 5</li>
                <li>Chef's Table</li>
                <li>Healthy Living</li>
                <li>Treat Yo' Self</li>
                <li>Search...</li>
            </ul>
        </div>
    )
};

export default Header;
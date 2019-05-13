import React from 'react';
import { Link } from '@reach/router';

function Header () {
    return (
        <div>
            <img src="https://i.ibb.co/r3dSYj6/Screen-Shot-2019-05-13-at-09-32-38.png" alt="logo" id="logo"/>
            <form>
                <button type="button">LOG-IN</button>
                <button type="button">SIGN-UP</button>
            </form>
            <ul className="navBar">
                <li id="navBarListItem" key="home"><Link to="/">Home</Link></li>
                <li id="navBarListItem" key="recipes"><Link to="/topics/recipes">Recipes</Link></li>
                <li id="navBarListItem" key="reviews"><Link to="/topics/reviews">Reviews</Link></li>
                <li id="navBarListItem" key="top5"><Link to="/topics/top5">Top 5</Link></li>
                <li id="navBarListItem" key="chef"><Link to="/topics/chef">Chef's Table</Link></li>
                <li id="navBarListItem" key="healthy"><Link to="/topics/healthy">Healthy Living</Link></li>
                <li id="navBarListItem" key="treats"><Link to="/topics/treats">Treat Yo' Self</Link></li>
            </ul>
        </div>
    )
};

export default Header;
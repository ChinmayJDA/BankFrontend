import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <>
            <nav>
                <div class="row">
                {/* <img class="logo" src={logo} alt="logo-img" /> */}
                <ul class="main-nav">
                    <li> <a href="#">Home</a></li>
                    <li> <Link to="/login">Log in</Link></li>
                    <li> <Link to="/register">Register</Link></li>
                    <li> <a href="#">Contact Us</a></li>
                    <li> <a href="#">Customer Feedback</a></li>
                </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar;
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
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/login">Log in</Link></li>
                    <li> <Link to="/register">Register</Link></li>
                    <li> <Link to="/">Contact Us</Link></li>
                    <li> <Link to="/">Customer Feedback</Link></li>
                </ul>
                </div>
            </nav>
        </>
    )
}
export default Navbar;
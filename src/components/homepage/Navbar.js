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
        <ul class="main-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Log in</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><a href="#section-testi">Customer Feedback</a></li>
            <li><a href="#summaryy">About Us</a></li>
        </ul>
    </div>
</nav>

          
        </>
    )
}
export default Navbar;
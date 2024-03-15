// dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/css/dashboard.css';

const Dashboard = () => {
  return (
    <nav>
      <div className="row">
        {/* <img className="logo" src={logo} alt="logo-img" /> */}
        <ul className="main-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/account/home">Account Details</Link></li>
          <li><Link to="/transaction">Transactions</Link></li>
          <li><Link to="/transaction/history">History</Link></li>
          <li><Link to="/user">User</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Dashboard;


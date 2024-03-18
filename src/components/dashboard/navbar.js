import React from 'react';
import { Link } from 'react-router-dom';
// import '../../assets/css/navbar.css'; 


const Navbar = (props) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    props.showAlert("Logged out", "Success");
  };

  return (
    <nav className = 'navbar'>
      <div className="row">
        {/* <img className="logo" src={logo} alt="logo-img" /> */}
        <ul className="main-nav">
          <li><Link to="/dashboard">Home</Link></li>
          <li><Link to="/dashboard/account">Account Details</Link></li>
          <li><Link to="/dashboard/transaction">Transactions</Link></li>
          <li><Link to="/dashboard/transaction/history">History</Link></li>
          <li><Link to="/dashboard/user">User</Link></li>
          <li><Link to="/" onClick={handleLogout}>Log Out</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

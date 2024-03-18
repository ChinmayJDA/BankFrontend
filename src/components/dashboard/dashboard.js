// dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/dashboard.css';
import Carousel from './Carousel.js';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar.js'
const Dashboard = (props) => {
  // let history=useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    props.showAlert("Logged out", "Success");
  };

  return (
    <div className="dashboard">
      <Navbar showAlert={props.showAlert} />
      <Carousel />
      {/* Your dashboard content goes here */}
    </div>
  );
};

export default Dashboard;


import './App.css';
import {React, useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

// import Home from './components/homepage/Home';
// import Navbar from './components/homepage/Navbar';
import Login from './components/homepage/login.js';
import Register from './components/homepage/register.js';

import MainHomepage from './components/homepage/main-homepage.js';
import Home from './components/accountpage/home.js';
import CreatePin from './components/accountpage/createPin.js';
import UpdatePin from './components/accountpage/updatePin.js';

import Transaction from './components/Transaction/Transaction.js';
import Deposit from './components/Transaction/Deposit.js';
import Withdraw from './components/Transaction/Withdraw.js';
import SendMoney from './components/Transaction/SendMoney.js';

import User from './components/UserPage/user.js';
import UpdateUser from './components/UserPage/updateUser.js';

import History from './components/history/history.js';

import Dashboard from './components/dashboard/dashboard.js';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<MainHomepage/>} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/register" element = {<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/account/*" element={<PrivateRoutes />} />
          <Route path="/transaction" element={<Transaction/>} />
          <Route path="/transaction/deposit" element={<Deposit/>} />
          <Route path="/transaction/withdraw" element={<Withdraw/>} />
          <Route path="transaction/send-money" element={<SendMoney/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/user/update" element={<UpdateUser/>}/>
          <Route path="/transaction/history" element = {<History/>} />
        </Routes>
      </Router>
    </div>
  );
}


// PrivateRoutes component to handle the authenticated routes
function PrivateRoutes() {
  // const { adminId } = useContext(AdminIdContext);

  // if (!adminId) {
  //   return <Navigate to="/" />;
  // } 

  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="create-pin" element={<CreatePin />} />
      <Route path="update-pin" element={<UpdatePin />} />
      
    </Routes>
  );
}
export default App;

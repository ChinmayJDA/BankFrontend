import './App.css';
import {React, useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';

import Alert from './components/Alert/alert.js';

import Login from './components/homepage/login.js';
import Register from './components/homepage/register.js';

import Account from './components/accountpage/home.js'
import MainHomepage from './components/homepage/main-homepage.js';
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
  const [alert, setalert] = useState(null)
  const showAlert=(message, type)=>{
    setalert({
      message: message,
      type: type
    })
    setTimeout(()=>{
      setalert(null);
    },1500)
  }
  
  return (
    <div className="App">
      <Router>
        <Alert alert={alert} setalert={setalert}/>
        <Routes>
          <Route path = "/*" element = {<PublicRoutes alert={alert} showAlert={showAlert}/>} />
          <Route path = "/dashboard/*" element= {<PrivateRoutes alert={alert} showAlert={showAlert}/>} />
        </Routes>
      </Router>
    </div>
  );
}


// PrivateRoutes component to handle the authenticated routes
function PrivateRoutes(props) {

  if(!localStorage.getItem('token')){
    return <Navigate to = "/login"/>
  }
  return (
    <>
    {/* <Alert alert={alert}/> */}
    <Routes>
      <Route path="" element={<Dashboard showAlert={props.showAlert}/>} />
      <Route path="account" element={<Account showAlert={props.showAlert}/>} />
      <Route path="account/create-pin" element={<CreatePin showAlert={props.showAlert}/>} />
      <Route path="account/update-pin" element={<UpdatePin showAlert={props.showAlert}/>} />
      <Route path="transaction" element={<Transaction showAlert={props.showAlert}/>} />
      <Route path="transaction/deposit" element={<Deposit showAlert={props.showAlert}/>} />
      <Route path="transaction/withdraw" element={<Withdraw showAlert={props.showAlert}/>} />
      <Route path="transaction/send-money" element={<SendMoney showAlert={props.showAlert}/>}/>
      <Route path="user" element={<User showAlert={props.showAlert}/>}/>
      <Route path="user/update" element={<UpdateUser showAlert={props.showAlert}/>}/>
      <Route path="transaction/history" element = {<History showAlert={props.showAlert}/>} />
    </Routes>
    </>
  );
}
//can add if user has wrong token
function PublicRoutes(props) {
  
  if(localStorage.getItem('token')){
    return <Navigate to = "/dashboard"/>
  }
  return (
    <>
      {/* <Alert alert={alert}/> */}
      <Routes>
        <Route path = "" element = {<MainHomepage showAlert={props.showAlert}/>} />
            <Route path = "login" element = {<Login showAlert={props.showAlert}/>} />
            <Route path = "register" element = {<Register showAlert={props.showAlert}/>} />
      </Routes>
    </>
  );
}
export default App;

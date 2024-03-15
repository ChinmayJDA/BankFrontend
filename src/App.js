import './App.css';
import {React, useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './components/homepage/Home';
import Navbar from './components/homepage/Navbar';

import Transaction from './components/Transaction/Transaction';

import MainHomepage from './components/homepage/main-homepage.js';
import AccountHome from './components/accountpage/home.js';
import CreatePin from './components/accountpage/createPin.js';
import UpdatePin from './components/accountpage/updatePin.js';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<MainHomepage/>} />
          <Route path="/account/*" element={<PrivateRoutes />} />
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
      <Route path="home" element={<AccountHome />} />
      <Route path="create-pin" element={<CreatePin />} />
      <Route path="update-pin" element={<UpdatePin />} />
    </Routes>
  );
}
export default App;

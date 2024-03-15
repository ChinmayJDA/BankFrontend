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

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar/>
        <Home/> */}
        <Routes>

          {/* <Route path="/login" element={<Login showAlert={showAlert}/>} />
          <Route path="/register" element={<Register />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

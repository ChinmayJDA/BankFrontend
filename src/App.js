import './App.css';
import {React, useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import MainHomepage from './components/homepage/main-homepage.js';
function App() {
  return (
    <div className="App">
      <Router>
        <MainHomepage/>
  
        <Routes>
          {/* <Route path="/login" element={<Login showAlert={showAlert}/>} />
          <Route path="/register" element={<Register />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import {React, useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import MainHomepage from './components/homepage/main-homepage.js';
import Home from './components/accountpage/home.js';
function App() {
  return (
    <div className="App">
      <Router>
        {/* <MainHomepage/> */}
        <Routes>
          <Route path = "/" element = {<MainHomepage/>} />
          <Route path="/dashboard/*" element={<PrivateRoutes />} />
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
      <Route path="home" element={<Home />} />
      {/* <Route path="assign-duty" element={<AssignDuty />} />
      <Route path="create-session" element={<CreateSession />} />
      <Route path="sos" element={<SOS />} />
      <Route path="onboarding" element={<Onboarding />} />
      <Route path="post-work-notifications" element={<WorkNotifs />} />
      <Route path="supervision" element={<Supervision />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="delete-users" element={<DeleteUser />} />
      <Route path="delete-sessions" element={<DeleteSession />} />
      <Route path="admin-registration" element={<AdminReg />} /> */}
    </Routes>
  );
}
export default App;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../assets/css/pin.css'
// import img2 from '../../../assets/Images/img2.jpg'
import '../../assets/css/login.css'
import Navbar from './Navbar';

function Login(props) {
  let history = useNavigate();
  const [credentials, setcredentials] = useState({ accountNumber: "", password: "" });

  const handleSubmit = async(e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/users/login', credentials)
      .then(response => {
        localStorage.setItem('token',response.data.token);
        history('/dashboard');
        props.showAlert("Logged in successfully", "Success");
      }) 
      .catch(error => {
        props.showAlert(`${error.response.data}`, "Danger");
        console.error(error.response.data);
      });
  };

  const onChange = (e) => {
    setcredentials({
      ...credentials, [e.target.id]: e.target.value
    })
  }
  return (
    <>
      <Navbar />
      <div className='home-box-container'>
        <div className='home-box-pin'>
          <h2>Log In </h2>
          <form onSubmit={handleSubmit}>
            {/* Input field for account number */}
            <div className='form-group'>
              <label htmlFor='accountNumber'>Account Number:</label>
              <input
                type='text'
                id='accountNumber'
                value={credentials.accountNumber}
                onChange={onChange}
                required
              />
            </div>

            {/* Input field for password */}
            <div className='form-group'>
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                id='password'
                value={credentials.password}
                onChange={onChange}
                required
              />
            </div>
            {/* Submit button */}
            <button type='submit'> LogIn</button>
          </form>
        </div>
      </div>
    </>


  );
}

export default Login;
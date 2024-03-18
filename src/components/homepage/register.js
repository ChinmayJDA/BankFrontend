import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../assets/css/pin.css';
import '../../assets/css/login.css';
import Navbar from './Navbar';

function Register(props) {
  let history = useNavigate();
  const [credentials, setcredentials] =useState({name: "", password : "", email: "", phone_number: "", address:""});
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8082/User/api/users/register', credentials)
      .then(response => {
        props.showAlert("User Registered!","Success");
        history('/');
      })
      .catch(error => {
        props.showAlert(`${error.response.data}`,"Danger");
        
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
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            {/* Input field for name */}
            <div className='form-group'>
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                id='name'
                value={credentials.name}
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

            {/* Input field for email */}
            <div className='form-group'>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                id='email'
                value={credentials.email}
                onChange={onChange}
                required
              />
            </div>

            {/* Input field for phone number */}
            <div className='form-group'>
              <label htmlFor='phoneNo'>Phone Number:</label>
              <input
                type='text'
                id='phone_number'
                value={credentials.phone_number}
                onChange={onChange}
                required
              />
            </div>

            {/* Input field for address*/}
            <div className='form-group'>
              <label htmlFor='phoneNo'>Address</label>
              <input
                type='text'
                id='address'
                value={credentials.address}
                onChange={onChange}
                required
              />
            </div>

            {/* Submit button */}
            <button type='submit'>Register</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;

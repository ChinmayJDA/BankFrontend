import React, { useState } from 'react';
import '../../assets/css/pin.css';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Dashboard from '../dashboard/dashboard';
import Navbar from '../dashboard/navbar';
const UpdatePin = (props) => {
  let history =useNavigate();
  const [updatePin, setupdatePin] =useState({oldPin:"", newPin:"", password:""})

  // Event handler for form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    const config = {
      headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    };
    axios.post('http://localhost:8082/Transaction/api/account/pin/update', updatePin , config)
      .then(response => {
        // console.log(response.data);
        props.showAlert(`${response.data.msg}`,"Success")
        history('/dashboard/account');
      })
      .catch(error => {
        props.showAlert(`${error.response.data}`,"Danger")
        console.error(error.response.data);
      });
  };

  const onChange = (e) => {
    setupdatePin({
      ...updatePin, [e.target.id]: e.target.value
    })
  }

  return (
    <>
    <Navbar/>
    <div className='home-box-container'>
      <div className='home-box-pin'>
        <h2>Update Pin</h2>
        <form onSubmit={handleSubmit}>
          {/* Input field for old PIN */}
          <div className='form-group'>
            <label htmlFor='oldPin'>Old PIN:</label>
            <input 
              type='password' 
              id='oldPin' 
              value={setupdatePin.oldPin} 
              onChange={onChange} 
              required 
            />
          </div>
          {/* Input field for new PIN */}
          <div className='form-group'>
            <label htmlFor='newPin'>New PIN:</label>
            <input 
              type='password' 
              id='newPin' 
              value={setupdatePin.newPin} 
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
              value={setupdatePin.password} 
              onChange={onChange} 
              required 
            />
          </div>
          {/* Submit button */}
          <button type='submit'>Update Pin</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default UpdatePin;

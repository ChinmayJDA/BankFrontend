import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import '../../assets/css/pin.css'
import Dashboard from '../dashboard/dashboard';
const CreatePin = (props) => {
  let history = useNavigate();
  const [requestPin, setrequestPin] = useState({ pin: "", password: ""});

  // Event handler for form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    const config = {
      headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    };
    axios.post('http://localhost:8080/api/account/pin/create', requestPin , config)
      .then(response => {
        console.log(response.data);
        props.showAlert("Pin Generated Successfully","Success");
        history('/dashboard/account');
      })
      .catch(error => {
        props.showAlert(`${error.response.data}`,"Danger");
        console.error(error.response.data);
      });
    
  };
  const onChange = (e) => {
    setrequestPin({
      ...requestPin, [e.target.id]: e.target.value
    })
  }


  return (
    <>
      <Dashboard/>
      <div className='home-box-container'>
      <div className='home-box-pin'>
        <h2>Generate Pin</h2>
        <form onSubmit={handleSubmit}>
          {/* Input field for pin */}
          <div className='form-group'>
            <label htmlFor='pin'>PIN:</label>
            <input 
              type='text' 
              id='pin' 
              value={requestPin.pin} 
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
              value={requestPin.password} 
              onChange={onChange} 
              required 
            />
          </div>
          {/* Submit button */}
          <button type='submit'>Generate Pin</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default CreatePin;

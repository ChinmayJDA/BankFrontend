import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import '../../assets/css/updateuser.css';
import Dashboard from '../dashboard/dashboard';

import Navbar from '../dashboard/navbar';

const UpdateUser = (props) => {
  let history = useNavigate();
  const [credentials, setcredentials] = useState({ name: "", email: "", phone_number: "", address: "" });
  const handleSubmit = (e) => {
    const config = {
      headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    };
    e.preventDefault();
    axios.put('http://localhost:8080/api/users/update', credentials, config)
      .then(response => {
        props.showAlert("Updated Successfully","Success")
        history('/dashboard/user');
      })
      .catch(error => {
        console.log(error);
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
          <h2>Update User </h2>
          <form onSubmit={handleSubmit}>
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
            {/* Input field for address */}
            <div className='form-group'>
              <label htmlFor='address'>Address:</label>
              <input
                type='text'
                id='address'
                value={credentials.address}
                onChange={onChange}
                required
              />
            </div>
            {/* Submit button */}
            <div className='sub-btn'>
              <button type='submit'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;

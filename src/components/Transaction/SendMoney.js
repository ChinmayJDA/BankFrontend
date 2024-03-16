import React, { useState } from 'react';
import '../../assets/css/pin.css';
import Dashboard from '../dashboard/dashboard';
import axios from 'axios';
import { useNavigate } from 'react-router';

const SendMoney = (props) => {
  let history = useNavigate();
  const [fundTransferRequest, setfundTransferRequest] =useState({targetAccountNumber: "", pin:"", amount: ""});

  // Event handler for form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    const config = {
      headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    };
    axios.post('http://localhost:8080/api/account/fund-transfer', fundTransferRequest , config)
      .then(response => {
        console.log(response.data);
        props.showAlert("Amount transferred successfully","Success");
        history('/dashboard/transaction');
      }) 
      .catch(error => {
        props.showAlert(`${error.response.data}`,"Danger");
        console.error(error.response.data);
      });
  };

  const onChange = (e) => {
    setfundTransferRequest({
      ...fundTransferRequest, [e.target.id]: e.target.value
    })
  }


  return (
    <>
      <Dashboard/>
      <div className='home-box-container'>
        <div className='home-box-pin'>
          <h2>Money transfer</h2>
          <form onSubmit={handleSubmit}>
            {/* Input field for PIN */}
            <div className='form-group'>
              <label htmlFor='targetAccountNumber'>Account No. Of Receiver:</label>
              <input
                type='text'
                id='targetAccountNumber'
                value={fundTransferRequest.targetAccountNumber}
                onChange={onChange}
                required
              />
            </div>
            {/* Input field for PIN */}
            <div className='form-group'>
              <label htmlFor='pin'>PIN:</label>
              <input
                type='password'
                id='pin'
                value={fundTransferRequest.pin}
                onChange={onChange}
                required
              />
            </div>
            {/* Input field for amount */}
            <div className='form-group'>
              <label htmlFor='amount'>Amount:</label>
              <input
                type='number'
                id='amount'
                value={fundTransferRequest.amount}
                onChange={onChange}
                required
              />
            </div>
            {/* Submit button */}
            <button type='submit'>Send Money</button>
          </form>
        </div>
      </div>
    </>

  );
};

export default SendMoney;

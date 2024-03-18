import React, { useState } from 'react';
import '../../assets/css/pin.css';
import Dashboard from '../dashboard/dashboard';
import Navbar from '../dashboard/navbar';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Deposit = (props) => {
  let history = useNavigate();

  const [amountRequest, setamountRequest] = useState({pin: "", amount: ""});

  const handleSubmit = async(e) => {
    e.preventDefault();
    const config = {
      headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    };
    axios.post('http://localhost:8080/api/account/deposit', amountRequest , config)
      .then(response => {
        // console.log(response.data);
        props.showAlert("Amount deposited Successfully","Success")
        history('/dashboard/transaction');
      }) 
      .catch(error => {
        props.showAlert(`${error.response.data}`,"Danger")
        //alert danger
        console.error(error.response.data);
      });
  };

  const onChange = (e) => {
    setamountRequest({
      ...amountRequest, [e.target.id]: e.target.value
    })
  }
  
  return (
    <>
    <Navbar/>
    <div className='home-box-container'>
      <div className='home-box-pin'>
        <h2>Deposit Money</h2>
        <form onSubmit={handleSubmit}>
          {/* Input field for PIN */}
          <div className='form-group'>
            <label htmlFor='pin'>PIN:</label>
            <input 
              type='password' 
              id='pin' 
              value={amountRequest.pin} 
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
              value={amountRequest.amount} 
              onChange={onChange} 
              required 
            />
          </div>
          {/* Submit button */}
          <button type='submit'>Deposit Money</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Deposit;

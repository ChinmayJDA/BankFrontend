import React, { useState } from 'react';
import '../../assets/css/pin.css';

const SendMoney = () => {
  // State variables for form fields
  const [targetAccountNumber, settargerAccountNumber] = useState('');
  const [pin, setPin] = useState('');
  const [amount, setAmount] = useState('');

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission, e.g., make an API call to deposit money
    console.log('Form submitted with data:', { targetAccountNumber, pin, amount });
    // Reset form fields after submission
    settargerAccountNumber('');
    setPin('');
    setAmount('');
  };

  return (
    <div className='home-box-container'>
      <div className='home-box-pin'>
        <h2>Money transfer</h2>
        <form onSubmit={handleSubmit}>
          {/* Input field for PIN */}
          <div className='form-group'>
          <label htmlFor='AccountNo.'>Account No. Of Receiver:</label>
          <input 
            type='text' 
            id='accountNo' 
            value={targetAccountNumber} 
            onChange={(e) => settargerAccountNumber(e.target.value)} 
            required 
            />
          </div>
          {/* Input field for PIN */}
          <div className='form-group'>
            <label htmlFor='pin'>PIN:</label>
            <input 
              type='password' 
              id='pin' 
              value={pin} 
              onChange={(e) => setPin(e.target.value)} 
              required 
            />
          </div>
          {/* Input field for amount */}
          <div className='form-group'>
            <label htmlFor='amount'>Amount:</label>
            <input 
              type='number' 
              id='amount' 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              required 
            />
          </div>
          {/* Submit button */}
          <button type='submit'>Deposit Money</button>
        </form>
      </div>
    </div>
  );
};

export default SendMoney;

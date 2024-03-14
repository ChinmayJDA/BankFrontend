import React, { useState } from 'react';
import '../../assets/css/pin.css';

const UpdatePin = () => {
  // State variables for form fields
  const [accountNumber, setAccountNumber] = useState('');
  const [oldPin, setOldPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [password, setPassword] = useState('');

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission, e.g., make an API call to update PIN
    console.log('Form submitted with data:', { accountNumber, oldPin, newPin, password });
    // Reset form fields after submission
    setAccountNumber('');
    setOldPin('');
    setNewPin('');
    setPassword('');
  };

  return (
    <div className='home-box-container'>
      <div className='home-box-pin'>
        <h2>Update Pin</h2>
        <form onSubmit={handleSubmit}>
          {/* Input field for account number */}
          <div className='form-group'>
            <label htmlFor='accountNumber'>Account Number:</label>
            <input 
              type='text' 
              id='accountNumber' 
              value={accountNumber} 
              onChange={(e) => setAccountNumber(e.target.value)} 
              required 
            />
          </div>
          {/* Input field for old PIN */}
          <div className='form-group'>
            <label htmlFor='oldPin'>Old PIN:</label>
            <input 
              type='password' 
              id='oldPin' 
              value={oldPin} 
              onChange={(e) => setOldPin(e.target.value)} 
              required 
            />
          </div>
          {/* Input field for new PIN */}
          <div className='form-group'>
            <label htmlFor='newPin'>New PIN:</label>
            <input 
              type='password' 
              id='newPin' 
              value={newPin} 
              onChange={(e) => setNewPin(e.target.value)} 
              required 
            />
          </div>
          {/* Input field for password */}
          <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input 
              type='password' 
              id='password' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          {/* Submit button */}
          <button type='submit'>Update Pin</button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePin;

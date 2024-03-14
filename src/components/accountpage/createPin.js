import React, { useState } from 'react';
import '../../assets/css/pin.css'
const CreatePin = () => {
  // State variables for form fields
  const [accountNumber, setAccountNumber] = useState('');
  const [pin, setPin] = useState('');
  const [password, setPassword] = useState('');

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission, e.g., make an API call to generate pin
    console.log('Form submitted with data:', { accountNumber, pin, password });
    // Reset form fields after submission
    setAccountNumber('');
    setPin('');
    setPassword('');
  };

  return (
    <div className='home-box-container'>
      <div className='home-box-pin'>
        <h2>Generate Pin</h2>
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
          {/* Input field for pin */}
          <div className='form-group'>
            <label htmlFor='pin'>PIN:</label>
            <input 
              type='text' 
              id='pin' 
              value={pin} 
              onChange={(e) => setPin(e.target.value)} 
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
          <button type='submit'>Generate Pin</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePin;

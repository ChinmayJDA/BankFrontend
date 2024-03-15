import React, { useState, useEffect } from 'react';
import '../../assets/css/pin.css'
// import img2 from '../../../assets/Images/img2.jpg'
import '../../assets/css/login.css'
function Login() {
    const [accountNumber, setAccountNumber] = useState('');
  const [password, setPassword] = useState('');

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission, e.g., make an API call to generate pin
    console.log('Form submitted with data:', { accountNumber, password });
    // Reset form fields after submission
    setAccountNumber('');
    setPassword('');
  };

  return (
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
              value={accountNumber} 
              onChange={(e) => setAccountNumber(e.target.value)} 
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
          <button type='submit'> LogIn</button>
        </form>
      </div>
    </div>
   
    );
}
 
export default Login;
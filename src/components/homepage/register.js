import React, { useState } from 'react';
import '../../assets/css/pin.css';
import '../../assets/css/login.css';

function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission, e.g., make an API call to register user
    console.log('Form submitted with data:', { name, password, email, phoneNo });
    // Reset form fields after submission
    setName('');
    setPassword('');
    setEmail('');
    setPhoneNo('');
  };

  return (
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
              value={name} 
              onChange={(e) => setName(e.target.value)} 
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

          {/* Input field for email */}
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input 
              type='email' 
              id='email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          {/* Input field for phone number */}
          <div className='form-group'>
            <label htmlFor='phoneNo'>Phone Number:</label>
            <input 
              type='text' 
              id='phoneNo' 
              value={phoneNo} 
              onChange={(e) => setPhoneNo(e.target.value)} 
              required 
            />
          </div>

          {/* Submit button */}
          <button type='submit'>Register</button>
        </form>
      </div>
    </div>
  );
}
 
export default Register;

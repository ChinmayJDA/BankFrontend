import React, { useState } from 'react';
import '../../assets/css/updateuser.css';


const UpdateUser = () => {
  // State variables for form fields
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [address, setAddress] = useState('');

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission, e.g., make an API call to update user details
    console.log('Form submitted with data:', { email, name, phoneNo, address });
    // Reset form fields after submission
    setEmail('');
    setName('');
    setPhoneNo('');
    setAddress('');
  };

  return (
    <div className='home-box-container'>
        <div className = 'home-box-pin'>
      <h2>Update User </h2>
      <form onSubmit={handleSubmit}>
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
        {/* Input field for address */}
        <div className='form-group'>
          <label htmlFor='address'>Address:</label>
          <input
            type='text'
            id='address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        {/* Submit button */}
        <button type='submit'>Update</button>
      </form>
    </div>
    </div>
  );
};

export default UpdateUser;

import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/home.css';

const User = () => {
  // Sample user details
  const userDetails = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City, Country',
    // Add more user details as needed
  };

  return (
    <div className='home-outer home-overflow'>
      <div className='main'>
        <div className='main-in'>
          <div className='home-box-outer'>
            <div className='center'>
              {/* Box for User Details */}
              <div className='home-box home-box-account'>
                <div className='box-content'>
                  <div className='box-text'>
                    <p>Name: {userDetails.name}</p>
                    <p>Email: {userDetails.email}</p>
                    <p>Phone: {userDetails.phone}</p>
                    <p>Address: {userDetails.address}</p>
                    {/* Add more user details as needed */}
                  </div>
                </div>
              </div>
            </div>
            {/* Box for Update Button */}
            <div className='center'>
                <div className='home-box'>
                    <Link to='/user/update' style={{ textDecoration: 'none', color: 'inherit' }}>
                        <button className='custom-button' style={{ border: 'none' }}>Update</button>
                    </Link>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

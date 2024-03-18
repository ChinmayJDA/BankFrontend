import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Dashboard from '../dashboard/dashboard';
import Navbar from '../dashboard/navbar';
import axios from 'axios';
import '../../assets/css/home.css';
import { whileStatement } from '@babel/types';

const User = () => {
  const [userDetails,setuserDetails] = useState({name: "", email:"",address:"", phone_number : ""});

  useEffect(()=>{
    const fetchUserDetails= async()=>{
      const config = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      };
      axios.get('http://localhost:8080/api/home/user', config)
      .then(response => {
        setuserDetails(response.data)
      })
      .catch(error => {
        //alert danger
        console.error(error);
      });
    }
    fetchUserDetails();
  },[])

  return (
    <div>
      <Navbar />
    
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
                    <p>Phone: {userDetails.phone_number}</p>
                    <p>Address: {userDetails.address}</p>
                    {/* Add more user details as needed */}
                  </div>
                </div>
              </div>
            </div>
            {/* Box for Update Button */}
            <div className='center'>
                {/* <div className='home-box'> */}
                    <Link to='/dashboard/user/update' style={{ textDecoration: 'none', color: 'inherit' }}>
                        
                        <button type='submit' style={{ backgroundColor: 'skyblue' }}>Update</button>

                    </Link>
                 {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default User;

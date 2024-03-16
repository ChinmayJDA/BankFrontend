import React from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import '../../assets/css/home.css';
import { useState, useEffect } from 'react';
import Dashboard from '../dashboard/dashboard';

import CheckPin from '../../assets/Images/accountImages/CheckPin.webp'; 
import CreatePin from '../../assets/Images/accountImages/CreatePin.png';
import UpdatePin from '../../assets/Images/accountImages/UpdatePin.png'; 

const Account = (props) => {
  const [accountDetails,setaccountDetails] = useState({accountNumber: "", balance: "", account_type:"",branch:"", ifsc_code : ""});
  useEffect(()=>{
    const fetchAccountDetails= async()=>{
      const config = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      };
      axios.get('http://localhost:8080/api/home/account', config)
      .then(response => {
        setaccountDetails(response.data)
      })
      .catch(error => {
        console.error(error);
      });
    }
    fetchAccountDetails();
  },[])


  const checkPin = async () => {
    const config = {
      headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    };
    axios.post('http://localhost:8080/api/account/pin/check',{}, config)
    .then(response => {
      console.log(response.data.hasPIN )
      if(response.data.hasPIN){
        props.showAlert(`${response.data.msg}`,"Success")
      }else{
        props.showAlert(`${response.data.msg}`,"Danger")
      }
    })
    .catch(error => {
      // props.showAlert(`${error}`,"Danger");
      console.error(error);
    });
  };
  

  return (
    <div>
      <Dashboard />
    <div className='home-outer home-overflow'>
      <div className='main'>
        <div className='main-in'>
          <div className='home-box-outer'>
            <div className='center'>
              {/* Box for Account Details */}
              <div className='home-box home-box-account'>
                <div className='box-content'>
                  <div className='box-text'>
                    <p>Account No: {accountDetails.accountNumber}</p>
                    <p>IFSC Code: {accountDetails.ifsc_code}</p>
                    <p>Account Type: {accountDetails.account_type}</p>
                    <p>Balance: {accountDetails.balance}</p>
                    <p>Branch: {accountDetails.branch}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Boxes for Check Pin, Create Pin, and Update Pin */}
            <div className='center'>
              <div className='home-box' onClick={checkPin} style={{ cursor: 'pointer' }}>
                <div className='box-content'>
                  <img src={CheckPin} alt='Check Pin' className='box-inner-img' />
                  <div className='box-text'>Check Pin</div>
                </div>
              </div>
              <div className='home-box'>
                <Link to='/dashboard/account/create-pin' style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className='box-content'>
                    <img src={CreatePin} alt='Create Pin' className='box-inner-img' />
                    <div className='box-text'>Create Pin</div>
                  </div>
                </Link>
              </div>
              <div className='home-box'>
                <Link to='/dashboard/account/update-pin' style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className='box-content'>
                    <img src={UpdatePin} alt='Update Pin' className='box-inner-img' />
                    <div className='box-text'>Update Pin</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Account;

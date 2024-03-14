import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/home.css';
import AccountDetails from '../../assets/Images/accountImages/AccountDetails.webp';
import CheckPin from '../../assets/Images/accountImages/CheckPin.webp'; 
import CreatePin from '../../assets/Images/accountImages/CreatePin.png';
import UpdatePin from '../../assets/Images/accountImages/UpdatePin.png'; 

const Home = () => {
  // Assuming these are the account details
  const accountDetails = {
    accountNo: '1234567890',
    ifscCode: 'ABCD0123456',
    accountType: 'Savings',
    balance: '$5000',
    branch: 'Main Branch',
  };

  return (
    <div className='home-outer home-overflow'>
      <div className='main'>
        <div className='main-in'>
          <div className='home-box-outer'>
            <div className='center'>
              {/* Box for Account Details */}
              <div className='home-box home-box-account'>
                <div className='box-content'>
                  <div className='box-text'>
                    <p>Account No: {accountDetails.accountNo}</p>
                    <p>IFSC Code: {accountDetails.ifscCode}</p>
                    <p>Account Type: {accountDetails.accountType}</p>
                    <p>Balance: {accountDetails.balance}</p>
                    <p>Branch: {accountDetails.branch}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Boxes for Check Pin, Create Pin, and Update Pin */}
            <div className='center'>
              <div className='home-box'>
                <Link to='/dashboard/create-session' style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className='box-content'>
                    <img src={CheckPin} alt='Check Pin' className='box-inner-img' />
                    <div className='box-text'>Check Pin</div>
                  </div>
                </Link>
              </div>
              <div className='home-box'>
                <Link to='/dashboard/assign-duty' style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className='box-content'>
                    <img src={CreatePin} alt='Create Pin' className='box-inner-img' />
                    <div className='box-text'>Create Pin</div>
                  </div>
                </Link>
              </div>
              <div className='home-box'>
                <Link to='/dashboard/supervision' style={{ textDecoration: 'none', color: 'inherit' }}>
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
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

import Dashboard from '../dashboard/dashboard';

import Deposit from '../../assets/Images/TransactionImages/Deposit.png';
import Withdraw from '../../assets/Images/TransactionImages/Withdraw.png';
import SendMoney from '../../assets/Images/TransactionImages/SendMoney.png'; 
import '../../assets/css/transaction.css'

const Transaction = (props) => {
  return (
    <div>
      <Dashboard/>
    <div className='home-outer home-overflow'> {/* Apply similar outer container classes */}
      <div className='main'>
        <div className='main-in'>
          <div className='home-box-outer'>
            {/* Boxes for Deposit, Withdraw, and Send Money */}
            <div className='center' style={{ display: 'flex', gap: '20px' }}> {/* Use flexbox for horizontal alignment and add gap */}
              <div className='home-box' style={{ width: '200px', height: '200px' }}> {/* Set width and height for bigger boxes */}
                <Link to="/transaction/deposit" className="box-content">
                  <img src={Deposit} alt='Deposit' className='box-inner-img' />
                  <div className='box-text'>Deposit Money</div>
                </Link>
              </div>
              <div className='home-box' style={{ width: '200px', height: '200px' }}> {/* Set width and height for bigger boxes */}
                <Link to="/transaction/withdraw" className="box-content">
                  <img src={Withdraw} alt='Withdraw' className='box-inner-img' />
                  <div className='box-text'>Withdraw Money</div>
                </Link>
              </div>
              <div className='home-box' style={{ width: '200px', height: '200px' }}> {/* Set width and height for bigger boxes */}
                <Link to="/transaction/send-money" className="box-content">
                  <img src={SendMoney} alt='Check Pin' className='box-inner-img' />
                  <div className='box-text'>Send Money</div>
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

export default Transaction;

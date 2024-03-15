import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

import Deposit from './Deposit';
const Transaction = (props) =>{
    return(
        <>
            <div>
                <Link to="/deposit" role="button" className="btn btn-primary m-2"> Deposit</Link>
                <Link to="/withdraw" role="button" className="btn btn-primary m-2"> Withdraw</Link>
                <Link to="/sendMoney" role="button" className="btn btn-primary m-2"> Send Money</Link>
            </div>
            <Deposit/>
        </>
    )
}
export default Transaction
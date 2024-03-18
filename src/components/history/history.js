import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Dashboard from '../dashboard/dashboard';
import Navbar from '../dashboard/navbar';
import '../../assets/css/history.css'; 

const History = () => {
  const [transaction, settransaction ] = useState([]);
  useEffect(()=>{
    const fetchTransaction= async()=>{

      const config = {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        }
      };

      axios.get('http://localhost:8080/api/account/transactions', config)
        .then(response => {
          const transformedTransactions = response.data.map(transaction => ({
            amount: `$${transaction.amount}`,
            type: transaction.transaction_type,
            date: new Date(transaction.transaction_date).toISOString().split('T')[0],
            sourceAccount: transaction.sourceAccountNumber,
            targetAccount: transaction.targetAccountNumber === 'N/A' ? 'N/A' : transaction.targetAccountNumber
          }));
          settransaction(transformedTransactions);
          console.log(transaction);
        }) 
        .catch(error => {
          //alert danger
          console.error(error);
        });

    }
    fetchTransaction();
  }, []);

  return (
    <>
      <Navbar />
      <div className="transaction-history-container">
        
        {transaction.map((data, index) => (
          <div key={index} className="transaction-box">
            <p><strong>Amount:</strong> {data.amount}</p>
            <p><strong>Transaction Type:</strong> {data.type}</p>
            <p><strong>Transaction Date:</strong> {data.date}</p>
            <p><strong>Source Account Number:</strong> {data.sourceAccount}</p>
            <p><strong>Target Account Number:</strong> {data.targetAccount}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default History;

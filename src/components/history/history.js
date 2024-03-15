import React from 'react';

import Dashboard from '../dashboard/dashboard';
import '../../assets/css/history.css'; // Import your CSS file for transaction history styling

const History = () => {
  // Mock sample transaction data
  const transactions = [
    {
      amount: '$100',
      type: 'Deposit',
      date: '2024-03-15',
      sourceAccount: '1234567890',
      targetAccount: '9876543210'
    },
    {
      amount: '$50',
      type: 'Withdrawal',
      date: '2024-03-14',
      sourceAccount: '9876543210',
      targetAccount: '1234567890'
    },
    {
        amount: '$50',
        type: 'Withdrawal',
        date: '2024-03-14',
        sourceAccount: '9876543210',
        targetAccount: '1234567890'
      },
      {
        amount: '$50',
        type: 'Withdrawal',
        date: '2024-03-14',
        sourceAccount: '9876543210',
        targetAccount: '1234567890'
      },
      {
        amount: '$50',
        type: 'Withdrawal',
        date: '2024-03-14',
        sourceAccount: '9876543210',
        targetAccount: '1234567890'
      },
      {
        amount: '$50',
        type: 'Withdrawal',
        date: '2024-03-14',
        sourceAccount: '9876543210',
        targetAccount: '1234567890'
      },
      {
        amount: '$50',
        type: 'Withdrawal',
        date: '2024-03-14',
        sourceAccount: '9876543210',
        targetAccount: '1234567890'
      },
    // Add more sample transactions as needed
  ];

  return (
    <div>
        <Dashboard />
    <div className="transaction-history-container">
      
      {transactions.map((transaction, index) => (
        <div key={index} className="transaction-box">
          <p><strong>Amount:</strong> {transaction.amount}</p>
          <p><strong>Transaction Type:</strong> {transaction.type}</p>
          <p><strong>Transaction Date:</strong> {transaction.date}</p>
          <p><strong>Source Account Number:</strong> {transaction.sourceAccount}</p>
          <p><strong>Target Account Number:</strong> {transaction.targetAccount}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default History;

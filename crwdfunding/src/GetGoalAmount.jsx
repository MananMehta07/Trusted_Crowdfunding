import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from './contract.js';

const GetGoalAmount = () => {
  const [goalAmount, setGoalAmount] = useState(0);

  useEffect(() => {
    const fetchGoalAmount = async () => {
      if (typeof window.ethereum!== 'undefined') {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const contract = new ethers.Contract(contractAddress, contractABI, provider);
        const goal = await contract.goalAmount();
        setGoalAmount(ethers.formatEther(goal));
      }
    };

    fetchGoalAmount();
  }, []);

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ color: '#007bff', marginBottom: '10px' }}>Goal Amount:</h3>
      <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>{goalAmount} ETH</p>
    </div>
  );
};

export default GetGoalAmount;
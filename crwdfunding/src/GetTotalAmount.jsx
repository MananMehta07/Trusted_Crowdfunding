import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from './contract.js';

const GetTotalAmount = () => {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchTotalAmount = async () => {
      if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const contract = new ethers.Contract(contractAddress, contractABI, provider);
        const total = await contract.totalAmount();
        setTotalAmount(ethers.formatEther(total));
      }
    };

    fetchTotalAmount();
  }, []);

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ color: '#007bff', marginBottom: '10px' }}>Total Amount Donated:</h3>
      <p style={{ fontSize: '20px', color: '#333' }}>{totalAmount} ETH</p>
    </div>
  );
};

export default GetTotalAmount;
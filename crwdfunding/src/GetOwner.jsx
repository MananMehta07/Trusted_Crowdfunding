import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from './contract.js';

const GetOwner = () => {
  const [owner, setOwner] = useState('');

  useEffect(() => {
    const fetchOwner = async () => {
      if (typeof window.ethereum !== 'undefined') {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const contract = new ethers.Contract(contractAddress, contractABI, provider);
        const ownerAddress = await contract.owner();
        setOwner(ownerAddress);
      }
    };

    fetchOwner();
  }, []);

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ color: '#007bff', marginBottom: '10px' }}>Owner:</h3>
      <p style={{ fontSize: '20px', color: '#333' }}>{owner}</p>
    </div>
  );
};

export default GetOwner;
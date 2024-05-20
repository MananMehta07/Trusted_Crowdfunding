import React, { useState } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from './contract.js';

const DonateForm = () => {
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const donate = async () => {
    setLoading(true);
    setMessage('');

    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      try {
        const donationAmount = ethers.parseEther(amount);
        await contract.donate(donationAmount);
        setMessage('Donation successful!');
      } catch (error) {
        setMessage('Goal Already reached');
        
      }
    } else {
      setMessage('Please install MetaMask to donate.');
    }

    setLoading(false);
  };

  return (
    <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '5px' }}>
      <input
        type="text"
        placeholder="Amount in ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ width: '300px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}
      />
      <button onClick={donate} disabled={loading} style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Donate
      </button>
      {message && <p style={{ color: '#007bff', marginTop: '10px' }}>{message}</p>}
    </div>
  );
};

export default DonateForm;
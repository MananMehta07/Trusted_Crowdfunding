import React from 'react';
import DonateForm from './DonateForm.jsx';
import GetOwner from './GetOwner.jsx';
import GetTotalAmount from './GetTotalAmount.jsx';
import GetGoalAmount from './GetGoalAmount.jsx';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="title-bar">
        <h1>Trustmy Fund</h1>
      </div>
      <div className="center-aligned">
        <h2>Listed Campaigns</h2>
      </div>
      <div className="card-container">
        <div className="card">
          
          <h3>Startup 1</h3>
          <div>
            <DonateForm></DonateForm>
            <GetOwner />
            <GetTotalAmount />
            <GetGoalAmount />
          </div>
        </div>
      </div>
      <div className="footer">
      <footer >
        <p>&copy; 2023 Trustmy Fund. All rights reserved.</p>
        <p>Powered by React</p>
      </footer>
      </div>
    </div>
  );
};

export default LandingPage;

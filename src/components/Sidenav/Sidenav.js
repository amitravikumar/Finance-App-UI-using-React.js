import React from 'react';
import Connectivity from './Connectivity';
import RecipentData from './RecipentData';
import bankLogo from '../../assets/images/bank-logo.png';
import '../../assets/css/sidenav.css';

const Sidenav = () => {
  return (
    <div>
      <nav className="sidenav-menu">
        <div className="bank-logo">
          <img src={bankLogo} alt="Bank logo" className="sidenav-logo"/>
          <h3>The North Bank</h3>
        </div>
        <div className="sidenav-navigation">
          <p style={{opacity: "1"}}><i className="material-icons sidenav-items">layers</i>Overview</p>
          <p><i className="material-icons sidenav-items">insights</i>Documents</p>
          <p><i className="material-icons sidenav-items">description</i>Statistics</p>
          <p><i className="material-icons sidenav-items">tune</i>Settings</p>
        </div>
        <Connectivity />
        <RecipentData />
      </nav>
    </div>
  )
}

export default Sidenav;

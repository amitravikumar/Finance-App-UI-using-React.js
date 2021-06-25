import React from 'react';
import '../../assets/css/sidenav.css';

const Connectivity = () => {
  return (
    <div className="connectivity-container">
      <div>
        <i className="material-icons connectivity-close">close</i>
        <span className="connectivity-icon-container"><i className="material-icons connectivity-bolt">bolt</i></span>
      </div>
      <div className="connectivity-text">
        <p>You have been disconnected..</p>
        <p style={{fontSize: "10px"}}>Please check your internet connection</p>
      </div>
    </div>
  )
}

export default Connectivity;

import React from 'react';
import '../../assets/css/sidenav.css';

const RecipentData = () => {
  return (
    <div className="recipentData-container">
      <i className="material-icons connectivity-close">close</i>
      <div>
        <i className="material-icons recipentData-icons">file_copy</i>
      </div>
      <div className="recipentData-text">
        <h4>Recipient Data</h4>
        <p>Do you want to export your data before you cancel your subscription?</p>
        <button className="recipentData-export">Export All Data</button>
      </div>
    </div>
  )
}

export default RecipentData

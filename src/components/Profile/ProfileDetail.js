import React from 'react';
import CustomerImage from '../../assets/images/customer-profile.jpg';
import '../../assets/css/profile.css';

const ProfileDetail = ()  => {
    return (
        <div className="profileDetail-container">
            <p className="profileDetail-header">CREDIT LIMIT</p>
            <div>
                <p className="profileDetail-image">
                    <img src={CustomerImage} className="ProfileDetail-customerProfile" alt="Customer Profile"/>
                </p>
                <h5 className="ProfileDetail-customerName">Cameron Williamson</h5>
                <p className="ProfileDetail-customerEmail">c.williamson@gmail.com</p>
                <div className="ProfileDetail-icons">
                    <i className="material-icons">chat</i>
                    <i className="material-icons">people</i>
                </div>
                <button className="recipentData-export" style={{width: '200px', color: "#000", fontWeight: "600", marginTop: "25px"}}>Change Credit Limit</button>
            </div>
        </div>
    )
}

export default ProfileDetail;
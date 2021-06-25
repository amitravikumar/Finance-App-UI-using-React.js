import React from 'react';
import Cards from './Cards';
import ProfileDetail from "./ProfileDetail";
import '../../assets/css/profile.css';

const Profile = () => {
    return (
        <div className="profile-container">
            <ProfileDetail />
            <Cards />
        </div>
    )
}

export default Profile;
import React from 'react';
import Search from './Search';
import Intro from './Intro';
import '../../assets/css/header.css';

const Header = () => {
    return (
        <div className="header-container">
            <Search />
            <Intro />
        </div>
    )
}

export default Header;

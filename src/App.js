import React from 'react';
import './App.css';
import Sidenav from './components/Sidenav/Sidenav';
import Header from './components/Header/Header';
import DepositData from './components/DepositData';
import Profile from './components/Profile/Profile';

function App() {
    return (
        <div className="App">
            <Sidenav />
            <Header />
            <Profile />
            <DepositData />
        </div>
    );
}

export default App;

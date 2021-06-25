import React, { Fragment } from 'react';
import Deposits from './Accounts/Deposits';
import '../assets/css/depositData.css';

const DepositData = () => {
    return (
        <Fragment>
            <div className="deposits-container">
                <div className="deposit-headers">
                    <h3 className="heading-main">Deposit</h3>
                    <p className="heading-text">VIEW ALL</p>
                </div>
                <div className="deposit-headers">
                    <h3 className="heading-main">Withdraw</h3>
                    <p style={{marginRight: "40px"}} className="heading-text">VIEW ALL</p>
                </div>
            </div>
            <Deposits />
        </Fragment>
    )
}

export default DepositData;

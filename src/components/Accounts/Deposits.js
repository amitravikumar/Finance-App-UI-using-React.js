import React from 'react';
import '../../assets/css/depositData.css';

const Deposits = () => {
    return (
        <div className="deopsit-details">
            <div className="deposit-details-data">
                <div className="deopsit-details-name">
                    <p>American Express</p>
                    <p>Mastercard</p>
                    <p>Chase bank Account</p>
                    <p>Bank Account</p>
                </div>
                <div className="deposit-credited">
                    <p>+$1,063</p>
                    <p>+$1,623</p>
                    <p>+$9,325</p>
                    <p>+$1,321</p>
                </div>
            </div>
            <div className="deposit-details-data">
                <div>
                    <p>Satbucks Stock</p>
                    <p>Wallet Withdraw</p>
                    <p>Dell Technology</p>
                    <p>Apple</p>
                </div>
                <div className="deposit-debited">
                    <p>-$1,063</p>
                    <p>-$4,234</p>
                    <p>-$150,901</p>
                    <p>-$9,901</p>
                </div>
            </div>
        </div>
    )
}

export default Deposits;
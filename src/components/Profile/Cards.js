import React, { Fragment } from 'react';
import '../../assets/css/profile.css';

const Cards = () => {
    return (
        <Fragment>
            <p className="profileDetail-header">MY CARDS</p>
            <div className="cards-container">
                <div className="cards-header">
                    <h5>The North Bank</h5>
                    <i className="material-icons">wifi</i>
                </div>
                <div className="cards-footer">
                    <p>CAMERON WILLIAMSON</p>
                    <p>02/22</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Cards;
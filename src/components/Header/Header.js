import React from 'react';
// custom stylesheet
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>Mission Venus Team</h1>
            <h2>Total Budget: <span className='budget'>1 Billion USD</span></h2>
        </div>
    );
};
export default Header;
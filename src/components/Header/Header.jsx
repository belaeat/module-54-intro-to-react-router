import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            
            {/* link korle SPA (single page application) er moto kaj kore, that means load hobe na, direct content dekhabe! */}

            <Link to="/">Home</Link>
            <Link to='/friends'>Friends</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>

            {/* link korle SPA (single page application) er moto kaj kore, that means load hobe na, direct content dekhabe! */}

            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to='/friends'>Friends</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
            <ActiveLink to='/posts'>Posts</ActiveLink>
        </nav>
    );
};

export default Header;
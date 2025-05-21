import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="blue">
                <Link to="/home">Home</Link>
                <div>|</div>
                <Link to="/about">About</Link>
                <div>|</div>
                <Link to="/contact">Contact</Link>

            </nav>
        </div >
    )
}

export default Header



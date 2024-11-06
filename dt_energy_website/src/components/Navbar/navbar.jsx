import React from 'react';
import './Navbar.css';
import DTlogo from '../../assets/dtnlogo.png'; // Correct import
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
    return (
        <header className="navbar-container">

            <div className="navbar-grid">
                <div className="navbar-logo">
                    <img src={DTlogo} alt="DT Energy Logo" className="logo-image" /> {/* Correct usage of DTlogo */}
                </div>

                <div className="navbar-contactnumber">
                    <div className="icon-container">
                        <div className="wave"></div>
                        <FaPhoneAlt className="icon" />
                    </div>
                    <span className="phone-number">0707085790</span>
                </div>

                <div className="navbar-contactemail">
                    <FaEnvelope className="icon" />
                    <span>dreamtrillions100@gmail.com</span>


                </div>

            </div>
            <div className='navsubbar'>
                <nav className="navbar-links">
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">Solutions</a>
                    <a href="#">Projects</a>
                    <a href="#">News</a>
                    <a href="#">Contact Us</a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;

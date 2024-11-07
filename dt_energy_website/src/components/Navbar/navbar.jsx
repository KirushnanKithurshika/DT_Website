import React, { useState, useEffect } from 'react';
import './Navbar.css';
import DTlogo from '../../assets/dtnlogo.png';
import { FaEnvelope, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import Navsubarmobileview from './navsubbar_vertical'; // Make sure the mobile view is correctly imported

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when the screen width exceeds 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="navbar-container">
      <div className="navbar-grid">
        <div className="navbar-logo">
          <img src={DTlogo} alt="DT Energy Logo" className="logo-image" />
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

        <div className="navbar-humburger" onClick={toggleMenu}>
          {/* Conditionally render either the hamburger or close icon */}
          {isMenuOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </div>
      </div>

      {/* Show mobile menu only if isMenuOpen is true */}
      {isMenuOpen && (
        <div className="navsubbar">
          <Navsubarmobileview />
        </div>
      )}

      <nav className="navbar-links">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Solutions</a>
        <a href="#">Projects</a>
        <a href="#">News</a>
        <a href="#">Contact Us</a>
      </nav>
    </header>
  );
};

export default Navbar;

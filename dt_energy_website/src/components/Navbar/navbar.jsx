import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom'; // Import NavLink
import DTlogo from '../../assets/dtnlogo.png';
import { FaEnvelope, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import Navsubarmobileview from './navsubbar_vertical'; // Ensure mobile view is correctly imported

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="navbar-container">
      <div className="navbar-grid">
        <div className="navbar-logo">
          <Link to="/">
            <img src={DTlogo} alt="DT Energy Logo" className="logo-image" />
          </Link>
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
          {isMenuOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
        </div>
      </div>

      {isMenuOpen && (
        <div className="navsubbar">
          <Navsubarmobileview />
        </div>
      )}

      <nav className="navbar-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'active' : ''} 
        >
          Home
        </NavLink>
        <NavLink 
          to="/product" 
          className={({ isActive }) => isActive ? 'active' : ''} 
        >
          Products
        </NavLink>
        <NavLink 
          to="/service" 
          className={({ isActive }) => isActive ? 'active' : ''} 
        >
          Services
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => isActive ? 'active' : ''} 
        >
          Projects
        </NavLink>
        <NavLink 
          to="/news" 
          className={({ isActive }) => isActive ? 'active' : ''} 
        >
          News
        </NavLink>
        <NavLink 
          to="/contact-us" 
          className={({ isActive }) => isActive ? 'active' : ''} 
        >
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;

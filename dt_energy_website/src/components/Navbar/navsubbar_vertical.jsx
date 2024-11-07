import React, { useState } from 'react';
import './navsubbar.css';  
const Navsubarmobileview = () => {
  return (
    <div>
      <nav className='navsubbar-container'>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Solutions</a>
        <a href="#">Projects</a>
        <a href="#">News</a>
        <a href="#">Contact Us</a>
      </nav>
    </div>
  );
};

export default Navsubarmobileview;

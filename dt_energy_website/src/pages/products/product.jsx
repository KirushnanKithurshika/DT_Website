import React from 'react';
import backgroundImage from '../../assets/BG.jpg';
import Navbar from '../../components/Navbar/navbar';
import './homepage.css';

function Homepage() {
  return (
    <div className='home_container'> 
     <div
      className="homepage-background"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className="nav_container">
        <Navbar />
      </div>
      
    </div>
   
    </div>
  );
}

export default Homepage;

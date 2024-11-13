import React from 'react';
import backgroundImage from '../../assets/BG.jpg';
import Navbar from '../../components/Navbar/navbar';
import './homepage.css';
import Introdt from '../../components/IntroDT/introdt';
import Services from '../../components/Services/services';

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
      <div className="home-intro">
        <span className="intro-text">Sustainable Energy for
          a Brighter Future</span>
        <span className="intro-subtext">Power Your Life with DT Energy a sustainable
          solar service providers</span>
        <button className="intro-button">Learn More</button>
      </div>
    </div>
    <Introdt/>
    <Services/>
    </div>
  );
}

export default Homepage;

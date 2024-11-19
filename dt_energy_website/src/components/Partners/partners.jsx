import React, { useEffect } from 'react';
import './partners.css';
import partnerBG from '../../assets/partners background.jpg';
import logo1 from '../../assets/jasolar.png';
import logo2 from '../../assets/ulica.jpg';
import logo3 from '../../assets/phonosolar.jpg';
import logo4 from '../../assets/solis.png';
import logo5 from '../../assets/Sonic.jpg';
import logo6 from '../../assets/panasonic.jpg';
import logo7 from '../../assets/foxess.png';
import logo8 from '../../assets/Energynet.png';
import logo9 from '../../assets/huawei.png';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

function Partners() {
  useEffect(() => {
    AOS.init({
      duration: 1500, 
      offset: 200,
    });
  }, []); 

  return (
    <div className="partners-container">
      <div className="partners-grid">
        
        <div className="partners-heading-container"  data-aos="slide-right" 
            data-aos-delay="500" >
          <span
            className="partners-heading"
            
           
          >
            Partnering for a Greener Tomorrow
          </span>
        </div>

        {/* Subheading with side animation (coming from right) */}
        <div className="partners-subheading-container"  data-aos="slide-right" 
            data-aos-delay="500" >
          <span
            className="partners-subheading"
            data-aos="slide-right"  // Animate subheading sliding from the right
            data-aos-delay="400"  // Delay before the animation starts
          >
            At DT Energy, we collaborate with trusted partners who share our vision of a greener, more sustainable future.
            Our partnerships allow us to deliver cutting-edge solar solutions to our customers, ensuring long-term value and positive environmental impact.
          </span>
        </div>

        {/* Content with Background Image */}
        <div className="partners-content-container">
          {/* Background Wrapper with Animation */}
          <div
            className="partners-background"
            data-aos="fade-in"
            data-aos-delay="600" // Animation for background
          ></div>

          {/* Partner Logos Grid */}
          <div className="first">
            {/* Grid Boxes with logo images */}
            <div className="grid-box" data-aos="zoom-in" data-aos-delay="300">
              <img src={logo1} alt="Logo 1" />
            </div>
            <div className="grid-box" data-aos="zoom-in" data-aos-delay="400">
              <img src={logo2} alt="Logo 2" />
            </div>
            <div className="grid-box" data-aos="zoom-in" data-aos-delay="500">
              <img src={logo3} alt="Logo 3" />
            </div>
            <div className="grid-box" data-aos="zoom-in" data-aos-delay="600">
              <img src={logo4} alt="Logo 4" />
            </div>
            <div className="grid-box" data-aos="zoom-in" data-aos-delay="700">
              <img src={logo5} alt="Logo 5" />
            </div>
            <div className="grid-box" data-aos="zoom-in" data-aos-delay="800">
              <img src={logo6} alt="Logo 6" />
            </div>
            <div className="grid-box" data-aos="zoom-in" data-aos-delay="900">
              <img src={logo7} alt="Logo 7" />
            </div>
            <div className="grid-box" data-aos="zoom-in" data-aos-delay="1000">
              <img src={logo8} alt="Logo 8" />
            </div>
            <div className="grid-box" data-aos="zoom-in" data-aos-delay="1100">
              <img src={logo9} alt="Logo 9" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Partners;

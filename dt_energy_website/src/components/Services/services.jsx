import React from 'react';
import './services.css'; 
import solarInstallation from '../../assets/solarinstallation.jpg';
import batteryStorage from '../../assets/energystorage.jpg';
import consultation from '../../assets/consultation.jpg';
import financing from '../../assets/financing.jpg';

const Services = () => {
  return (
    <div className="solutions-container">
      <h2 className="solutions-title">Tailored Solutions for You</h2>
      <div className="solutions-grid">
        <div className="solution-card">
          <img src={solarInstallation} alt="Solar Installation" className="solution-image" />
          <p className="solution-text">Solar Installation</p>
        </div>
        <div className="solution-card">
          <img src={batteryStorage} alt="Battery Storage Solutions" className="solution-image" />
          <p className="solution-text">Battery Storage Solutions</p>
        </div>
        <div className="solution-card">
          <img src={consultation} alt="Consultation & Site Assessment" className="solution-image" />
          <p className="solution-text">Consultation & Site Assessment</p>
        </div>
        <div className="solution-card">
          <img src={financing} alt="Financing Assistance" className="solution-image" />
          <p className="solution-text">Financing Assistance</p>
        </div>
      </div>
    </div>
  );
};

export default Services;

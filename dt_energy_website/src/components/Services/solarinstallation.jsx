import React, { useEffect } from 'react';
import './solarinstallation.css';
import Solarinstallationimg from '../../assets/solarinstallation.jpg';
import Batterystoragesolution from '../../assets/energystorage.png';
import Ongrid from '../../assets/ongrid.png';
import Offgrid from '../../assets/offgrid.png';
import Consultation from '../../assets/consultation.png';
import Financial from '../../assets/Financial.jpg';
import Contact from '../Contact/contact';
import BankPartners from '../Bankingpartens/bankingpartners';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS

function Solarinstallation() {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS
    }, []);

    return (
        <div className='solarinstallation-container'>
            <div className='solarinstallation-head' data-aos="fade-up">
                In today’s world, renewable energy is more than just a trend—it's the future.
                At DT Energy (Dream Trillions (Pvt) Ltd), we believe in leading that future with
                innovative, sustainable, and efficient solar solutions. Whether you are looking to power
                your home, business, or a large-scale project, our expertise in solar installation
                guarantees reliable energy solutions tailored to your specific needs.
            </div>

            <h2 className='solarinstallation-heading' data-aos="fade-up">1. Solar Installation</h2>

            <div className='solarinstallation-section' data-aos="fade-up">
                <div className='solarinstallation-image'>
                    <img src={Solarinstallationimg} alt="Solar Installation" />
                </div>
                <div className='solarinstallation-description'>
                    <div className="solar-services-intro" data-aos="fade-up">
                        Whether you are looking to power your home, business, or a large-scale project, our expertise in solar installation guarantees reliable energy solutions tailored to your specific needs.
                        We offer customized solar installation services across all system configurations:
                    </div>
                    <div className="solar-services-list" data-aos="fade-up">
                        <ul className="solar-services-items">
                            <li className="solar-service-item" data-aos="fade-up">
                                <span className="service-title">1. On-Grid Systems:</span> Perfect for locations with a reliable grid connection, It generates electricity from solar panels and can draw power from the grid when solar production is sufficient.
                            </li>
                            <li className="solar-service-item" data-aos="fade-up">
                                <span className="service-title">2. Off-Grid Systems:</span> Ideal for remote areas, our off-grid solutions ensure energy independence by utilizing advanced battery storage.
                            </li>
                            <li className="solar-service-item" data-aos="fade-up">
                                <span className="service-title">3. Hybrid Systems:</span> A versatile option combining the benefits of both on-grid and off-grid systems, offering maximum reliability and flexibility.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='client-need' data-aos="fade-up">
                At DT Energy, we provide customized solar installation services tailored to the client's needs. Whether it's for a <span className="highlight">residential</span> or <span className="highlight">commercial</span> property, we offer solutions that match the space and energy requirements.
            </div>

            <h2 className='solarinstallation-heading' data-aos="fade-up">2. Battery Storage Solutions</h2>
            <div className='solarinstallation-section' data-aos="fade-up">
                <div className='solarinstallation-image'>
                    <img src={Batterystoragesolution} alt="Battery Storage Solutions" />
                </div>
                <div className='solarinstallation-description'>
                    <div className="solar-services-intro" data-aos="fade-up">
                        Our energy storage systems are designed to enhance the efficiency, reliability, and sustainability of your energy usage.
                    </div>
                    <div className="solar-services-list" data-aos="fade-up">
                        <ul className="solar-services-items">
                            <li className="solar-service-item" data-aos="fade-up">
                                <span className="service-title">1. Advanced Battery Storage Systems:</span> Cutting-edge lithium-ion and lead-acid battery systems from three leading brands.
                            </li>
                            <li className="solar-service-item" data-aos="fade-up">
                                <span className="service-title">2. Energy Optimization & Management:</span> Our smart energy management systems optimize energy usage.
                            </li>
                            <li className="solar-service-item" data-aos="fade-up">
                                <span className="service-title">3. Grid-Tied and Off-Grid Solutions:</span> We have the right storage solution for grid-tied or off-grid customers.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='ongrid-offgrid'>
                <div className='onoff-grids' data-aos="fade-up">
                    <img src={Ongrid} alt="On-Grid System" />
                    <p className="onoff-text">On-Grid System</p>
                </div>
                <div className='onoff-grids' data-aos="fade-up">
                    <img src={Offgrid} alt="Off-Grid System" />
                    <p className="onoff-text">Off-Grid System</p>
                </div>
            </div>

            <h2 className='solarinstallation-heading' data-aos="fade-up">3. Consultation And Site Assessments</h2>
            <div className='solarinstallation-section' data-aos="fade-up">
                <div className='solarinstallation-image'>
                    <img src={Consultation} alt="Consultation" />
                </div>
                <div className='solarinstallation-description'>
                    <div className="solar-services-intro" data-aos="fade-up">
                        DT Energy provides comprehensive consultation services that include personalized energy assessments and tailored solar solutions.
                    </div>
                    <div className="solar-services-list" data-aos="fade-up">
                        <ul className="solar-services-items">
                            <li className="solar-service-item" data-aos="fade-up">
                                <span className="service-title">1. Site Assessment and Consultation:</span> Assess roof space, orientation, shading, and energy needs.
                            </li>
                            <li className="solar-service-item" data-aos="fade-up">
                                <span className="service-title">2. Structural Analysis</span>
                            </li>
                            <li className="solar-service-item" data-aos="fade-up">
                                <span className="service-title">3. Energy Production Estimates</span>
                            </li>
                            <li className="solar-service-item" data-aos="fade-up">
                                <span className="service-title">4. System Design, Permits & Paperwork</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <h2 className='solarinstallation-heading' data-aos="fade-up">4. Financial Assistance</h2>
            <div className='client-need' data-aos="fade-up">
                Transitioning to solar energy is an excellent way to save on your energy bills. DT Energy offers a variety of solar financing options tailored to meet your individual needs.
            </div>

            <div className='solarinstallation-section' data-aos="fade-up">
                <div className='solarinstallation-image'>
                    <img src={Financial} alt="Financial Assistance" />
                </div>
                <div className='solarinstallation-description'>
                    <div className="solar-services-intro" data-aos="fade-up">
                        We offer a variety of solar financing options tailored to meet your individual needs and budget.
                    </div>
                    <div className="solar-services-list" data-aos="fade-up">
                        <ul className="solar-services-items">
                            <li className="solar-service-item" data-aos="fade-up">
                                <span className="service-title">1. Solar Loans:</span> Competitive interest rates and flexible repayment terms.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='client-need' data-aos="fade-up">
                <span className="highlight">DT Energy connects with banks</span> to provide financing solutions for customers who want to make the switch to solar energy.
            </div>

            <BankPartners />
            <Contact />
        </div>
    );
}

export default Solarinstallation;

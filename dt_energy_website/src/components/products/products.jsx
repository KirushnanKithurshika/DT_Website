import React from 'react';
import './products.css';
import solar from '../../assets/solar.png';
import inverter from '../../assets/inverter.png';
import battery from '../../assets/battery.png';

function Products() {
    return (
        <div className='product-description-container'>
            <div className='product-head'>
                We provide top-notch products and services in the solar energy sector, specializing in solar panels, inverters, and batteries. Our solutions are designed to deliver reliable, sustainable, and efficient energy systems, empowering homes and businesses with clean energy alternatives.
            </div>
            <div className='product-details'>
                <div className='classA'>
                    <img src={solar} alt="Solar Panels" className="product-image" />
                </div>
                <div className='classB'>
                    <img src={inverter} alt="Inverter" className="product-image" />
                </div>
                <div className='classC'>
                    <img src={battery} alt="Battery" className="product-image" />
                </div>
                <div className='classD'></div>
                <div className='classE'></div>
                <div className='classF'></div>
            </div>
        </div>
    );
}

export default Products;

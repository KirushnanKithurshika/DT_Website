import React from 'react';
import backgroundImage from '../../assets/BG.jpg';
import Navbar from '../../components/Navbar/navbar';
import './product.css';

function Product() {
  return (
    <div className='product-container'> 
     <div
      className="product-background"
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

export default Product;

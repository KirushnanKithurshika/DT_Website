import React from 'react';
import backgroundImagepProduct from '../../assets/PageBG.jpg';
import Navbar from '../../components/Navbar/navbar';
import './product.css';

function Product() {
  return (
    <div className='product-container'> 
     <div
      className="product-background"
      style={{
        backgroundImage: `url(${backgroundImagepProduct})`
      }}
    >
      <div className="nav_container">
        <Navbar />
      </div>
      <div className='Productheadsubhead'>
      <div className='Product'>Products</div>
      <div className='product-subheading'>We offer quality solar panels, inverters, and batteries for reliable and sustainable energy solutions.</div>
    </div>
    </div>
   
    </div>
  );
}

export default Product;

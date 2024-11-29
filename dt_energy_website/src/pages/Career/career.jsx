import React from 'react';
import CareerBG from '../../assets/CareerBG.png';
import Navbar from '../../components/Navbar/navbar';
import './career.css';
import FormfacadeEmbed from "@formfacade/embed-react";




function Careers() {
  return (
    <div className='career-container'> 
     <div
      className="career-background"
      style={{
        backgroundImage: `url(${CareerBG})`
      }}
    >
      <div className="nav_container">
        <Navbar />
      </div>
      <div className='careerpageheadsubhead'>
      
      <div className='careerpage-subheading'>


Join the Green Revolution with DT Energy 🌱</div>
    </div>
    </div>

    <FormfacadeEmbed

formFacadeURL="https://formfacade.com/include/117645346583527822782/form/1FAIpQLSet0JCojRjIPMH5GTNA6sTQf0tpe-l8im2p1cw6ZkM0aF_gzA/classic.js/?div=ff-compose"

onSubmitForm={() => console.log('Form submitted')}

/>


   
   
  
    
  
   
    </div>
  );
}
export default Careers;
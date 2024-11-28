import React, { useEffect } from 'react';
import './getaquote.css';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 


function Getaquote() {
  useEffect(() => {
   
    AOS.init({
      duration: 1000, 
      once: true, 
      easing: 'ease-in-out', 
    });
  }, []);

  return (
    <div className='Getaquote-container'  data-aos="fade-up">
      <div className="getaquote-content"  data-aos="fade-up">
        <div className="left"  data-aos="fade-up">
          <div className='up'>
            <span className='headgetaquote'>Get a Quote</span>
          </div>
          <div className='down'>
            <span className='Aspan'>
              Fill out the form below, and our friendly team will reach out to you within 24 hours to guide you every step of the way!
              <br/>
            </span>
            <span className='Bspan'>
              Got questions? We're here to help. 💬
            </span>
            <span className='Cspan'>
              🎁 <strong>Why wait?</strong> Completing the form gives you access to:
              <br />
              <br/>
              📞 A free consultation tailored just for you.
              <br />
              🎯 Expert advice from our seasoned professionals.
              <br />
              🚀 Fast-tracked support for your inquiries.
              <br />
              <br/>
              ✨ <em>Don’t miss out – start your journey with us today!</em> ✨
            </span>
          </div>
        </div>

        <div className="right"  data-aos="fade-up">
          <form className="transparent-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit">Get a Quote</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Getaquote;

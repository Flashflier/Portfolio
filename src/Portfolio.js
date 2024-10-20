import React from 'react';
import './Portfolio.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const Portfolio = () => {
  return (
    <div className="container text-center py-5">
      <div className="summary-tab p-3 flex-shrink-0">
        <h2>Professional Summary</h2>
        <p>
          Experienced professional with a background in... 
          {/* Add your professional summary here */}
        </p>
      </div>
      <h1 className='display-4'>Akash C</h1>
      <p className='lead'>Welcome to my portfolio. Here’s a bit about me...</p>
      <div className="contact-info mt-4 text-left">
        <h2>Contact Information</h2>
        <p>Designation: Dot Net Developer</p>
        <p>Email:akashckayanna242@gmail.com</p>
        <p>Phone: +91 9496949244</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/akash-c-2a8729151" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
      </div>
    </div>
  );
}

export default Portfolio;

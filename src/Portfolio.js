import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Akash C</h1>
      <p>Welcome to my portfolio. Here’s a bit about me...</p>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Designation: Dot Net Developer</p>
        <p>Email:akashckayanna242@example.com</p>
        <p>Phone: +91 9496949244</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/akash-c-2a8729151" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
      </div>
    </div>
  );
}

export default Portfolio;

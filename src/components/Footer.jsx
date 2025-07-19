import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Ayush Kumar Kuchya</h3>
            <p>Software Developer specializing in MERN stack development</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="mailto:kuchyaayush@gmail.com"><FaEnvelope /></a>
              <a href="#"><FaGithub /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Ayush Kumar Kuchya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

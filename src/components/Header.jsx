import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="hero-section">
      <nav className="navbar">
        <div className="nav-brand">Ayush Kumar Kuchya</div>
        <ul className="nav-menu">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Software Developer & MERN Stack Specialist</h1>
        <p>Building efficient, scalable applications with 3+ years of experience</p>
        <p>React.js | Angular | Node.js | Performance Optimization Expert</p>
        
        <div className="hero-stats">
          <div className="stat">
            <h3>25%</h3>
            <p>UI Performance Boost</p>
          </div>
          <div className="stat">
            <h3>20%</h3>
            <p>Load Time Reduction</p>
          </div>
          <div className="stat">
            <h3>3+</h3>
            <p>Years Experience</p>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn-primary">Download Resume</button>
          <button className="btn-secondary">View Projects</button>
        </div>

        <div className="social-links">
          <a href="mailto:kuchyaayush@gmail.com"><FaEnvelope /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;

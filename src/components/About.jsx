import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
          <p>Software Developer with proven expertise in MERN stack development</p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              Software Developer with 3+ years of experience specializing in MERN stack 
              development at <strong>Infosys</strong>. Expert in building scalable React components 
              and Angular applications that boost UI performance by <strong>25%</strong>.
            </p>
            
            <p>
              Proven track record of integrating RESTful APIs, reducing load times by 
              <strong>20%</strong>, and leading cross-functional teams in chatbot development 
              using JavaScript and Avaamo.
            </p>

            <div className="achievements">
              <h3>Key Achievements</h3>
              <ul>
                <li>🏆 <strong>Insta RISE Award</strong> - Infosys (Exceptional Work Performance)</li>
                <li>🌟 <strong>Rookie of the Quarter</strong> - Infosys (Outstanding Performance)</li>
                <li>🥇 <strong>First Rank</strong> - KODEATHON B12, Jaypee University</li>
                <li>💼 Delivered solutions for <strong>Fortune 500 companies</strong> (Mondelez, P&G)</li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="image-placeholder">
              <p>Professional Photo</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Digital Specialist Engineer II",
      company: "Infosys",
      client: "Mondelez International",
      period: "January 2024 - Present",
      location: "Bengaluru, India",
      achievements: [
        "Built scalable React components with Redux and Material UI, boosting UI performance by 25%",
        "Integrated RESTful APIs reducing load times by 20%",
        "Created multiple Power BI reports for data analytics and decision-making",
        "Implemented React.memo and useCallback for 25% performance improvement",
        "Led chatbot development teams using Avaamo and JavaScript"
      ]
    },
    {
      title: "Digital Specialist Engineer",
      company: "Infosys",
      client: "Procter & Gamble",
      period: "July 2022 - December 2023",
      location: "Bengaluru, India",
      achievements: [
        "Developed dynamic web applications using Angular with responsive interfaces",
        "Implemented RESTful APIs improving data handling and application efficiency",
        "Enhanced user experience with custom directives and reactive forms",
        "Managed version control using Git for seamless team collaboration"
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Professional Experience</h2>
          <p>Building enterprise solutions at scale</p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="experience-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-marker"></div>
              <div className="experience-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company} - {exp.client}</h4>
                <div className="experience-meta">
                  <span className="period">{exp.period}</span>
                  <span className="location">{exp.location}</span>
                </div>
                <ul className="achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

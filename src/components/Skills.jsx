import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["React.js", "Angular", "Redux", "Material UI", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"]
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express.js", "RESTful APIs"]
    },
    {
      category: "Database",
      skills: ["MongoDB", "MySQL"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Power BI", "Google Apps Script"]
    },
    {
      category: "Programming Languages",
      skills: ["JavaScript", "Python", "C/C++"]
    },
    {
      category: "Specializations",
      skills: ["MERN Stack", "Component Optimization", "Performance Enhancement", "Chatbot Development"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Technical Skills</h2>
          <p>Technologies I work with</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

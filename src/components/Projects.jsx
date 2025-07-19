import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Study Center Management System",
      description: "Admin Dashboard for Student Information Management",
      features: [
        "Interactive admin-friendly dashboard for quick resource access",
        "Google Apps Script integration for Excel data extraction",
        "Comprehensive student details and information management"
      ],
      techStack: ["Angular", "Express.js", "Node.js", "MongoDB"],
      impact: "Streamlined student management processes for educational institutions"
    },
    {
      title: "Movie Recommendation System (MRS)",
      description: "Content-Based Recommender Using 100K Movie Dataset",
      features: [
        "Intelligent movie recommendations based on user preferences",
        "TMDB API integration for movie details",
        "Content-based filtering algorithm implementation"
      ],
      techStack: ["Python", "JavaScript", "Flask", "HTML", "CSS", "Bootstrap"],
      impact: "Personalized movie discovery experience for users"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Featured Projects</h2>
          <p>Showcasing my development expertise</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <FaGithub className="link-icon" />
                  <FaExternalLinkAlt className="link-icon" />
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="tech-stack">
                <h4>Tech Stack:</h4>
                <div className="tech-tags">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-impact">
                <strong>Impact:</strong> {project.impact}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

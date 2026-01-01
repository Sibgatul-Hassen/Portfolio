import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import "./Projects.css";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects = [
    {
      title: "CATWIZARD",
      description:
        "A fun Linux CLI script similar to cowsay, but with custom ASCII art! An entertaining command-line tool that brings personality to your terminal.",
      tags: ["Shell", "CLI", "Linux"],
      github: "https://github.com/Sibgatul-Hassen/CATWIZARD",
      demo: null,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      title: "Wish",
      description:
        "A creative web project showcasing modern HTML and interactive design. Features engaging user interfaces and smooth animations.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Sibgatul-Hassen/wish",
      demo: null,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with user authentication, product management, shopping cart, and payment integration.",
      tags: ["React", "Node.js", "MongoDB"],
      github: null,
      demo: null,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative task management application with real-time updates, team collaboration features, and advanced filtering.",
      tags: ["React", "Firebase", "Material-UI"],
      github: null,
      demo: null,
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and beautiful data visualizations.",
      tags: ["React", "API Integration", "Charts.js"],
      github: null,
      demo: null,
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
      title: "Portfolio Generator",
      description:
        "Automated portfolio website generator that creates responsive, customizable portfolios from user data and preferences.",
      tags: ["Python", "React", "Templates"],
      github: null,
      demo: null,
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="section projects">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="project-card glass-card hoverable"
              whileHover={{ y: -10 }}
            >
              <div
                className="project-header"
                style={{ background: project.gradient }}
              >
                <div className="project-number">0{index + 1}</div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link hoverable"
                    >
                      <FiGithub /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link hoverable"
                    >
                      <FiExternalLink /> Demo
                    </a>
                  )}
                  {!project.github && !project.demo && (
                    <span className="project-link disabled">Coming Soon</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

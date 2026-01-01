import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBriefcase, FiCalendar } from "react-icons/fi";
import "./Experience.css";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2024 - Present",
      description:
        "Leading development of modern web applications using React, Node.js, and cloud technologies. Implementing scalable solutions and mentoring junior developers.",
      skills: ["React", "Node.js", "AWS", "MongoDB"],
    },
    {
      role: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2023 - 2024",
      description:
        "Developed responsive web applications with focus on performance and user experience. Collaborated with designers and backend teams to deliver pixel-perfect interfaces.",
      skills: ["React", "TypeScript", "CSS3", "REST APIs"],
    },
    {
      role: "Software Developer Intern",
      company: "StartupXYZ",
      period: "2022 - 2023",
      description:
        "Contributed to various projects involving web development, API integration, and database management. Gained hands-on experience with modern development practices.",
      skills: ["JavaScript", "Python", "Git", "Agile"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="section experience">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="timeline-item"
            >
              <div className="timeline-dot" />
              <motion.div
                className="experience-card glass-card hoverable"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <div className="experience-company">
                      <FiBriefcase /> {exp.company}
                    </div>
                  </div>
                  <div className="experience-period">
                    <FiCalendar /> {exp.period}
                  </div>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="experience-skills">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="experience-skill">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;

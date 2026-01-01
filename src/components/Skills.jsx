import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiC,
  SiCplusplus,
  SiPython,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPhp,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import "./Skills.css";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skills = [
    { name: "C", icon: SiC, level: 85, color: "#A8B9CC" },
    { name: "C++", icon: SiCplusplus, level: 85, color: "#00599C" },
    { name: "Java", icon: FaJava, level: 80, color: "#007396" },
    { name: "Python", icon: SiPython, level: 85, color: "#3776AB" },
    { name: "HTML", icon: SiHtml5, level: 95, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, level: 90, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, level: 90, color: "#F7DF1E" },
    { name: "React", icon: SiReact, level: 88, color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, level: 75, color: "#339933" },
    { name: "Git", icon: SiGit, level: 85, color: "#F05032" },
    { name: "MongoDB", icon: SiMongodb, level: 75, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, level: 70, color: "#4169E1" },
    { name: "MySQL", icon: SiMysql, level: 80, color: "#4479A1" },
    { name: "PHP", icon: SiPhp, level: 75, color: "#777BB4" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="section skills">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Skills & Technologies
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="skill-card glass-card hoverable"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill-header">
                <skill.icon
                  className="skill-icon"
                  style={{ color: skill.color }}
                />
                <h3 className="skill-name">{skill.name}</h3>
              </div>

              <div className="skill-bar-container">
                <motion.div
                  className="skill-bar"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  style={{
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                    boxShadow: `0 0 20px ${skill.color}40`,
                  }}
                >
                  <motion.span
                    className="skill-percentage"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  >
                    {skill.level}%
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="skills-footer">
          <div className="glass-card">
            <p className="skills-footer-text">
              🚀 Constantly learning and expanding my skill set to stay ahead in
              the ever-evolving tech landscape
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;

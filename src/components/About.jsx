import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./About.css";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
    <section id="about" className="section about">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div variants={itemVariants} className="about-text">
            <motion.div
              className="glass-card hoverable"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="about-subtitle gradient-text">Who I Am</h3>
              <p className="about-description">
                I'm a passionate Full Stack Developer with a strong foundation
                in both frontend and backend technologies. I love turning
                complex problems into simple, beautiful, and intuitive
                solutions.
              </p>
              <p className="about-description">
                With expertise in multiple programming languages including C,
                C++, Java, Python, and modern web technologies like React and
                JavaScript, I bring a versatile skill set to every project. I'm
                constantly learning and adapting to new technologies to stay at
                the forefront of development.
              </p>
              <p className="about-description">
                When I'm not coding, you'll find me exploring new frameworks,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I believe in writing clean,
                maintainable code and creating exceptional user experiences.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="about-highlights">
            <motion.div
              className="highlight-card glass-card hoverable"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="highlight-icon">🎯</div>
              <h4>Focused</h4>
              <p>Dedicated to delivering high-quality solutions</p>
            </motion.div>

            <motion.div
              className="highlight-card glass-card hoverable"
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="highlight-icon">🚀</div>
              <h4>Innovative</h4>
              <p>Always exploring cutting-edge technologies</p>
            </motion.div>

            <motion.div
              className="highlight-card glass-card hoverable"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="highlight-icon">💡</div>
              <h4>Creative</h4>
              <p>Bringing unique perspectives to every project</p>
            </motion.div>

            <motion.div
              className="highlight-card glass-card hoverable"
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="highlight-icon">🤝</div>
              <h4>Collaborative</h4>
              <p>Team player with excellent communication</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

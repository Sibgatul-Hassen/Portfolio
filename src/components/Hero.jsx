import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import "./Hero.css";
import profileImage from "../profile.png";
import cvPdf from "../Sibgatul_CV.pdf";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero-greeting">
            <span className="wave">👋</span> Hi, I'm
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-name">
            Sibgatul Hassen
          </motion.h1>

          <motion.div variants={itemVariants} className="hero-title-wrapper">
            <h2 className="hero-title">
              <span className="gradient-text">Full Stack Developer</span>
            </h2>
            <div className="title-underline" />
          </motion.div>

          <motion.p variants={itemVariants} className="hero-description">
            Passionate about creating elegant solutions to complex problems.
            Specializing in web development with modern technologies and
            frameworks. Building scalable, user-centric applications that make a
            difference.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-buttons">
            <button className="btn-primary hoverable" onClick={scrollToContact}>
              Get In Touch
            </button>
            <a href={cvPdf} download className="btn-secondary hoverable">
              <FiDownload /> Download CV
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-social">
            <a
              href="https://github.com/Sibgatul-Hassen"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link hoverable"
            >
              <FiGithub />
            </a>
            <a
              href="mailto:sibgatulhassen@gmail.com"
              className="social-link hoverable"
            >
              <FiMail />
            </a>
            <a
              href="https://www.linkedin.com/in/sibgatul-hassen-456882282/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link hoverable"
            >
              <FiLinkedin />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="image-wrapper">
            <motion.div
              className="image-glow"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="profile-image">
              <img
                src={profileImage}
                alt="Sibgatul Hassen"
                className="profile-photo"
                onError={(e) => {
                  console.log("Image failed to load");
                  e.target.style.display = "none";
                }}
                onLoad={() => console.log("Image loaded successfully")}
              />
            </div>

            {/* Floating Elements */}
            <motion.div
              className="floating-element element-1"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              💻
            </motion.div>

            <motion.div
              className="floating-element element-2"
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🚀
            </motion.div>

            <motion.div
              className="floating-element element-3"
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ⚡
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="mouse">
          <div className="wheel" />
        </div>
        <p>Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default Hero;

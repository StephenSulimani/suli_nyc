import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../constants/animation";
import { githubClick, linkedInClick } from "../constants/events";

export function Contact() {
  return (
    <motion.section
      id="contact"
      className="section section-contact"
      aria-labelledby="contact-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={containerVariants}
    >
      <motion.h2
        id="contact-heading"
        className="section-title"
        variants={itemVariants}
      >
        Get in touch
      </motion.h2>
      <motion.div className="contact-content" variants={itemVariants}>
        <p>
          Open to opportunities in quantitative development and software
          engineering.
        </p>
        <div className="contact-links">
          <a href="mailto:stephens@gatech.edu" className="contact-link">
            stephens@gatech.edu
          </a>
          <a href="tel:+19179296939" className="contact-link">
            917-929-6939
          </a>
          <a
            href="https://github.com/StephenSulimani"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            onClick={() => {
              githubClick("Contact");
            }}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/stephensulimani"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            onClick={() => {
              linkedInClick();
            }}
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}

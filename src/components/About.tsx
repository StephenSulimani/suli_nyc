import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../constants/animation'

export function About() {
  return (
    <motion.section
      id="about"
      className="section"
      aria-labelledby="about-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariants}
    >
      <motion.h2 id="about-heading" className="section-title" variants={itemVariants}>
        About
      </motion.h2>
      <motion.div className="section-content about-content" variants={itemVariants}>
        <p className="about-lead">
          MS candidate in Quantitative and Computational Finance at Georgia Tech, with a background
          in computer science and software engineering.
        </p>
        <p>
          Actively seeking internships in quantitative development and software engineering.
        </p>
      </motion.div>
    </motion.section>
  )
}

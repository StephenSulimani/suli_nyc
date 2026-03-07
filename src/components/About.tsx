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
          I'm an MS candidate in Quantitative and Computational Finance at Georgia Tech, blending a strong foundation in computer science with a passion for systematic markets.
        </p>
        <p>
          Whether I'm engineering high-performance APIs, building stunning interactive interfaces, or researching statistical arbitrage strategies, I love diving deep into complex problems.
        </p>
        <p>
          I'm actively seeking opportunities in quantitative development and software engineering where I can build fast, resilient systems and tackle challenging data.
        </p>
      </motion.div>
    </motion.section>
  )
}

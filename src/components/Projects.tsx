import { motion } from 'framer-motion'
import { projects } from '../data'
import { containerVariants, itemVariants } from '../constants/animation'

export function Projects() {
  return (
    <motion.section
      id="projects"
      className="section"
      aria-labelledby="projects-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariants}
    >
      <motion.h2 id="projects-heading" className="section-title" variants={itemVariants}>
        Projects
      </motion.h2>
      <ul className="project-grid">
        {projects.map((project) => (
          <motion.li
            key={project.name}
            className="project-card"
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              <div className="project-card-header">
                <span className="project-card-name">{project.name}</span>
                <span className="project-card-meta">
                  {project.language} · {project.updated}
                </span>
              </div>
              <p className="project-card-description">{project.description}</p>
              <div className="project-card-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-pill">
                    {t}
                  </span>
                ))}
              </div>
              <span className="project-card-arrow" aria-hidden>
                →
              </span>
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  )
}

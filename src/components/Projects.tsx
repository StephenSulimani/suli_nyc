import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data'
import { containerVariants, itemVariants } from '../constants/animation'

type ProjectType = typeof projects[0]

export function Projects() {
  const [activeProject, setActiveProject] = useState<ProjectType | null>(null)

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [activeProject])
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
            layoutId={`project-${project.name}`}
            className="project-card"
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setActiveProject(project)}
            style={{ cursor: 'pointer' }}
          >
            <motion.div layoutId={`project-inner-${project.name}`} className="project-card-link">
              <div className="project-card-header">
                <motion.span layoutId={`project-title-${project.name}`} className="project-card-name">{project.name}</motion.span>
                <motion.span layoutId={`project-meta-${project.name}`} className="project-card-meta">
                  {project.language} · {project.updated}
                </motion.span>
              </div>
              <motion.p layoutId={`project-desc-${project.name}`} className="project-card-description">{project.description}</motion.p>
              <motion.div layoutId={`project-tech-${project.name}`} className="project-card-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-pill">
                    {t}
                  </span>
                ))}
              </motion.div>
              <span className="project-card-arrow" aria-hidden>
                +
              </span>
            </motion.div>
          </motion.li>
        ))}
      </ul>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              layoutId={`project-${activeProject.name}`}
              className="project-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div layoutId={`project-inner-${activeProject.name}`} className="project-modal-content">
                <button className="modal-close" onClick={() => setActiveProject(null)}>×</button>
                <div className="project-modal-header">
                  <motion.h3 layoutId={`project-title-${activeProject.name}`} className="project-modal-name">{activeProject.name}</motion.h3>
                  <motion.span layoutId={`project-meta-${activeProject.name}`} className="project-modal-meta">
                    {activeProject.language} · {activeProject.updated}
                  </motion.span>
                </div>
                
                <motion.p layoutId={`project-desc-${activeProject.name}`} className="project-modal-description">
                  {activeProject.longDescription || activeProject.description}
                </motion.p>
                
                <motion.div layoutId={`project-tech-${activeProject.name}`} className="project-modal-tech">
                  {activeProject.tech.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="project-modal-links"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <a href={activeProject.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View Project
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

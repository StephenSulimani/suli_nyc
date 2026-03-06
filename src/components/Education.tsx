import { motion } from 'framer-motion'
import { education } from '../data'
import { containerVariants, itemVariants } from '../constants/animation'

export function Education() {
  return (
    <motion.section
      id="education"
      className="section"
      aria-labelledby="education-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariants}
    >
      <motion.h2 id="education-heading" className="section-title" variants={itemVariants}>
        Education
      </motion.h2>
      <div className="cv-timeline">
        {education.map((edu) => (
          <motion.article
            key={`${edu.institution}-${edu.period}`}
            className="cv-entry"
            variants={itemVariants}
          >
            <div className="cv-entry-header">
              {edu.logo && (
                <img
                  src={edu.logo}
                  alt=""
                  className="cv-entry-logo"
                  width={56}
                  height={56}
                />
              )}
              <div className="cv-entry-header-text">
                <h3 className="cv-entry-title">{edu.degree}</h3>
                <p className="cv-entry-org">{edu.institution}</p>
              </div>
              <div className="cv-entry-meta">
                <span className="cv-entry-period">{edu.period}</span>
                <span className="cv-entry-location">{edu.location}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

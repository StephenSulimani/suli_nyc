import { motion } from 'framer-motion'
import { experience } from '../data'
import { containerVariants, itemVariants } from '../constants/animation'

export function Experience() {
  return (
    <motion.section
      id="experience"
      className="section"
      aria-labelledby="experience-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariants}
    >
      <motion.h2 id="experience-heading" className="section-title" variants={itemVariants}>
        Experience
      </motion.h2>
      <div className="cv-timeline">
        {experience.map((exp) => (
          <motion.article
            key={`${exp.company}-${exp.period}`}
            className="cv-entry"
            variants={itemVariants}
          >
            <div className="cv-entry-header">
              {exp.logo && (
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="cv-entry-logo"
                  width={56}
                  height={56}
                  loading="lazy"
                />
              )}
              <div className="cv-entry-header-text">
                <h3 className="cv-entry-title">{exp.role}</h3>
                <p className="cv-entry-org">{exp.company}</p>
              </div>
              <div className="cv-entry-meta">
                <span className="cv-entry-period">{exp.period}</span>
                <span className="cv-entry-location">{exp.location}</span>
              </div>
            </div>
            <ul className="cv-entry-details">
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}

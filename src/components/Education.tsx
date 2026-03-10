import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { education } from '../data'
import { containerVariants, itemVariants } from '../constants/animation'

type EducationType = typeof education[0]

export function Education() {
  const [activeEdu, setActiveEdu] = useState<EducationType | null>(null)

  useEffect(() => {
    if (activeEdu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [activeEdu])
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
            layoutId={`edu-${edu.institution}`}
            className="cv-entry"
            variants={itemVariants}
            onClick={() => setActiveEdu(edu)}
            whileHover={{ scale: 1.01, backgroundColor: 'var(--color-bg-elevated)' }}
            style={{ cursor: 'pointer', borderRadius: '12px', transition: 'background-color 0.2s', position: 'relative' }}
          >
            <motion.div layoutId={`edu-inner-${edu.institution}`} className="cv-entry-header">
              {edu.logo && (
                <motion.img
                  layoutId={`edu-logo-${edu.institution}`}
                  src={edu.logo}
                  alt=""
                  className="cv-entry-logo"
                  width={56}
                  height={56}
                  loading="lazy"
                />
              )}
              <div className="cv-entry-header-text">
                <motion.h3 layoutId={`edu-title-${edu.institution}`} className="cv-entry-title">{edu.degree}</motion.h3>
                <motion.p layoutId={`edu-org-${edu.institution}`} className="cv-entry-org">{edu.institution}</motion.p>
              </div>
              <div className="cv-entry-meta">
                <motion.span layoutId={`edu-period-${edu.institution}`} className="cv-entry-period">{edu.period}</motion.span>
                <motion.span layoutId={`edu-location-${edu.institution}`} className="cv-entry-location">{edu.location}</motion.span>
              </div>
              <span className="project-card-arrow" aria-hidden>
                +
              </span>
            </motion.div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {activeEdu && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveEdu(null)}
          >
            <motion.div
              layoutId={`edu-${activeEdu.institution}`}
              className="project-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div layoutId={`edu-inner-${activeEdu.institution}`} className="project-modal-content">
                <button className="modal-close" onClick={() => setActiveEdu(null)}>×</button>
                <div className="project-modal-header" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                   {activeEdu.logo && (
                    <motion.img
                      layoutId={`edu-logo-${activeEdu.institution}`}
                      src={activeEdu.logo}
                      alt=""
                      className="cv-entry-logo"
                      width={80}
                      height={80}
                      style={{ flexShrink: 0 }}
                      loading="lazy"
                    />
                  )}
                  <div>
                    <motion.h3 layoutId={`edu-title-${activeEdu.institution}`} className="project-modal-name" style={{ fontSize: '2rem' }}>
                      {activeEdu.degree}
                    </motion.h3>
                    <motion.p layoutId={`edu-org-${activeEdu.institution}`} className="project-modal-meta" style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                      {activeEdu.institution}
                    </motion.p>
                    <div style={{ display: 'flex', gap: '1rem', color: '#a1a1aa' }}>
                      <motion.span layoutId={`edu-period-${activeEdu.institution}`}>{activeEdu.period}</motion.span>
                      <span>•</span>
                      <motion.span layoutId={`edu-location-${activeEdu.institution}`}>{activeEdu.location}</motion.span>
                    </div>
                  </div>
                </div>
                
                <motion.div 
                  className="project-modal-description"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {activeEdu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

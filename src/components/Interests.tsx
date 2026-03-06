import { motion } from 'framer-motion'
import { interests } from '../data'
import { containerVariants, itemVariants } from '../constants/animation'

export function Interests() {
  return (
    <motion.section
      id="interests"
      className="section section-interests"
      aria-labelledby="interests-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariants}
    >
      <motion.h2 id="interests-heading" className="section-title" variants={itemVariants}>
        Leadership & Involvement
      </motion.h2>
      <motion.div className="interests-grid" variants={itemVariants}>
        {interests.map((item) => (
          <div key={`${item.org}-${item.period}`} className="interest-item">
            <span className="interest-org">{item.org}</span>
            <span className="interest-role">{item.role}</span>
            <span className="interest-meta">
              {item.institution} · {item.period}
            </span>
          </div>
        ))}
      </motion.div>
    </motion.section>
  )
}

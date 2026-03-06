import { motion } from 'framer-motion'
import { skillCategories } from '../data'
import { containerVariants, itemVariants } from '../constants/animation'

export function Skills() {
  return (
    <motion.section
      id="skills"
      className="section"
      aria-labelledby="skills-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariants}
    >
      <motion.h2 id="skills-heading" className="section-title" variants={itemVariants}>
        Skills
      </motion.h2>
      <div className="skills-by-category">
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            className="skill-category"
            variants={itemVariants}
          >
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill) => {
                const iconSrc =
                  'localIcon' in skill && skill.localIcon
                    ? skill.localIcon
                    : `https://cdn.simpleicons.org/${skill.icon}/${skill.color.replace('#', '')}`
                return (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    variants={itemVariants}
                    whileHover={{ y: -2, transition: { duration: 0.15 } }}
                  >
                    <img
                      src={iconSrc}
                      alt=""
                      className="skill-icon"
                      width={32}
                      height={32}
                      loading="lazy"
                    />
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

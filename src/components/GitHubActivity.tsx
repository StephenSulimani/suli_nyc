import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../constants/animation'

declare global {
  interface Window {
    GitHubCalendar: (
      container: string | HTMLElement,
      username: string,
      options?: { responsive?: boolean; tooltips?: boolean; global_stats?: boolean }
    ) => Promise<Response>
  }
}

export function GitHubActivity() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || typeof window.GitHubCalendar !== 'function') return

    window
      .GitHubCalendar(containerRef.current, 'StephenSulimani', {
        responsive: true,
        tooltips: true,
        global_stats: false,
      })
      .then(() => {
        if (!containerRef.current) return
        const container = containerRef.current
        // Remove skip link and "Learn how we count contributions" link
        container
          .querySelectorAll(
            'a[href^="#year-link-"], a[href="#user-activity-overview"], a[href*="why-are-my-contributions-not-showing-up"]'
          )
          .forEach((el) => el.remove())
        // Remove contrib-footer (contains "Learn how we count contributions")
        container.querySelectorAll('.contrib-footer').forEach((el) => el.remove())
        // Remove any element that is solely "Skip to contributions year list" (can be span/div)
        container.querySelectorAll('*').forEach((el) => {
          if (el.children.length === 0 && el.textContent?.trim() === 'Skip to contributions year list') {
            el.remove()
          }
        })
      })
      .catch(() => {
        if (containerRef.current) {
          containerRef.current.innerHTML =
            '<p style="color: var(--color-ink-muted); font-size: 0.9rem;">Unable to load contribution graph. <a href="https://github.com/StephenSulimani" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>'
        }
      })
  }, [])

  return (
    <motion.section
      id="activity"
      className="section section-github-activity"
      aria-labelledby="activity-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <h2 id="activity-heading" className="section-title">
          Contributions
        </h2>
        <p className="section-github-activity-intro">
          Recent activity on{' '}
          <a
            href="https://github.com/StephenSulimani"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
        <div
          ref={containerRef}
          className="github-calendar-container"
          aria-label="GitHub contribution graph"
        >
          <span className="github-calendar-loading">Loading…</span>
        </div>
      </motion.div>
    </motion.section>
  )
}

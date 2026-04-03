import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { containerVariants, itemVariants } from '../constants/animation'
import { loadGithubCalendarAssets } from '../lib/github-calendar-loader'

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
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldLoad = useInView(sectionRef, { once: true, margin: '240px 0px' })

  useEffect(() => {
    if (!shouldLoad || !containerRef.current) return

    let cancelled = false

    loadGithubCalendarAssets()
      .then(() => {
        if (cancelled || !containerRef.current) return
        if (typeof window.GitHubCalendar !== 'function') return

        return window.GitHubCalendar(containerRef.current, 'StephenSulimani', {
          responsive: true,
          tooltips: true,
          global_stats: false,
        })
      })
      .then(() => {
        if (cancelled || !containerRef.current) return
        const container = containerRef.current
        container
          .querySelectorAll(
            'a[href^="#year-link-"], a[href="#user-activity-overview"], a[href*="why-are-my-contributions-not-showing-up"]'
          )
          .forEach((el) => el.remove())
        container.querySelectorAll('.contrib-footer').forEach((el) => el.remove())
        container.querySelectorAll('*').forEach((el) => {
          if (el.children.length === 0 && el.textContent?.trim() === 'Skip to contributions year list') {
            el.remove()
          }
        })
      })
      .catch(() => {
        if (cancelled || !containerRef.current) return
        containerRef.current.innerHTML =
          '<p style="color: var(--color-ink-muted); font-size: 0.9rem;">Unable to load contribution graph. <a href="https://github.com/StephenSulimani" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>'
      })

    return () => {
      cancelled = true
    }
  }, [shouldLoad])

  return (
    <motion.section
      ref={sectionRef}
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

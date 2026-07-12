import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { navLinks } from '../data'

export function Nav() {
  const [isHovered, setIsHovered] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const setMenuOpen = (open: boolean) => {
    setMobileMenuOpen(open)
    // Lock scroll in the click path so it isn't delayed a frame by useEffect.
    document.body.style.overflow = open ? 'hidden' : ''
  }

  const closeMobileMenu = () => setMenuOpen(false)

  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <nav className="nav">
      {/* Blur + entrance motion stay on the bar only — fixed drawer/backdrop
          must not sit under transform/filter or they clip to the header. */}
      <motion.div
        className="nav-bar"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <div className="nav-inner">
          <a
            href="#"
            className="nav-logo"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={closeMobileMenu}
          >
            <span className="nav-logo-text nav-logo-wrapper">
              <motion.span
                className="nav-logo-inner"
                initial={false}
                animate={{
                  opacity: isHovered ? 0 : 1,
                  y: isHovered ? -4 : 0,
                }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                Stephen
              </motion.span>
              <motion.span
                className="nav-logo-inner nav-logo-overlay"
                initial={false}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 4,
                }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                Suli
              </motion.span>
            </span>
          </a>

          <button
            type="button"
            className="nav-toggle"
            onClick={() => setMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
        </div>
      </motion.div>

      <ul className={`nav-links ${mobileMenuOpen ? 'nav-links-open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="nav-link"
              onClick={closeMobileMenu}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div
        className={`nav-backdrop ${mobileMenuOpen ? 'nav-backdrop-open' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden
      />
    </nav>
  )
}

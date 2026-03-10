import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { navLinks } from '../data'

interface NavProps {
  onLogoHover?: (hovered: boolean) => void
}

export function Nav({ onLogoHover }: NavProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const setHovered = (hovered: boolean) => {
    setIsHovered(hovered)
    onLogoHover?.(hovered)
  }

  const closeMobileMenu = () => setMobileMenuOpen(false)

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <motion.nav
      className="nav"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="nav-inner">
        <a
          href="#"
          className="nav-logo"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
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
          onClick={() => setMobileMenuOpen((o) => !o)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

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
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMobileMenu}
            aria-hidden
          />
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

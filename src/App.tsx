import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Hero,
  HeroBackground,
  Nav,
  About,
  Education,
  Experience,
  Projects,
  Interests,
  Skills,
  GitHubActivity,
  Contact,
  Footer,
} from './components'
import './App.css'

function App() {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 60])

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let rafId: number | undefined
    const handleMouseMove = (e: MouseEvent) => {
      rafId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2
        const y = (e.clientY / window.innerHeight - 0.5) * 2
        setMousePos({ x, y })
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafId != null) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="portfolio">
      <HeroBackground mousePos={mousePos} />

      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
        aria-hidden
      />

      <Nav />

      <Hero
        style={{
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
        }}
      />

      <main className="main-content">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Interests />
        <Skills />
        <GitHubActivity />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App

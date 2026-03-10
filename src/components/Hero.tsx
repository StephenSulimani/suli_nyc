import { motion, type MotionProps } from "framer-motion";
import { headshotUrl } from "../data";
import { githubClick, resumeEvent } from "../constants/events";

interface HeroProps {
  style: MotionProps["style"];
}

export function Hero({ style }: HeroProps) {
  return (
    <motion.header className="hero" style={style}>
      <div className="hero-inner">
        <motion.img
          src={headshotUrl}
          alt="Stephen Sulimani"
          className="hero-headshot"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />
        <motion.p
          className="hero-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          MS-QCF Candidate · Georgia Tech
        </motion.p>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.35,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
          }}
        >
          Stephen
          <br />
          <span className="hero-title-accent">Sulimani</span>
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          Quantitative Development · Software Engineering Atlanta, GA · New
          York, NY
        </motion.p>
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.a
            href="https://drive.google.com/file/d/1z1PIiWomIee49taYWGtjdmhBltSdjqDY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => resumeEvent()}
          >
            Résumé
          </motion.a>
          <motion.a
            href="https://github.com/StephenSulimani"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => githubClick("Hero")}
          >
            GitHub
          </motion.a>
        </motion.div>
      </div>
    </motion.header>
  );
}

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, experience, education } from '../data'

interface TerminalProps {
  isOpen: boolean
  onClose: () => void
}

interface CommandHistory {
  cmd: string
  output: React.ReactNode
}

export function Terminal({ isOpen, onClose }: TerminalProps) {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      cmd: '',
      output: (
        <div>
          Welcome to SULI-OS v1.0.0.
          <br />
          Type <span className="text-accent">help</span> to see available commands.
        </div>
      )
    }
  ])
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    let output: React.ReactNode = ''

    if (trimmed === '') {
      // Do nothing
    } else if (trimmed === 'help') {
      output = (
        <div>
          Available commands:
          <br />
          <span className="text-accent">whoami</span> - Get to know me
          <br />
          <span className="text-accent">projects</span> - List portfolio projects
          <br />
          <span className="text-accent">exp</span> - List work experience
          <br />
          <span className="text-accent">edu</span> - List education
          <br />
          <span className="text-accent">clear</span> - Clear terminal
          <br />
          <span className="text-accent">exit</span> - Close terminal
          <br />
          <span className="text-accent">sudo</span> - Run with elevated privileges
        </div>
      )
    } else if (trimmed === 'whoami') {
      output = 'Stephen Sulimani - MS-QCF Candidate & Software Engineer.'
    } else if (trimmed === 'diamond') {
      output = 'Hi Ma!'
    } else if (trimmed === 'projects') {
      output = (
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          {projects.map((p) => (
            <li key={p.name}>
              <span className="text-accent">{p.name}</span> - {p.language}
            </li>
          ))}
        </ul>
      )
    } else if (trimmed === 'exp') {
      output = (
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          {experience.map((e) => (
            <li key={`${e.company}-${e.period}`}>
              <span className="text-accent">{e.company}</span> ({e.role})
            </li>
          ))}
        </ul>
      )
    } else if (trimmed === 'edu') {
      output = (
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          {education.map((e) => (
            <li key={e.institution}>
              <span className="text-accent">{e.institution}</span>
            </li>
          ))}
        </ul>
      )
    } else if (trimmed === 'clear') {
      setHistory([])
      return
    } else if (trimmed === 'exit') {
      onClose()
      return
    } else if (trimmed.startsWith('sudo ')) {
      output = 'Nice try. This incident will be reported.'
    } else {
      output = `Command not found: ${trimmed}. Type 'help' for a list of commands.`
    }

    setHistory((prev) => [...prev, { cmd, output }])
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input)
      setInput('')
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="terminal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="terminal-window"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="term-btn term-close" onClick={onClose} />
                <span className="term-btn term-min" />
                <span className="term-btn term-max" />
              </div>
              <div className="terminal-title">guest@suli-os: ~</div>
              <div style={{ width: 44 }} /> {/* Spacer to balance flex header */}
            </div>

            <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
              {history.map((item, index) => (
                <div key={index} className="terminal-history-item">
                  {item.cmd && (
                    <div className="terminal-prompt-line">
                      <span className="prompt-arrow">➜</span>
                      <span className="prompt-path">~</span>
                      <span className="prompt-cmd">{item.cmd}</span>
                    </div>
                  )}
                  <div className="terminal-output">{item.output}</div>
                </div>
              ))}

              <div className="terminal-input-line">
                <span className="prompt-arrow">➜</span>
                <span className="prompt-path">~</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoComplete="off"
                  spellCheck="false"
                  className="terminal-input"
                />
              </div>
              <div ref={bottomRef} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

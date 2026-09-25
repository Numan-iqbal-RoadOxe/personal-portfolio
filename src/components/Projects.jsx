import { useState } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { projects } from '../data/projects'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Projects() {
  const [active, setActive] = useState(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { damping: 24, stiffness: 260, mass: 0.5 })
  const springY = useSpring(y, { damping: 24, stiffness: 260, mass: 0.5 })

  const handleMove = (e) => {
    x.set(e.clientX + 24)
    y.set(e.clientY - 100)
  }

  const activeProject = projects.find((p) => p.id === active)

  return (
    <section className="section" id="work" onMouseMove={handleMove}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={reveal}
        >
          <div className="eyebrow-label">Selected work</div>
          <h2 className="section-heading" style={{ marginTop: 14 }}>
            A few products I&apos;ve helped build, ship, and scale.
          </h2>
        </motion.div>

        <motion.div
          className="projects-list"
          style={{ marginTop: 60 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={reveal}
        >
          {projects.map((p, i) => (
            <div
              className="project-row"
              key={p.id}
              data-cursor="hover"
              onMouseEnter={() => setActive(p.id)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="project-index">0{i + 1}</div>
              <div className="project-main">
                <h3>{p.name}</h3>
                <div className="project-meta">
                  <span>{p.role}</span>
                  <span>{p.year}</span>
                </div>
                <div className="project-stack">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
              <div className="project-arrow"><FiArrowUpRight /></div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="project-preview"
        style={{ x: springX, y: springY }}
        animate={{
          opacity: activeProject ? 1 : 0,
          scale: activeProject ? 1 : 0.9,
        }}
        transition={{ duration: 0.3 }}
      >
        <AnimatePresence mode="wait">
          {activeProject && (
            <motion.div
              key={activeProject.id}
              className="project-preview-inner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                background: `linear-gradient(135deg, ${activeProject.color}55, #0a0e1a 80%)`,
                display: 'flex',
                alignItems: 'flex-end',
                padding: 18,
              }}
            >
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: '#f1efe9' }}>
                {activeProject.blurb}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

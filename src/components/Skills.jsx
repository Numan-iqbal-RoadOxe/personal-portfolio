import { motion } from 'framer-motion'
import { FiCode, FiFeather, FiLayers, FiZap } from 'react-icons/fi'

const marqueeItems = [
  'React', 'TypeScript', 'Framer Motion', 'Node.js', 'GraphQL', 'WebGL', 'Next.js', 'Accessibility',
]

const capabilities = [
  {
    icon: <FiCode />,
    title: 'Engineering',
    body: 'Component architecture, performance budgets, and type-safe codebases built to outlast a redesign.',
  },
  {
    icon: <FiFeather />,
    title: 'Motion design',
    body: 'Spring-based interactions that communicate state changes instead of decorating the page.',
  },
  {
    icon: <FiLayers />,
    title: 'Design systems',
    body: 'Tokenized, themeable UI kits that keep a growing product visually consistent.',
  },
  {
    icon: <FiZap />,
    title: 'Performance',
    body: 'Bundle-splitting, image pipelines, and render profiling to keep Lighthouse in the high 90s.',
  },
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Skills() {
  return (
    <section className="section" id="skills" style={{ paddingBottom: 0 }}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={reveal}
        >
          <div className="eyebrow-label">Capabilities</div>
          <h2 className="section-heading" style={{ marginTop: 14 }}>
            The tools I reach for, and the outcomes they buy you.
          </h2>
        </motion.div>

        <motion.div
          className="skills-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={reveal}
        >
          {capabilities.map((c) => (
            <div className="skill-cell" key={c.title}>
              <div className="skill-cell-icon">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="skills-marquee" style={{ marginTop: 90 }}>
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={`${item}-${i}`}><em>✦</em>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

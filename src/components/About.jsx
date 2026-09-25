import { motion } from "framer-motion"

const experience = [
  { year: "2024 — Now", role: "Software Engineer", org: "Devfied" },
  {
    year: "2022 — 2024",
    role: "Associate Software Engineer",
    org: "Roomcoders",
  },
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={reveal}
        >
          <div className="eyebrow-label">About</div>
          <h2 className="section-heading" style={{ marginTop: 14 }}>
            Four years of shipping solutions that solve real problems.
          </h2>
        </motion.div>

        <div>
          <motion.div
            className="about-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={reveal}
          >
            <p>
              I&apos;m a software engineer based in Lahore, Pakistan, with four
              years of hands-on experience using technology to solve real-world
              problems. I care about clean code and efficient APIs as much as
              the interfaces they power.
            </p>
            <p>
              My work spans the full <strong>MERN stack</strong> — from building
              real-time copy-trading platforms to Shopify plugins and internal
              financial dashboards — and I&apos;m always looking to learn,
              sharpen my skills, and make a meaningful impact on the teams I
              work with.
            </p>
          </motion.div>

          <motion.div
            className="timeline"
            style={{ marginTop: 44 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={reveal}
          >
            {experience.map((e) => (
              <div className="timeline-item" key={e.role}>
                <div className="timeline-year">{e.year}</div>
                <div className="timeline-role">{e.role}</div>
                <div className="timeline-org">{e.org}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

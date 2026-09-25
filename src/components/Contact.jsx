import { motion } from "framer-motion"
import { FiArrowUpRight, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          className="contact-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={reveal}
        >
          <div className="aurora aurora-a" style={{ top: -100, left: -60 }} />
          <div className="aurora aurora-b" style={{ top: 40, right: -80 }} />

          <div
            className="eyebrow-label"
            style={{ position: "relative", zIndex: 1 }}
          >
            Get in touch
          </div>
          <h2 className="contact-title">
            Have a project in mind?
            <br />
            Let&apos;s build it well.
          </h2>
          <p className="contact-sub">
            I&apos;m currently open to new opportunities and select freelance
            engagements. Reach out — I reply within a day, always.
          </p>
          <a
            href="mailto:rananoumaniqbal@gmail.com"
            className="contact-email"
            data-cursor="hover"
          >
            rananoumaniqbal@gmail.com <FiArrowUpRight />
          </a>

          <div className="contact-socials">
            <a
              href="https://github.com"
              data-cursor="hover"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/iamnumaniqbal/"
              data-cursor="hover"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://twitter.com"
              data-cursor="hover"
              aria-label="Twitter"
            >
              <FiTwitter />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

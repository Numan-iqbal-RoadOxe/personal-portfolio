import { motion } from "framer-motion"
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi"

const lineVariants = {
  hidden: { y: "110%" },
  visible: (i) => ({
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  }),
}

const fade = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
})

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="aurora aurora-a" />
        <div className="aurora aurora-b" />
        <div className="aurora aurora-c" />
        <div className="grain" />
      </div>

      <div className="container hero-grid">
        <div>
          <motion.div
            className="hero-kicker"
            initial="hidden"
            animate="visible"
            variants={fade(0)}
          >
            <span className="status-dot" />
            Available for freelance &amp; full-time roles
          </motion.div>

          <h1 className="hero-title">
            {["Building interfaces", "that feel alive."].map((line, i) => (
              <span className="line" key={line} style={{ display: "block" }}>
                <motion.span
                  style={{ display: "inline-block" }}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={lineVariants}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="hero-sub"
            initial="hidden"
            animate="visible"
            variants={fade(0.6)}
          >
            I&apos;m Numan Iqbal — a software engineer with 4 years turning
            real-world problems into fast, efficient web applications that
            clients rely on.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial="hidden"
            animate="visible"
            variants={fade(0.75)}
          >
            <a href="#work" className="btn btn-solid" data-cursor="hover">
              View my work <FiArrowUpRight />
            </a>
            <a href="#contact" className="btn btn-outline" data-cursor="hover">
              Start a project
            </a>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial="hidden"
            animate="visible"
            variants={fade(0.9)}
          >
            <div>
              <div className="hero-stat-num">4+</div>
              <div className="hero-stat-label">Years experience</div>
            </div>
            <div>
              <div className="hero-stat-num">4+</div>
              <div className="hero-stat-label">Projects shipped</div>
            </div>
            <div>
              <div className="hero-stat-num">70%</div>
              <div className="hero-stat-label">Avg. app performance boost</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="orbit-ring r1"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="orbit-ring r2"
            animate={{ rotate: -360 }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          >
            <span
              className="orbit-node"
              style={{ top: -23, left: "50%", marginLeft: -23 }}
            >
              ⚛️
            </span>
            <span className="orbit-node" style={{ bottom: -23, right: 40 }}>
              ✦
            </span>
          </motion.div>

          <div className="code-card">
            <div className="code-dots">
              <span />
              <span />
              <span />
            </div>
            <div>
              <span className="code-cm">// portfolio.jsx</span>
              <br />
              <span className="code-kw">const</span>{" "}
              <span className="code-fn">craft</span> = () =&gt; {"{"}
              <br />
              &nbsp;&nbsp;<span className="code-kw">return</span>{" "}
              <span className="code-str">
                &apos;delight + performance&apos;
              </span>
              <br />
              {"}"}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="scroll-line" />
        Scroll <FiArrowDown />
      </motion.div>
    </section>
  )
}

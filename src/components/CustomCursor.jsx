import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)
  const ringX = useSpring(dotX, { damping: 28, stiffness: 320, mass: 0.4 })
  const ringY = useSpring(dotY, { damping: 28, stiffness: 320, mass: 0.4 })

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!canHover) return
    setEnabled(true)
    document.body.classList.add('has-custom-cursor')

    const move = (e) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
    }
    const over = (e) => {
      setHovering(!!e.target.closest('a, button, [data-cursor="hover"]'))
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [dotX, dotY])

  if (!enabled) return null

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x: dotX, y: dotY }}
        animate={{ scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: hovering ? 1.8 : 1,
          borderColor: hovering ? 'rgba(124,255,203,0.9)' : 'rgba(241,239,233,0.5)',
        }}
        transition={{ duration: 0.25 }}
      />
    </>
  )
}

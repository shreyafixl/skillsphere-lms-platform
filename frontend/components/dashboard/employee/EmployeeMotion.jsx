"use client"

import { motion, useReducedMotion } from "framer-motion"

const easeOut = [0.22, 1, 0.36, 1]

export function EmployeePageSection({ children, className = "" }) {
  const reduceMotion = useReducedMotion()
  if (reduceMotion) return <div className={className}>{children}</div>
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function EmployeeStaggerGrid({ children, className = "" }) {
  const reduceMotion = useReducedMotion()
  if (reduceMotion) return <div className={className}>{children}</div>
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function EmployeeStaggerItem({ children, className = "" }) {
  const reduceMotion = useReducedMotion()
  if (reduceMotion) return <div className={className}>{children}</div>
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOut } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

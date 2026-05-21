"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

export const easeOut = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 28,
}) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px" }}
      transition={{ duration: 0.55, delay, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, className }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-48px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  )
}

export function HeroStagger({ children, className }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function HeroItem({ children, className }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  )
}

export function FloatingCard({ children, className, delay = 0 }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
        scale: 1,
      }}
      transition={{
        opacity: { duration: 0.6, delay, ease: easeOut },
        scale: { duration: 0.6, delay, ease: easeOut },
        y: {
          duration: 5 + delay,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.6,
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function AnalyticsCard({ children, className }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.65, delay: 0.15, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FeatureCard({ icon, title, description, className }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return (
      <div
        className={cn(
          "rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-xl backdrop-blur-xl",
          className
        )}
      >
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-3xl transition-transform">
          {icon}
        </div>
        <h3 className="mb-3 text-2xl font-bold text-slate-900">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    )
  }

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: easeOut }}
      className={cn(
        "group rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-xl backdrop-blur-xl",
        "transition-shadow duration-300 hover:border-violet-200/80 hover:shadow-2xl hover:shadow-violet-500/10",
        className
      )}
    >
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.3, ease: easeOut }}
        className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-3xl"
      >
        {icon}
      </motion.div>
      <h3 className="mb-3 text-2xl font-bold text-slate-900">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </motion.div>
  )
}

export function PricingCard({
  children,
  className,
  featured = false,
}) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      whileHover={{ scale: featured ? 1.03 : 1.02, y: -4 }}
      transition={{ duration: 0.3, ease: easeOut }}
      className={cn(
        "relative overflow-hidden rounded-2xl transition-shadow duration-300",
        featured &&
          "shadow-xl shadow-violet-500/25 ring-2 ring-violet-400/50 ring-offset-2 ring-offset-transparent",
        !featured && "hover:shadow-xl hover:shadow-slate-900/5",
        className
      )}
    >
      {featured && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-400/20 to-fuchsia-400/10"
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <div className="relative">{children}</div>
    </motion.div>
  )
}

export function MotionCTA({ children, className, variant = "primary" }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25, ease: easeOut }}
      className={cn(
        "inline-flex",
        variant === "glow" &&
          "rounded-xl shadow-lg shadow-orange-500/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-orange-500/35",
        variant === "outline-glow" &&
          "rounded-xl transition-shadow duration-300 hover:shadow-md hover:shadow-violet-500/15",
        className
      )}
    >
      {children}
    </motion.div>
  )
}

"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import { polish, GradientSurface } from "@/components/landing/polish"

export const easeOut = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.12 },
  },
}

const heroLine = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: easeOut },
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
      variants={heroStagger}
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
    <motion.div variants={heroLine} className={className}>
      {children}
    </motion.div>
  )
}

export function HeroHeading({ children, className }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <h1 className={className}>{children}</h1>
  }

  return (
    <motion.div variants={heroLine} className="w-full">
      <motion.h1
        variants={heroStagger}
        initial="hidden"
        animate="visible"
        className={className}
      >
        {children}
      </motion.h1>
    </motion.div>
  )
}

export function HeroHeadingLine({ children, className }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <span className={cn("block", className)}>{children}</span>
  }

  return (
    <motion.span variants={heroLine} className={cn("block", className)}>
      {children}
    </motion.span>
  )
}

export function HeroCTA({ children, className, variant = "primary" }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.28, ease: easeOut }}
      className={cn(
        "inline-flex",
        variant === "glow" &&
          "group rounded-xl shadow-lg shadow-orange-500/20 transition-shadow duration-300 ease-out hover:shadow-xl hover:shadow-orange-500/30",
        variant === "outline-glow" &&
          "rounded-xl transition-shadow duration-300 ease-out hover:shadow-md hover:shadow-violet-500/12",
        className
      )}
    >
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
      initial={{ opacity: 0, y: 12, scale: 0.98 }}
      animate={{
        opacity: 1,
        y: [0, -6, 0],
        scale: 1,
      }}
      transition={{
        opacity: { duration: 0.55, delay, ease: easeOut },
        scale: { duration: 0.55, delay, ease: easeOut },
        y: {
          duration: 6 + delay * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.55,
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
      initial={{ opacity: 0, y: 18, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FeatureCard({ icon, title, description, className }) {
  const reduceMotion = useReducedMotion()

  const content = (
    <>
      <div
        className={cn(
          "mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-fuchsia-50 text-3xl",
          polish.iconBadge
        )}
      >
        {icon}
      </div>
      <h3 className="mb-3 text-2xl font-bold text-slate-900">{title}</h3>
      <p className="leading-relaxed text-slate-600">{description}</p>
    </>
  )

  if (reduceMotion) {
    return (
      <GradientSurface innerClassName={cn(polish.glassStrong, "group p-8", className)}>
        {content}
      </GradientSurface>
    )
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: easeOut }}
      className={cn("group h-full", className)}
    >
      <GradientSurface
        innerClassName={cn(
          polish.glassStrong,
          polish.cardHover,
          "p-8"
        )}
      >
        <div
          className={cn(
            "mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-100 to-fuchsia-50 text-3xl",
            polish.iconBadge
          )}
        >
          {icon}
        </div>
        <h3 className="mb-3 text-2xl font-bold text-slate-900">{title}</h3>
        <p className="leading-relaxed text-slate-600">{description}</p>
      </GradientSurface>
    </motion.div>
  )
}

export function PricingCard({
  children,
  className,
  featured = false,
}) {
  const reduceMotion = useReducedMotion()

  const inner = (
    <div
      className={cn(
        "relative h-full overflow-hidden rounded-[calc(1rem-1px)] p-7",
        featured
          ? "bg-gradient-to-br from-purple-600 to-violet-700 text-white shadow-xl shadow-violet-600/30"
          : cn(polish.glassStrong, "text-slate-900"),
        !featured && polish.cardHover,
        className
      )}
    >
      {featured && !reduceMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-fuchsia-300/10"
          animate={{ opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  )

  if (reduceMotion) {
    return (
      <GradientSurface featured={featured} className="h-full rounded-2xl">
        {inner}
      </GradientSurface>
    )
  }

  return (
    <motion.div
      whileHover={{ y: featured ? -5 : -4 }}
      transition={{ duration: 0.3, ease: easeOut }}
      className={cn(
        "h-full",
        featured && "shadow-2xl shadow-violet-500/30"
      )}
    >
      <GradientSurface
        featured={featured}
        className={cn(
          "h-full rounded-2xl",
          featured && "shadow-lg shadow-violet-500/20"
        )}
      >
        {inner}
      </GradientSurface>
    </motion.div>
  )
}

export function MotionCTA({ children, className, variant = "primary" }) {
  const reduceMotion = useReducedMotion()

  const glowClass = {
    glow: polish.ctaGlowWarm,
    "glow-violet": polish.ctaGlow,
    "glow-light": polish.ctaGlowLight,
    "outline-glow":
      "rounded-xl ring-1 ring-slate-200/80 transition-all duration-300 ease-out hover:shadow-md hover:shadow-violet-500/15 hover:ring-violet-200/80",
    primary:
      "rounded-xl shadow-md shadow-slate-900/10 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-slate-900/15",
  }[variant] ?? polish.ctaGlow

  if (reduceMotion) {
    return <div className={cn("inline-flex w-full sm:w-auto", glowClass, className)}>{children}</div>
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.28, ease: easeOut }}
      className={cn("inline-flex w-full sm:w-auto", glowClass, className)}
    >
      {children}
    </motion.div>
  )
}

export function NavLink({ href, children, className }) {
  const linkClass = cn(
    polish.navLink,
    "group py-1 hover:scale-[1.02] active:scale-[0.98] active:text-violet-700",
    className
  )
  const underline = (
    <span
      aria-hidden
      className="absolute -bottom-0.5 left-0 h-px w-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 ease-out group-hover:w-full group-focus-visible:w-full"
    />
  )

  if (href?.startsWith("#")) {
    return (
      <a href={href} className={linkClass}>
        {children}
        {underline}
      </a>
    )
  }

  return (
    <Link href={href} className={linkClass}>
      {children}
      {underline}
    </Link>
  )
}

export function DashboardCard({
  children,
  accentClassName,
  className,
  delay = 0,
}) {
  const reduceMotion = useReducedMotion()

  const card = (
    <GradientSurface
      innerClassName={cn(
        polish.glassStrong,
        "overflow-hidden transition-shadow duration-300 ease-out group-hover:shadow-xl group-hover:shadow-violet-500/10",
        className
      )}
    >
      <div
        className={cn(
          "h-1 w-full bg-gradient-to-r",
          accentClassName
        )}
      />
      <div className="p-6">{children}</div>
    </GradientSurface>
  )

  if (reduceMotion) {
    return <div className="h-full">{card}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: easeOut }}
      whileHover={{ y: -4 }}
      className="group h-full"
    >
      {card}
    </motion.div>
  )
}

export function DashboardIcon({ children, className }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return (
      <div className={cn("h-10 w-10 rounded-lg", polish.iconBadge, className)}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.25, ease: easeOut }}
      className={cn(
        "h-10 w-10 rounded-lg",
        polish.iconBadge,
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export function TestimonialCard({
  quote,
  name,
  role,
  className,
}) {
  const reduceMotion = useReducedMotion()

  const body = (
    <GradientSurface
      innerClassName={cn(
        polish.glassStrong,
        polish.cardHover,
        "p-8",
        className
      )}
    >
      <div className="mb-4 text-2xl tracking-wide text-amber-400">★★★★★</div>
      <p className="mb-6 leading-relaxed text-slate-600">&ldquo;{quote}&rdquo;</p>
      <div>
        <h4 className="text-lg font-bold text-slate-900">{name}</h4>
        <p className="text-sm text-slate-500">{role}</p>
      </div>
    </GradientSurface>
  )

  if (reduceMotion) {
    return <div className="h-full">{body}</div>
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: easeOut }}
      className="h-full"
    >
      {body}
    </motion.div>
  )
}

export function DashboardMockupWrap({ children, className }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return (
      <div
        className={cn(
          "relative rounded-[32px]",
          polish.mockupShadow,
          className
        )}
      >
        {children}
      </div>
    )
  }

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.35, ease: easeOut }}
      className={cn(
        "relative rounded-[32px] transition-shadow duration-300 ease-out hover:shadow-indigo-900/30",
        polish.mockupShadow,
        className
      )}
    >
      {children}
    </motion.div>
  )
}

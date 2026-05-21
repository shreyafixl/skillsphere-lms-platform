import { cn } from "@/lib/utils"

/** Shared Tailwind polish tokens for the landing page */
export const polish = {
  glass:
    "border border-white/60 bg-white/75 shadow-lg shadow-slate-900/[0.04] backdrop-blur-xl",
  glassStrong:
    "border border-white/70 bg-white/85 shadow-xl shadow-slate-900/[0.06] backdrop-blur-xl",
  cardHover:
    "transition-all duration-300 ease-out hover:-translate-y-1 hover:border-violet-200/70 hover:shadow-xl hover:shadow-violet-500/10",
  gradientRing:
    "bg-gradient-to-br from-violet-200/90 via-fuchsia-100/60 to-cyan-100/40",
  gradientRingFeatured:
    "bg-gradient-to-br from-violet-400 via-fuchsia-400 to-indigo-400",
  iconBadge:
    "flex items-center justify-center rounded-xl transition-transform duration-300 ease-out group-hover:scale-105",
  ctaGlow:
    "rounded-xl shadow-lg shadow-violet-500/25 ring-1 ring-violet-400/15 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-violet-500/35 hover:ring-violet-400/25",
  ctaGlowWarm:
    "rounded-xl shadow-lg shadow-orange-500/25 ring-1 ring-orange-400/15 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-orange-500/35",
  ctaGlowLight:
    "rounded-xl shadow-lg shadow-white/25 ring-1 ring-white/30 transition-all duration-300 ease-out hover:shadow-xl hover:shadow-white/40",
  navLink:
    "relative text-sm font-medium text-slate-600 transition-colors duration-300 ease-out hover:text-violet-600",
  mockupShadow:
    "shadow-2xl shadow-indigo-900/20 ring-1 ring-white/10",
}

export function GradientSurface({
  children,
  className,
  innerClassName,
  featured = false,
}) {
  return (
    <div
      className={cn(
        "rounded-3xl p-px",
        featured ? polish.gradientRingFeatured : polish.gradientRing,
        className
      )}
    >
      <div className={cn("h-full w-full rounded-[calc(1.5rem-1px)]", innerClassName)}>
        {children}
      </div>
    </div>
  )
}

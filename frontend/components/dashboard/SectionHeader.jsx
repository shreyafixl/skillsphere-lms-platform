"use client"

import { cn } from "@/lib/utils"

export default function SectionHeader({
  title,
  subtitle,
  action,
  compact = false,
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between",
        compact ? "mb-3" : "mb-5 gap-3"
      )}
    >
      <div>
        <h2
          className={cn(
            "font-semibold tracking-tight text-slate-900 dark:text-slate-100",
            compact ? "text-sm" : "text-lg"
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              "text-slate-500 dark:text-slate-400",
              compact ? "mt-0.5 text-xs" : "mt-0.5 text-sm"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}

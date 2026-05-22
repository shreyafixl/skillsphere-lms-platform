"use client"

import { cn } from "@/lib/utils"

export default function PageHeader({ title, description, action, compact = false }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
        compact && "gap-2"
      )}
    >
      <div>
        <h1
          className={cn(
            "font-bold tracking-tight text-slate-900 dark:text-slate-50",
            compact ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"
          )}
        >
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "max-w-2xl text-slate-500 dark:text-slate-400",
              compact ? "mt-0.5 text-xs sm:text-sm" : "mt-1 text-sm sm:text-base"
            )}
          >
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}

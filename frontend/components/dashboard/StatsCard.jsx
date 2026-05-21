"use client"

import { TrendingDown, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

export default function StatsCard({
  title,
  value,
  growth,
  growthLabel = "vs last month",
  icon,
  iconBg,
  iconColor,
  trend = "up",
}) {
  const isPositive = trend === "up"

  return (
    <div
      className={cn(
        "group rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm",
        "transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/10",
        "dark:border-slate-800/80 dark:bg-slate-900/90 dark:hover:border-violet-500/30 dark:hover:shadow-violet-500/10",
        "sm:p-6"
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {title}
          </p>
          <h2 className="mt-2 truncate text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            {value}
          </h2>
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <span
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold",
                isPositive
                  ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400"
                  : "bg-rose-50 text-rose-600 dark:bg-rose-500/15 dark:text-rose-400"
              )}
            >
              {isPositive ? (
                <TrendingUp size={14} />
              ) : (
                <TrendingDown size={14} />
              )}
              {growth}
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500">
              {growthLabel}
            </span>
          </div>
        </div>
        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14",
            iconBg
          )}
        >
          <div className={iconColor}>{icon}</div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { cn } from "@/lib/utils"

const styles = {
  active: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
  pending: "bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
  "at-risk": "bg-rose-50 text-rose-700 dark:bg-rose-500/15 dark:text-rose-400",
  inactive: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400",
  completed: "bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",
  high: "bg-rose-50 text-rose-700 dark:bg-rose-500/15 dark:text-rose-400",
  medium: "bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
  low: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400",
}

const labels = {
  "at-risk": "At risk",
  high: "High",
  medium: "Medium",
  low: "Low",
}

export default function StatusBadge({ status }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-lg px-2.5 py-1 text-xs font-semibold capitalize",
        styles[status] ?? styles.inactive
      )}
    >
      {labels[status] ?? status}
    </span>
  )
}

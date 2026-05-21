"use client"

import { cn } from "@/lib/utils"

const styles = {
  active: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
  inactive: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400",
  pending: "bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
  away: "bg-orange-50 text-orange-700 dark:bg-orange-500/15 dark:text-orange-400",
  completed: "bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",
  draft: "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
}

export default function StatusBadge({ status, className }) {
  const key = status?.toLowerCase() ?? "inactive"

  return (
    <span
      className={cn(
        "inline-flex rounded-full px-2.5 py-1 text-xs font-semibold capitalize",
        styles[key] ?? styles.inactive,
        className
      )}
    >
      {status}
    </span>
  )
}

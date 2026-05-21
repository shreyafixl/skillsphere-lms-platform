"use client"

import { cn } from "@/lib/utils"

const styles = {
  "in-progress": "bg-violet-50 text-violet-700 dark:bg-violet-500/15 dark:text-violet-400",
  completed: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
  earned: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
  pending: "bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
  high: "bg-rose-50 text-rose-700 dark:bg-rose-500/15 dark:text-rose-400",
  medium: "bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
}

const labels = { "in-progress": "In progress", high: "High", medium: "Medium" }

export default function StatusBadge({ status }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-lg px-2.5 py-1 text-xs font-semibold capitalize",
        styles[status] ?? styles.pending
      )}
    >
      {labels[status] ?? status}
    </span>
  )
}

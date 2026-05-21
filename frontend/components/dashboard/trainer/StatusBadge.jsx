"use client"

import { cn } from "@/lib/utils"

const styles = {
  live: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
  draft: "bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
  completed: "bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-400",
  active: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
  pending: "bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
  "at-risk": "bg-rose-50 text-rose-700 dark:bg-rose-500/15 dark:text-rose-400",
  scheduled: "bg-violet-50 text-violet-700 dark:bg-violet-500/15 dark:text-violet-400",
  graded: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
}

const labels = { live: "Live", "at-risk": "At risk" }

export default function StatusBadge({ status }) {
  return (
    <span
      className={cn(
        "inline-flex rounded-lg px-2.5 py-1 text-xs font-semibold capitalize",
        styles[status] ?? styles.draft
      )}
    >
      {labels[status] ?? status}
    </span>
  )
}

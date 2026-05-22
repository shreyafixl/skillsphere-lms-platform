"use client"

import { cn } from "@/lib/utils"

export default function DashboardCard({
  children,
  className,
  padding = true,
  compact = false,
  ...props
}) {
  return (
    <div
      className={cn(
        "border border-slate-200/80 bg-white shadow-sm transition-shadow duration-200",
        "hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/90",
        "dark:hover:border-slate-700/80 dark:hover:shadow-lg dark:hover:shadow-violet-500/5",
        compact ? "rounded-xl" : "rounded-2xl",
        padding && (compact ? "p-4" : "p-6"),
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

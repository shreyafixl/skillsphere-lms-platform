"use client"

import { cn } from "@/lib/utils"

export default function DashboardCard({
  children,
  className,
  padding = true,
  ...props
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200/80 bg-white shadow-sm",
        "transition-all duration-300 hover:shadow-md",
        "dark:border-slate-800/80 dark:bg-slate-900/90 dark:shadow-slate-950/50 dark:hover:border-slate-700 dark:hover:shadow-lg dark:hover:shadow-violet-500/5",
        padding && "p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

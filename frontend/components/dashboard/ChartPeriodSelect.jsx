"use client"

import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ChartPeriodSelect({
  value,
  onChange,
  options = ["This Year", "This Month", "Today"],
  className,
}) {
  return (
    <div className={cn("relative", className)}>
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="h-8 appearance-none rounded-lg border border-slate-200/80 bg-white pl-3 pr-8 text-xs font-medium text-slate-600 outline-none transition-colors hover:border-slate-300 focus:border-violet-300 focus:ring-2 focus:ring-violet-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown
        size={14}
        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
      />
    </div>
  )
}

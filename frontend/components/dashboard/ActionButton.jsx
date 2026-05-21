"use client"

import { cn } from "@/lib/utils"

export function PrimaryActionButton({ children, className, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:-translate-y-0.5 hover:shadow-violet-500/40",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

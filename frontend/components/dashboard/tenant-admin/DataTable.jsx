"use client"

import { cn } from "@/lib/utils"

export function DataTable({ children, className, minWidth = "680px" }) {
  return (
    <div className={cn("-mx-2 overflow-x-auto", className)}>
      <table
        className="w-full border-collapse"
        style={{ minWidth }}
      >
        {children}
      </table>
    </div>
  )
}

export function DataTableHead({ columns }) {
  return (
    <thead>
      <tr className="border-b border-slate-100 dark:border-slate-800">
        {columns.map((col) => (
          <th
            key={col || "actions"}
            className="px-3 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500"
          >
            {col}
          </th>
        ))}
      </tr>
    </thead>
  )
}

export function DataTableRow({ children, className }) {
  return (
    <tr
      className={cn(
        "group border-b border-slate-50 transition-colors last:border-0",
        "hover:bg-violet-50/40 dark:border-slate-800/50 dark:hover:bg-violet-500/10",
        className
      )}
    >
      {children}
    </tr>
  )
}

export function DataTableCell({ children, className }) {
  return (
    <td className={cn("px-3 py-4 text-sm", className)}>{children}</td>
  )
}

export function UserAvatar({ name, size = "md" }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 font-bold text-white",
        size === "sm" ? "h-9 w-9 text-xs" : "h-10 w-10 text-sm"
      )}
    >
      {initials}
    </div>
  )
}

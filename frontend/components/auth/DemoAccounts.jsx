"use client"

import {
  Building2,
  GraduationCap,
  Shield,
  User,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { demoAccounts } from "@/lib/mock-auth"

const iconMap = {
  Shield,
  Building2,
  Users,
  GraduationCap,
  User,
}

export default function DemoAccounts({ selectedEmail, onSelect }) {
  return (
    <div className="mt-6 border-t border-slate-200/80 pt-6 dark:border-slate-700/80">
      <div className="mb-3 flex items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Demo Accounts
        </p>
        <span className="rounded-full border border-violet-200/80 bg-violet-50 px-2 py-0.5 text-[10px] font-medium text-violet-700 dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-300">
          Click to autofill
        </span>
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {demoAccounts.map((account) => {
          const Icon = iconMap[account.icon]
          const isActive = selectedEmail === account.email

          return (
            <button
              key={account.email}
              type="button"
              onClick={() => onSelect(account)}
              className={cn(
                "group relative flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-all duration-300 ease-out",
                "hover:-translate-y-0.5 hover:border-violet-300/80 hover:bg-violet-50/80 hover:shadow-md hover:shadow-violet-500/10",
                "dark:hover:border-violet-500/40 dark:hover:bg-violet-500/10 dark:hover:shadow-violet-500/20",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900",
                isActive
                  ? "border-violet-400/80 bg-violet-50 shadow-md shadow-violet-500/15 ring-1 ring-violet-400/30 dark:border-violet-500/50 dark:bg-violet-500/15 dark:ring-violet-400/25"
                  : "border-slate-200/80 bg-slate-50/50 dark:border-slate-700/80 dark:bg-slate-800/40"
              )}
            >
              <div
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br transition-transform duration-300 ease-out group-hover:scale-105",
                  isActive
                    ? "from-violet-600 to-fuchsia-600 shadow-sm shadow-violet-500/30"
                    : "from-violet-500/90 to-purple-600/90"
                )}
              >
                <Icon className="h-4 w-4 text-white" aria-hidden />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {account.role}
                </p>
                <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                  {account.email}
                </p>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

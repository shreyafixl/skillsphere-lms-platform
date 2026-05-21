"use client"

import { Menu, Search } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import NotificationDropdown from "./NotificationDropdown"

export default function Topbar({ onMenuClick, title = "Dashboard" }) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/70 px-4 py-3 backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300 dark:border-slate-800/60 dark:bg-slate-900/70 sm:px-6 sm:py-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-violet-500/40 dark:hover:bg-violet-500/10 dark:hover:text-violet-300 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>

          <div className="hidden min-w-0 sm:block">
            <p className="text-xs font-medium uppercase tracking-wider text-violet-600 dark:text-violet-400">
              Super Admin
            </p>
            <h1 className="truncate text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              {title}
            </h1>
          </div>

          <div className="relative min-w-0 flex-1 sm:max-w-md lg:max-w-lg">
            <Search
              size={18}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
            />
            <input
              type="search"
              placeholder="Search tenants, users, courses..."
              className="h-10 w-full rounded-xl border border-slate-200/80 bg-slate-50/80 pl-10 pr-4 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-violet-300 focus:bg-white focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-violet-500/50 dark:focus:bg-slate-800 dark:focus:ring-violet-500/20 sm:h-11"
            />
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <NotificationDropdown />

          <div className="hidden items-center gap-3 border-l border-slate-200 pl-3 dark:border-slate-700 sm:flex">
            <div className="text-right">
              <h2 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                Admin User
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Super Admin</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 text-sm font-bold text-white shadow-md shadow-violet-500/20">
              A
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

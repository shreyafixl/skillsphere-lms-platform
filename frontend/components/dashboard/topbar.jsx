"use client"

import { Menu, Search } from "lucide-react"

import ThemeToggle from "./ThemeToggle"
import NotificationDropdown from "./NotificationDropdown"
import ProfileDropdown from "./ProfileDropdown"

import { cn } from "@/lib/utils"

export default function Topbar({
  onMenuClick,
  title = "Dashboard",
  roleLabel = "Super Admin",
  searchPlaceholder = "Search...",
  profile,
  name,
  email,
  role,
  avatar,
  settingsHref,
  notifications,
  compact = false,
  enterprise = false,
  userName,
  userRoleLabel,
  userEmail,
  avatarInitials,
}) {
  const profileProps = profile ?? {
    name: name ?? userName,
    email: email ?? userEmail,
    role: role ?? userRoleLabel ?? roleLabel,
    avatar: avatar ?? avatarInitials,
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-40 shrink-0 border-b backdrop-blur-xl transition-colors duration-300",
        enterprise
          ? "border-slate-100/80 bg-white/75 px-4 py-3 dark:border-slate-800/80 dark:bg-slate-900/75 sm:px-5"
          : cn(
              "border-slate-200/60 bg-white/80 dark:border-slate-800/60 dark:bg-slate-900/80",
              compact
                ? "px-4 py-2.5 sm:px-5"
                : "px-4 py-3 sm:px-6 sm:py-4"
            )
      )}
    >
      <div className="flex items-center justify-between gap-3">
        {/* LEFT SECTION */}
        <div className="flex min-w-0 flex-1 items-center gap-3">
          
          {/* MOBILE MENU */}
          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-slate-800 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={19} />
          </button>

          {/* PAGE TITLE */}
          <div className="hidden min-w-0 md:block">
            <h1 className="truncate text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              {title}
            </h1>

            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {roleLabel}
            </p>
          </div>

          {/* SEARCH */}
          <div
            className={cn(
              "relative min-w-0 flex-1",
              enterprise
                ? "max-w-xl"
                : "max-w-md lg:max-w-lg"
            )}
          >
            <Search
              size={15}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              placeholder={searchPlaceholder}
              className={cn(
                "h-9 w-full rounded-xl border border-slate-200/80 bg-slate-50/80 pl-9 pr-3 text-sm text-slate-800 outline-none transition-all duration-200",
                "placeholder:text-slate-400 focus:border-violet-300 focus:bg-white focus:ring-2 focus:ring-violet-500/10",
                "dark:border-slate-700/80 dark:bg-slate-800/60 dark:text-slate-100 dark:focus:border-violet-500/40"
              )}
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          
          <ThemeToggle className="h-9 w-9 rounded-xl border border-transparent bg-transparent shadow-none hover:bg-slate-100 dark:hover:bg-slate-800" />

          <NotificationDropdown
            notifications={notifications}
          />

          <div className="border-l border-slate-100 pl-2 dark:border-slate-800 sm:pl-2.5">
            <ProfileDropdown
              {...profileProps}
              settingsHref={settingsHref}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
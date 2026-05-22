"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import {
  ChevronDown,
  LogOut,
  Moon,
  Settings,
  Sun,
  User,
} from "lucide-react"

import { useTheme } from "@/components/providers/ThemeProvider"
import ProfileModal from "@/components/dashboard/ProfileModal"
import { cn } from "@/lib/utils"
import {
  getSettingsHrefFromPathname,
  normalizeProfile,
} from "@/lib/mock-profile"

function MenuItem({ icon: Icon, label, onClick, danger = false }) {
  return (
    <button
      type="button"
      role="menuitem"
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-all duration-200",
        danger
          ? "text-rose-300 hover:bg-rose-500/15 hover:text-rose-200"
          : "text-slate-200 hover:bg-white/10 hover:text-white"
      )}
    >
      <Icon
        size={18}
        className={cn(
          "shrink-0",
          danger ? "text-rose-400" : "text-slate-400"
        )}
      />
      {label}
    </button>
  )
}

function AvatarBadge({ avatar, size = "md" }) {
  const sizeClass =
    size === "sm"
      ? "h-9 w-9 text-sm sm:h-10 sm:w-10"
      : "h-11 w-11 text-sm"

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 font-bold text-white shadow-md shadow-violet-500/20",
        size === "lg" && "rounded-xl shadow-lg shadow-violet-500/25",
        sizeClass
      )}
    >
      {avatar}
    </div>
  )
}

/**
 * Shared profile dropdown for every dashboard topbar.
 * Pass only user-specific mock data — UI and behavior stay identical everywhere.
 *
 * @example
 * <ProfileDropdown
 *   name="Admin User"
 *   email="admin@skillsphere.com"
 *   role="Super Admin"
 *   avatar="AM"
 * />
 */
export default function ProfileDropdown({
  name,
  email,
  role,
  avatar,
  settingsHref,
  /** @deprecated Use `name` */
  userName,
  /** @deprecated Use `role` */
  userRoleLabel,
  /** @deprecated Use `email` */
  userEmail,
  /** @deprecated Use `avatar` */
  avatarInitials,
}) {
  const router = useRouter()
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const containerRef = useRef(null)

  const [open, setOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const profile = normalizeProfile({
    name: name ?? userName,
    email: email ?? userEmail ?? "",
    role: role ?? userRoleLabel,
    avatar: avatar ?? avatarInitials,
  })

  const settingsPath = settingsHref ?? getSettingsHrefFromPathname(pathname)
  const isDark = resolvedTheme === "dark"

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!open) return

    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    const handleEscape = (e) => {
      if (e.key === "Escape") setOpen(false)
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [open])

  const closeAnd = (fn) => () => {
    setOpen(false)
    fn()
  }

  return (
    <>
      <div ref={containerRef} className="relative">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Account menu"
          aria-expanded={open}
          aria-haspopup="true"
          className={cn(
            "flex items-center gap-2 rounded-xl border px-2 py-1.5 transition-all duration-300 sm:gap-3 sm:px-2.5",
            "border-transparent hover:border-slate-200/80 hover:bg-slate-50/80",
            "dark:hover:border-slate-700/80 dark:hover:bg-slate-800/60",
            open &&
              "border-violet-200/80 bg-violet-50/80 ring-2 ring-violet-500/15 dark:border-violet-500/40 dark:bg-violet-500/10 dark:ring-violet-500/25"
          )}
        >
          <div className="hidden text-right sm:block">
            <p className="max-w-[140px] truncate text-sm font-semibold text-slate-800 dark:text-slate-100">
              {profile.name}
            </p>
            <p className="max-w-[140px] truncate text-xs text-slate-500 dark:text-slate-400">
              {profile.role}
            </p>
          </div>

          <AvatarBadge avatar={profile.avatar} size="sm" />

          <ChevronDown
            size={16}
            className={cn(
              "hidden shrink-0 text-slate-400 transition-transform duration-300 sm:block dark:text-slate-500",
              open && "rotate-180"
            )}
          />
        </button>

        <div
          role="menu"
          aria-hidden={!open}
          className={cn(
            "absolute right-0 top-[calc(100%+0.5rem)] z-[60] w-[min(100vw-1.5rem,280px)] origin-top-right",
            "rounded-xl border border-slate-700/60 bg-slate-900/95 shadow-xl shadow-black/30 backdrop-blur-xl",
            "ring-1 ring-white/10 transition-all duration-300 ease-out",
            "dark:border-slate-700/80 dark:bg-slate-950/95 dark:shadow-violet-500/10 dark:ring-violet-500/10",
            open
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-2 scale-95 opacity-0"
          )}
        >
          <div className="border-b border-white/10 px-4 py-4">
            <div className="flex items-center gap-3">
              <AvatarBadge avatar={profile.avatar} size="lg" />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">
                  {profile.name}
                </p>
                <p className="truncate text-xs text-slate-400">{profile.email}</p>
                <p className="mt-0.5 text-xs font-medium text-violet-300">
                  {profile.role}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-0.5 p-2">
            <MenuItem
              icon={User}
              label="My Profile"
              onClick={closeAnd(() => setProfileOpen(true))}
            />
            <MenuItem
              icon={Settings}
              label="Settings"
              onClick={closeAnd(() => router.push(settingsPath))}
            />
            <MenuItem
              icon={mounted && isDark ? Sun : Moon}
              label={
                mounted ? (isDark ? "Light Mode" : "Dark Mode") : "Toggle Theme"
              }
              onClick={closeAnd(() => setTheme(isDark ? "light" : "dark"))}
            />
          </div>

          <div className="border-t border-white/10 p-2">
            <MenuItem
              icon={LogOut}
              label="Logout"
              danger
              onClick={closeAnd(() => router.push("/"))}
            />
          </div>
        </div>
      </div>

      <ProfileModal
        open={profileOpen}
        onOpenChange={setProfileOpen}
        profile={profile}
      />
    </>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { Bell, CheckCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { superadminNotifications } from "./notifications/superadmin-notifications"

export default function NotificationDropdown({
  notifications: initialNotifications = superadminNotifications,
}) {
  const [open, setOpen] = useState(false)
  const [notifications, setNotifications] = useState(initialNotifications)
  const containerRef = useRef(null)

  const unreadCount = notifications.filter((n) => n.unread).length

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

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })))
  }

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, unread: false } : n))
    )
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Notifications"
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          "relative flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300",
          "border-slate-200/80 bg-slate-50/80 text-slate-600",
          "hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600",
          "dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-300",
          "dark:hover:border-violet-500/40 dark:hover:bg-violet-500/10 dark:hover:text-violet-300",
          open &&
            "border-violet-300 bg-violet-50 text-violet-600 ring-2 ring-violet-500/20 dark:border-violet-500/50 dark:bg-violet-500/10 dark:text-violet-300 dark:ring-violet-500/30"
        )}
      >
        <Bell size={18} />
        {unreadCount > 0 && (
          <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-rose-500 px-1 text-[10px] font-bold text-white ring-2 ring-white dark:ring-slate-900">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      <div
        role="menu"
        aria-hidden={!open}
        className={cn(
          "absolute right-0 top-[calc(100%+0.5rem)] z-50 w-[min(100vw-2rem,380px)] origin-top-right",
          "rounded-2xl border border-slate-200/80 bg-white/95 shadow-xl shadow-slate-900/10 backdrop-blur-xl",
          "transition-all duration-300 ease-out",
          "dark:border-slate-700/80 dark:bg-slate-900/95 dark:shadow-black/40",
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-95 opacity-0"
        )}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-slate-800">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Notifications
            </h3>
            {unreadCount > 0 && (
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {unreadCount} unread
              </p>
            )}
          </div>
          {unreadCount > 0 && (
            <button
              type="button"
              onClick={markAllRead}
              className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-violet-600 transition-colors hover:bg-violet-50 dark:text-violet-400 dark:hover:bg-violet-500/10"
            >
              <CheckCheck size={14} />
              Mark all read
            </button>
          )}
        </div>

        <ul className="max-h-[min(360px,60vh)] overflow-y-auto overscroll-contain p-2">
          {notifications.map((notification) => {
            const Icon = notification.icon
            return (
              <li key={notification.id}>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => markAsRead(notification.id)}
                  className={cn(
                    "flex w-full gap-3 rounded-xl p-3 text-left transition-colors duration-200",
                    "hover:bg-slate-50 dark:hover:bg-slate-800/80",
                    notification.unread &&
                      "bg-violet-50/50 dark:bg-violet-500/5"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                      notification.iconBg
                    )}
                  >
                    <Icon size={18} className={notification.iconColor} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {notification.title}
                      </p>
                      {notification.unread && (
                        <span
                          className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-violet-500"
                          aria-label="Unread"
                        />
                      )}
                    </div>
                    <p className="mt-0.5 line-clamp-2 text-xs text-slate-500 dark:text-slate-400">
                      {notification.message}
                    </p>
                    <p className="mt-1 text-xs font-medium text-slate-400 dark:text-slate-500">
                      {notification.time}
                    </p>
                  </div>
                </button>
              </li>
            )
          })}
        </ul>

        <div className="border-t border-slate-100 px-4 py-2.5 dark:border-slate-800">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="w-full rounded-xl py-2 text-center text-xs font-semibold text-violet-600 transition-colors hover:bg-violet-50 dark:text-violet-400 dark:hover:bg-violet-500/10"
          >
            View all notifications
          </button>
        </div>
      </div>
    </div>
  )
}

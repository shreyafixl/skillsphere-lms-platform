"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export default function ThemeToggle({ className }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300",
        "border-slate-200/80 bg-slate-50/80 text-slate-600",
        "hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600",
        "dark:border-slate-700/80 dark:bg-slate-800/80 dark:text-slate-300",
        "dark:hover:border-violet-500/40 dark:hover:bg-violet-500/10 dark:hover:text-violet-300",
        className
      )}
      aria-label={mounted ? (isDark ? "Switch to light mode" : "Switch to dark mode") : "Toggle theme"}
    >
      {mounted ? (
        isDark ? (
          <Sun size={18} className="transition-transform duration-300" />
        ) : (
          <Moon size={18} className="transition-transform duration-300" />
        )
      ) : (
        <Moon size={18} className="opacity-50" />
      )}
    </button>
  )
}

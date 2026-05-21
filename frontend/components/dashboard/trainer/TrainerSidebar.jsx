"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Video,
  Calendar,
  FileText,
  Megaphone,
  BarChart3,
  Settings,
  LogOut,
  Loader2,
  GraduationCap,
} from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

export const trainerMenuItems = [
  { title: "Dashboard", icon: LayoutDashboard, href: "/dashboard/trainer" },
  { title: "Courses", icon: BookOpen, href: "/dashboard/trainer/courses" },
  { title: "Students", icon: Users, href: "/dashboard/trainer/students" },
  { title: "Sessions", icon: Video, href: "/dashboard/trainer/sessions" },
  { title: "Classes", icon: Calendar, href: "/dashboard/trainer/classes" },
  { title: "Submissions", icon: FileText, href: "/dashboard/trainer/submissions" },
  { title: "Announcements", icon: Megaphone, href: "/dashboard/trainer/announcements" },
  { title: "Analytics", icon: BarChart3, href: "/dashboard/trainer/analytics" },
  { title: "Settings", icon: Settings, href: "/dashboard/trainer/settings" },
]

function isActiveRoute(pathname, href) {
  if (href === "/dashboard/trainer") return pathname === href
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function TrainerSidebarNav({ className, onNavigate }) {
  const pathname = usePathname()
  return (
    <nav className={cn("space-y-1", className)}>
      {trainerMenuItems.map((item) => {
        const Icon = item.icon
        const isActive = isActiveRoute(pathname, item.href)
        return (
          <Link
            key={item.title}
            href={item.href}
            onClick={() => onNavigate?.()}
            className={cn(
              "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200",
              isActive
                ? "bg-gradient-to-r from-violet-600 to-violet-500 text-white shadow-lg shadow-violet-500/25"
                : "text-slate-400 hover:bg-white/5 hover:text-white"
            )}
          >
            <Icon size={18} className={cn(isActive ? "text-white" : "text-slate-500")} />
            <span>{item.title}</span>
          </Link>
        )
      })}
    </nav>
  )
}

export function TrainerSidebarProfile({ trainerInfo }) {
  const router = useRouter()
  const [loggingOut, setLoggingOut] = useState(false)

  const handleLogout = async () => {
    if (loggingOut) return
    setLoggingOut(true)
    toast.success("Signed out successfully")
    try {
      await new Promise((r) => setTimeout(r, 450))
      router.replace("/")
    } catch {
      setLoggingOut(false)
      toast.error("Could not sign out. Please try again.")
    }
  }

  return (
    <div className="border-t border-white/10 pt-4">
      <div className="mb-3 flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2">
        <GraduationCap size={16} className="shrink-0 text-violet-400" />
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-white">{trainerInfo.name}</p>
          <p className="truncate text-[10px] text-slate-500">
            ★ {trainerInfo.rating} · {trainerInfo.totalStudents} students
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-bold text-white shadow-lg shadow-violet-500/30">
            {trainerInfo.admin.split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </div>
          <div className="min-w-0">
            <h2 className="truncate text-sm font-semibold text-white">{trainerInfo.admin}</h2>
            <p className="truncate text-xs text-slate-500">Trainer</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          disabled={loggingOut}
          aria-label="Sign out"
          className={cn(
            "shrink-0 rounded-lg p-2 text-slate-500 transition-all duration-200",
            "hover:bg-rose-500/10 hover:text-rose-400 disabled:opacity-60"
          )}
        >
          {loggingOut ? <Loader2 size={18} className="animate-spin" /> : <LogOut size={18} />}
        </button>
      </div>
    </div>
  )
}

export default function TrainerSidebar({ className, trainerInfo }) {
  return (
    <aside
      className={cn(
        "sticky top-0 z-30 flex min-h-screen w-64 shrink-0 flex-col",
        "border-r border-white/5 bg-slate-950 text-white",
        className
      )}
    >
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-8 shrink-0">
          <Link href="/dashboard/trainer" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-lg font-bold shadow-lg shadow-violet-600/30">
              S
            </div>
            <div>
              <h1 className="text-base font-bold tracking-tight">SkillSphere</h1>
              <p className="text-xs text-slate-500">Trainer</p>
            </div>
          </Link>
        </div>
        <TrainerSidebarNav className="min-h-0 flex-1 overflow-y-auto" />
      </div>
      <div className="shrink-0 p-5 pt-0">
        <TrainerSidebarProfile trainerInfo={trainerInfo} />
      </div>
    </aside>
  )
}

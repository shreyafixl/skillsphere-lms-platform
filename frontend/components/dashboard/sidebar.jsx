"use client"

import { useState } from "react"

import Link from "next/link"

import {
  usePathname,
  useRouter,
} from "next/navigation"

import {
  LayoutDashboard,
  Users,
  BookOpen,
  BarChart3,
  Settings,
  LogOut,
  Building2,
  GraduationCap,
  Loader2,
  ClipboardList,
  Briefcase,
  Trophy,
Clock,
Compass,
Award,
TrendingUp,
Video,
MonitorPlay,
Megaphone,
FileText,

} from "lucide-react"

import { toast } from "sonner"

import { cn } from "@/lib/utils"

const menusByRole = {
  superadmin: [
    {
      label: "Platform",
      items: [
        {
          title: "Dashboard",
          icon: LayoutDashboard,
          href: "/dashboard/superadmin",
        },

        {
          title: "Analytics",
          icon: BarChart3,
          href: "/dashboard/superadmin/analytics",
        },
      ],
    },

    {
      label: "Management",
      items: [
        {
          title: "Tenants",
          icon: Building2,
          href: "/dashboard/superadmin/tenants",
        },

        {
          title: "Users",
          icon: Users,
          href: "/dashboard/superadmin/users",
        },

        {
          title: "Courses",
          icon: BookOpen,
          href: "/dashboard/superadmin/courses",
        },

        {
          title: "Trainers",
          icon: GraduationCap,
          href: "/dashboard/superadmin/trainers",
        },
      ],
    },

    {
      label: "System",
      items: [
        {
          title: "Settings",
          icon: Settings,
          href: "/dashboard/superadmin/settings",
        },
      ],
    },
  ],

  trainer: [
    {
      label: "Trainer",
      items: [
        {
          title: "Dashboard",
          icon: LayoutDashboard,
          href: "/dashboard/trainer",
        },
  
        {
          title: "Courses",
          icon: BookOpen,
          href: "/dashboard/trainer/courses",
        },
  
        {
          title: "Students",
          icon: Users,
          href: "/dashboard/trainer/students",
        },
  
        {
          title: "Sessions",
          icon: Video,
          href: "/dashboard/trainer/sessions",
        },
  
        {
          title: "Classes",
          icon: MonitorPlay,
          href: "/dashboard/trainer/classes",
        },
  
        {
          title: "Submissions",
          icon: FileText,
          href: "/dashboard/trainer/submissions",
        },
  
        {
          title: "Announcements",
          icon: Megaphone,
          href: "/dashboard/trainer/announcements",
        },
  
        {
          title: "Analytics",
          icon: BarChart3,
          href: "/dashboard/trainer/analytics",
        },
  
        {
          title: "Settings",
          icon: Settings,
          href: "/dashboard/trainer/settings",
        },
      ],
    },
  ],

  employee: [
    {
      label: "Employee",
      items: [
        {
          title: "Dashboard",
          icon: LayoutDashboard,
          href: "/dashboard/employee",
        },
  
        {
          title: "My Courses",
          icon: BookOpen,
          href: "/dashboard/employee/courses",
        },
  
        {
          title: "Progress",
          icon: TrendingUp,
          href: "/dashboard/employee/progress",
        },
  
        {
          title: "Certificates",
          icon: Award,
          href: "/dashboard/employee/certificates",
        },
  
        {
          title: "Achievements",
          icon: Trophy,
          href: "/dashboard/employee/achievements",
        },
  
        {
          title: "Deadlines",
          icon: Clock,
          href: "/dashboard/employee/deadlines",
        },
  
        {
          title: "Discover",
          icon: Compass,
          href: "/dashboard/employee/discover",
        },
  
        {
          title: "Settings",
          icon: Settings,
          href: "/dashboard/employee/settings",
        },
      ],
    },
  ],

  tenantadmin: [
    {
      label: "Tenant",
      items: [
        {
          title: "Dashboard",
          icon: LayoutDashboard,
          href: "/dashboard/tenantadmin",
        },

        {
          title: "Employees",
          icon: Users,
          href: "/dashboard/tenantadmin/employees",
        },

        {
          title: "Courses",
          icon: BookOpen,
          href: "/dashboard/tenantadmin/courses",
        },

        {
          title: "Analytics",
          icon: BarChart3,
          href: "/dashboard/tenantadmin/analytics",
        },

        {
          title: "Settings",
          icon: Settings,
          href: "/dashboard/tenantadmin/settings",
        },
      ],
    },
  ],
}

function isActiveRoute(pathname, href) {
  return (
    pathname === href ||
    pathname.startsWith(`${href}/`)
  )
}

export function SidebarNav({
  className,
  onNavigate,
  role = "superadmin",
}) {
  const pathname = usePathname()

  const menuGroups =
    menusByRole[role] ||
    menusByRole.superadmin

  return (
    <nav className={cn("space-y-5", className)}>
      {menuGroups.map((group) => (
        <div key={group.label}>
          <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            {group.label}
          </p>

          <ul className="space-y-0.5">
            {group.items.map((item) => {
              const Icon = item.icon

              const isActive = isActiveRoute(
                pathname,
                item.href
              )

              return (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    onClick={() => onNavigate?.()}
                    className={cn(
                      "flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors duration-200",
                      isActive
                        ? "bg-violet-50 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-slate-200"
                    )}
                  >
                    <Icon
                      size={16}
                      strokeWidth={
                        isActive ? 2.25 : 2
                      }
                      className={cn(
                        "shrink-0",
                        isActive
                          ? "text-violet-600 dark:text-violet-400"
                          : "text-slate-400"
                      )}
                    />

                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}

export function SidebarProfile({
  role = "superadmin",
}) {
  const router = useRouter()

  const [loggingOut, setLoggingOut] =
    useState(false)

  const roleMap = {
    superadmin: {
      label: "Super Admin",
      initials: "SA",
    },

    trainer: {
      label: "Trainer",
      initials: "TR",
    },

    employee: {
      label: "Employee",
      initials: "EM",
    },

    manager: {
      label: "Manager",
      initials: "MG",
    },

    tenantadmin: {
      label: "Tenant Admin",
      initials: "TA",
    },
  }

  const currentRole =
    roleMap[role] || roleMap.superadmin

  const handleLogout = async () => {
    if (loggingOut) return

    setLoggingOut(true)

    toast.success(
      "Signed out successfully",
      {
        description:
          "Redirecting to home...",
      }
    )

    try {
      await new Promise((resolve) =>
        setTimeout(resolve, 450)
      )

      router.replace("/")
    } catch {
      setLoggingOut(false)

      toast.error(
        "Could not sign out. Please try again."
      )
    }
  }

  return (
    <div className="border-t border-slate-100 pt-3 dark:border-slate-800">
      <div className="flex items-center justify-between gap-2 rounded-lg px-2 py-2 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
        <div className="flex min-w-0 items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 text-xs font-bold text-white">
            {currentRole.initials}
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-xs font-semibold text-slate-800 dark:text-slate-100">
              SkillSphere User
            </h2>

            <p className="truncate text-[10px] text-slate-500">
              {currentRole.label}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          disabled={loggingOut}
          aria-label="Sign out"
          className="shrink-0 rounded-md p-1.5 text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-500/10 dark:hover:text-rose-400"
        >
          {loggingOut ? (
            <Loader2
              size={16}
              className="animate-spin"
            />
          ) : (
            <LogOut size={16} />
          )}
        </button>
      </div>
    </div>
  )
}

export default function Sidebar({
  className,
  role = "superadmin",
}) {
  return (
    <aside
      className={cn(
        "sticky top-0 z-30 flex h-screen w-[248px] shrink-0 flex-col overflow-hidden",
        "border-r border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900",
        className
      )}
    >
      <div className="flex flex-1 flex-col overflow-hidden px-4 py-5">
        <div className="mb-6 shrink-0">
          <Link
            href={`/dashboard/${role}`}
            className="flex items-center gap-2.5 rounded-lg px-1 py-1"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 text-sm font-bold text-white shadow-sm shadow-violet-500/20">
              S
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h1 className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">
                  SkillSphere
                </h1>

                <span className="rounded-md bg-violet-50 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-violet-700 dark:bg-violet-500/15 dark:text-violet-300">
                  {role}
                </span>
              </div>

              <p className="text-[10px] text-slate-500">
                Enterprise LMS
              </p>
            </div>
          </Link>
        </div>

        <SidebarNav
          role={role}
          className="min-h-0 flex-1 overflow-y-auto pr-1"
        />
      </div>

      <div className="shrink-0 px-4 pb-4">
        <SidebarProfile role={role} />
      </div>
    </aside>
  )
}
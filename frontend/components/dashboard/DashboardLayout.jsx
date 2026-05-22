"use client"

import { useState } from "react"
import Sidebar, { SidebarNav, SidebarProfile } from "./sidebar"
import Topbar from "./topbar"
import { dashboardProfiles } from "@/lib/dashboard-profiles"
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet"

export default function DashboardLayout({
  children,
  topbarTitle = "Dashboard",
}) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex min-h-screen w-full bg-slate-50/80 transition-colors duration-300 dark:bg-slate-950">
      <Sidebar className="hidden lg:flex" />

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent
          side="left"
          className="flex h-full w-72 flex-col border-none border-r border-white/5 bg-slate-950 p-0 text-white sm:max-w-xs"
          showCloseButton
        >
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <div className="flex h-full flex-col p-5">
            <div className="mb-8 flex shrink-0 items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-lg font-bold">
                S
              </div>
              <div>
                <p className="font-bold">SkillSphere</p>
                <p className="text-xs text-slate-500">Enterprise LMS</p>
              </div>
            </div>
            <SidebarNav
              onNavigate={() => setMobileOpen(false)}
              className="min-h-0 flex-1 overflow-y-auto"
            />
            <div className="shrink-0 pt-4">
              <SidebarProfile />
            </div>
          </div>
        </SheetContent>
      </Sheet>

      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <Topbar
          title={topbarTitle}
          onMenuClick={() => setMobileOpen(true)}
          profile={dashboardProfiles.superadmin}
          roleLabel={dashboardProfiles.superadmin.role}
        />
        <main className="flex-1 space-y-6 overflow-x-hidden p-4 transition-colors duration-300 sm:space-y-8 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}

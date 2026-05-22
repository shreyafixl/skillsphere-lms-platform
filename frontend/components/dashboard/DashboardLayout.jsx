"use client"

import { useState } from "react"

import Sidebar, {
  SidebarNav,
  SidebarProfile,
} from "./sidebar"

import Topbar from "./topbar"

import { dashboardProfiles } from "@/lib/dashboard-profiles"

import { superadminNotifications } from "@/components/dashboard/notifications/superadmin-notifications"

import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet"

import { cn } from "@/lib/utils"

export default function DashboardLayout({
  children,
  topbarTitle = "Dashboard",
  enterprise = true,
  role = "superadmin",
}) {
  const [mobileOpen, setMobileOpen] =
    useState(false)

  const currentProfile =
    dashboardProfiles[role] ||
    dashboardProfiles.superadmin
  console.log("CURRENT ROLE:", role)

  return (
    <div
      className={cn(
        "flex h-screen w-full overflow-hidden transition-colors duration-300",
        enterprise
          ? "bg-gradient-to-br from-violet-100/80 via-slate-100 to-fuchsia-50/50 dark:from-slate-950 dark:via-slate-950 dark:to-violet-950/30"
          : "bg-slate-100/50 dark:bg-slate-950"
      )}
    >
      {/* DESKTOP SIDEBAR */}
      <Sidebar
        role={role}
        className="hidden lg:flex"
      />

      {/* MOBILE SIDEBAR */}
      <Sheet
        open={mobileOpen}
        onOpenChange={setMobileOpen}
      >
        <SheetContent
          side="left"
          className="flex h-full w-[248px] flex-col border-r border-slate-200 bg-white p-0 dark:border-slate-800 dark:bg-slate-900 sm:max-w-xs"
          showCloseButton
        >
          <SheetTitle className="sr-only">
            Navigation menu
          </SheetTitle>

          <div className="flex h-full flex-col overflow-hidden px-4 py-5">
            {/* MOBILE LOGO */}
            <div className="mb-6 flex shrink-0 items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 text-sm font-bold text-white">
                S
              </div>

              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  SkillSphere
                </p>

                <p className="text-[10px] text-slate-500">
                  Enterprise LMS
                </p>
              </div>
            </div>

            {/* MOBILE NAV */}
            <SidebarNav
              role={role}
              onNavigate={() =>
                setMobileOpen(false)
              }
              className="min-h-0 flex-1 overflow-y-auto"
            />

            {/* MOBILE PROFILE */}
            <div className="shrink-0 pt-3">
              <SidebarProfile role={role} />
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* MAIN CONTENT */}
      <div className="flex h-screen min-w-0 flex-1 flex-col overflow-hidden p-3 sm:p-4 lg:p-5">
        <div
          className={cn(
            "flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-2xl",
            enterprise &&
              "border border-white/60 bg-white/90 shadow-xl shadow-slate-900/[0.06] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/95 dark:shadow-black/30"
          )}
        >
          {/* TOPBAR */}
          <Topbar
            title={topbarTitle}
            onMenuClick={() =>
              setMobileOpen(true)
            }
            profile={currentProfile}
            roleLabel={currentProfile.role}
            notifications={
              superadminNotifications
            }
            enterprise={enterprise}
          />

          {/* SCROLLABLE CONTENT */}
          <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-5 lg:p-6">
            <div className="mx-auto w-full max-w-[1560px]">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
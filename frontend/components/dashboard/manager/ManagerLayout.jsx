"use client"

import { useState } from "react"
import Topbar from "@/components/dashboard/topbar"
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet"
import ManagerSidebar, {
  ManagerSidebarNav,
  ManagerSidebarProfile,
} from "./ManagerSidebar"
import { useManagerState } from "./useManagerState"
import { managerCopy } from "./manager-data"
import { managerNotifications } from "@/components/dashboard/notifications/manager-notifications"

function ManagerMain({ children, topbarTitle, setMobileOpen, managerInfo }) {
  return (
    <div className="flex min-h-screen min-w-0 flex-1 flex-col">
      <Topbar
        title={topbarTitle}
        onMenuClick={() => setMobileOpen(true)}
        roleLabel={managerCopy.roleLabel}
        userRoleLabel={managerCopy.roleLabel}
        userName={managerInfo.admin}
        searchPlaceholder={managerCopy.searchPlaceholder}
        notifications={managerNotifications}
      />
      <main className="flex-1 space-y-6 overflow-x-hidden p-4 transition-colors duration-300 sm:space-y-8 sm:p-6 lg:p-8">
        {children}
      </main>
    </div>
  )
}

export default function ManagerLayout({
  children,
  topbarTitle = "Dashboard",
}) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const state = useManagerState()
  const content =
    typeof children === "function" ? children(state) : children

  return (
    <>
      <div className="flex min-h-screen w-full bg-slate-50/80 transition-colors duration-300 dark:bg-slate-950">
        <ManagerSidebar
          className="hidden lg:flex"
          managerInfo={state.managerInfo}
        />

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
                  <p className="text-xs text-slate-500">Manager</p>
                </div>
              </div>
              <ManagerSidebarNav
                onNavigate={() => setMobileOpen(false)}
                className="min-h-0 flex-1 overflow-y-auto"
              />
              <div className="shrink-0 pt-4">
                <ManagerSidebarProfile managerInfo={state.managerInfo} />
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <ManagerMain
          topbarTitle={topbarTitle}
          setMobileOpen={setMobileOpen}
          managerInfo={state.managerInfo}
        >
          {content}
        </ManagerMain>
      </div>
      {state.modals}
    </>
  )
}

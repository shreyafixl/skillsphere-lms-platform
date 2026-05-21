"use client"

import { useState } from "react"
import Topbar from "@/components/dashboard/topbar"
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import TrainerSidebar, { TrainerSidebarNav, TrainerSidebarProfile } from "./TrainerSidebar"
import { useTrainerState } from "./useTrainerState"
import { trainerCopy } from "./trainer-data"
import { trainerNotifications } from "@/components/dashboard/notifications/trainer-notifications"

function TrainerMain({ children, topbarTitle, setMobileOpen, trainerInfo }) {
  return (
    <div className="flex min-h-screen min-w-0 flex-1 flex-col">
      <Topbar
        title={topbarTitle}
        onMenuClick={() => setMobileOpen(true)}
        roleLabel={trainerCopy.roleLabel}
        userRoleLabel={trainerCopy.roleLabel}
        userName={trainerInfo.admin}
        searchPlaceholder={trainerCopy.searchPlaceholder}
        notifications={trainerNotifications}
      />
      <main className="flex-1 space-y-6 overflow-x-hidden p-4 transition-colors duration-300 sm:space-y-8 sm:p-6 lg:p-8">
        {children}
      </main>
    </div>
  )
}

export default function TrainerLayout({ children, topbarTitle = "Dashboard" }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const state = useTrainerState()
  const content = typeof children === "function" ? children(state) : children

  return (
    <>
      <div className="flex min-h-screen w-full bg-slate-50/80 transition-colors duration-300 dark:bg-slate-950">
        <TrainerSidebar className="hidden lg:flex" trainerInfo={state.trainerInfo} />
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetContent
            side="left"
            className="flex h-full w-72 flex-col border-none border-r border-white/5 bg-slate-950 p-0 text-white sm:max-w-xs"
            showCloseButton
          >
            <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            <div className="flex h-full flex-col p-5">
              <div className="mb-8 flex shrink-0 items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-lg font-bold">S</div>
                <div>
                  <p className="font-bold">SkillSphere</p>
                  <p className="text-xs text-slate-500">Trainer</p>
                </div>
              </div>
              <TrainerSidebarNav onNavigate={() => setMobileOpen(false)} className="min-h-0 flex-1 overflow-y-auto" />
              <div className="shrink-0 pt-4">
                <TrainerSidebarProfile trainerInfo={state.trainerInfo} />
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <TrainerMain topbarTitle={topbarTitle} setMobileOpen={setMobileOpen} trainerInfo={state.trainerInfo}>
          {content}
        </TrainerMain>
      </div>
      {state.modals}
    </>
  )
}

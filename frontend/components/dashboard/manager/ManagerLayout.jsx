"use client"

import DashboardLayout from "@/components/dashboard/DashboardLayout"

import { useManagerState } from "./useManagerState"

export default function ManagerLayout({
  children,
  topbarTitle = "Dashboard",
}) {
  const state = useManagerState()

  const content =
    typeof children === "function"
      ? children(state)
      : children

  return (
    <>
      <DashboardLayout
        topbarTitle={topbarTitle}
        role="manager"
        enterprise
      >
        {content}
      </DashboardLayout>

      {state.modals}
    </>
  )
}
"use client"

import DashboardLayout from "@/components/dashboard/DashboardLayout"

import { useEmployeeState } from "./useEmployeeState"

export default function EmployeeLayout({
  children,
  topbarTitle = "Dashboard",
}) {
  const state = useEmployeeState()

  const content =
    typeof children === "function"
      ? children(state)
      : children

  return (
    <>
      <DashboardLayout
        topbarTitle={topbarTitle}
        role="employee"
        enterprise
      >
        {content}
      </DashboardLayout>

      {state.modals}
    </>
  )
}
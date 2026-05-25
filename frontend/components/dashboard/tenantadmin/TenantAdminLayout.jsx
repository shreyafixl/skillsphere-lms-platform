"use client"

import DashboardLayout from "@/components/dashboard/DashboardLayout"

import { useTenantAdminState } from "./useTenantAdminState"

export default function TenantAdminLayout({
  children,
  topbarTitle = "Dashboard",
}) {
  const state = useTenantAdminState()

  const content =
    typeof children === "function"
      ? children(state)
      : children

  return (
    <>
      <DashboardLayout
        topbarTitle={topbarTitle}
        role="tenantadmin"
        enterprise
      >
        {content}
      </DashboardLayout>

      {state.modals}
    </>
  )
}
"use client"

import DashboardLayout from "@/components/dashboard/DashboardLayout"

import { useTrainerState } from "./useTrainerState"

export default function TrainerLayout({
  children,
  topbarTitle = "Dashboard",
}) {
  const state = useTrainerState()

  const content =
    typeof children === "function"
      ? children(state)
      : children

  return (
    <>
      <DashboardLayout
        topbarTitle={topbarTitle}
        role="trainer"
        enterprise
      >
        {content}
      </DashboardLayout>

      {state.modals}
    </>
  )
}
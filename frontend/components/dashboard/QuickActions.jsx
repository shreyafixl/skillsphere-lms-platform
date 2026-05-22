"use client"

import { useState } from "react"
import {
  Building2,
  FileBarChart,
  GraduationCap,
  Upload,
} from "lucide-react"

import { cn } from "@/lib/utils"

import DashboardCard from "./DashboardCard"
import SectionHeader from "./SectionHeader"

import {
  TenantFormModal,
  TrainerFormModal,
  CourseFormModal,
  ReportFormModal,
} from "./modals"

const actions = [
  {
    id: "tenant",
    label: "Create Tenant",
    description: "Onboard a new organization",
    icon: Building2,
    accent: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-500/10",
    border: "hover:border-violet-200 dark:hover:border-violet-500/30",
  },
  {
    id: "trainer",
    label: "Add Trainer",
    description: "Invite a course instructor",
    icon: GraduationCap,
    accent: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    border: "hover:border-indigo-200 dark:hover:border-indigo-500/30",
  },
  {
    id: "course",
    label: "Upload Course",
    description: "Add content to the catalog",
    icon: Upload,
    accent: "text-fuchsia-600 dark:text-fuchsia-400",
    bg: "bg-fuchsia-50 dark:bg-fuchsia-500/10",
    border: "hover:border-fuchsia-200 dark:hover:border-fuchsia-500/30",
  },
  {
    id: "report",
    label: "Generate Report",
    description: "Export platform analytics",
    icon: FileBarChart,
    accent: "text-slate-700 dark:text-slate-300",
    bg: "bg-slate-100 dark:bg-slate-800/60",
    border: "hover:border-slate-300 dark:hover:border-slate-600",
  },
]

export default function QuickActions({ compact = false }) {
  const [tenantOpen, setTenantOpen] = useState(false)
  const [trainerOpen, setTrainerOpen] = useState(false)
  const [courseOpen, setCourseOpen] = useState(false)
  const [reportOpen, setReportOpen] = useState(false)

  const handlers = {
    tenant: () => setTenantOpen(true),
    trainer: () => setTrainerOpen(true),
    course: () => setCourseOpen(true),
    report: () => setReportOpen(true),
  }

  return (
    <>
      <DashboardCard compact={compact}>
        <SectionHeader
          compact={compact}
          title="Quick Actions"
          subtitle="Common admin workflows"
        />

        <div
          className={cn(
            "grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-2"
          )}
        >
          {actions.map((action) => {
            const Icon = action.icon

            return (
              <button
                key={action.id}
                type="button"
                onClick={handlers[action.id]}
                className={cn(
                  "group flex min-h-[110px] items-start gap-4 rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-left transition-all duration-200",
                  "hover:-translate-y-0.5 hover:bg-white hover:shadow-md",
                  "dark:border-slate-800/70 dark:bg-slate-900/50 dark:hover:bg-slate-900/80",
                  action.border
                )}
              >
                <div
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105",
                    action.bg
                  )}
                >
                  <Icon size={20} className={action.accent} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold leading-5 text-slate-900 dark:text-slate-100">
                    {action.label}
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {action.description}
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      </DashboardCard>

      <TenantFormModal
        open={tenantOpen}
        onOpenChange={setTenantOpen}
        mode="create"
      />

      <TrainerFormModal
        open={trainerOpen}
        onOpenChange={setTrainerOpen}
      />

      <CourseFormModal
        open={courseOpen}
        onOpenChange={setCourseOpen}
      />

      <ReportFormModal
        open={reportOpen}
        onOpenChange={setReportOpen}
      />
    </>
  )
}
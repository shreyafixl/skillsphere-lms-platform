"use client"

import { useState } from "react"
import {
  Building2,
  FileBarChart,
  GraduationCap,
  Upload,
} from "lucide-react"
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
    gradient: "from-violet-600 to-violet-700",
    hover: "hover:shadow-violet-500/25",
  },
  {
    id: "trainer",
    label: "Add Trainer",
    description: "Invite a course instructor",
    icon: GraduationCap,
    gradient: "from-indigo-600 to-indigo-700",
    hover: "hover:shadow-indigo-500/25",
  },
  {
    id: "course",
    label: "Upload Course",
    description: "Add content to the catalog",
    icon: Upload,
    gradient: "from-fuchsia-600 to-fuchsia-700",
    hover: "hover:shadow-fuchsia-500/25",
  },
  {
    id: "report",
    label: "Generate Report",
    description: "Export platform analytics",
    icon: FileBarChart,
    gradient: "from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800",
    hover: "hover:shadow-slate-500/25 dark:hover:shadow-slate-900/40",
  },
]

export default function QuickActions() {
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
      <DashboardCard>
        <SectionHeader
          title="Quick Actions"
          subtitle="Common admin workflows"
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {actions.map((action) => {
            const Icon = action.icon
            return (
              <button
                key={action.id}
                type="button"
                onClick={handlers[action.id]}
                className={`group flex flex-col items-start gap-3 rounded-2xl bg-gradient-to-br ${action.gradient} p-4 text-left text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${action.hover}`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold">{action.label}</p>
                  <p className="mt-0.5 text-xs text-white/70">
                    {action.description}
                  </p>
                </div>
              </button>
            )
          })}
        </div>
      </DashboardCard>

      <TenantFormModal open={tenantOpen} onOpenChange={setTenantOpen} mode="create" />
      <TrainerFormModal open={trainerOpen} onOpenChange={setTrainerOpen} />
      <CourseFormModal open={courseOpen} onOpenChange={setCourseOpen} />
      <ReportFormModal open={reportOpen} onOpenChange={setReportOpen} />
    </>
  )
}

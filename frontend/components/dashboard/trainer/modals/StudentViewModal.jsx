"use client"

import DashboardModal from "@/components/dashboard/modals/DashboardModal"
import StatusBadge from "../StatusBadge"

export default function StudentViewModal({ open, onOpenChange, student }) {
  if (!student) return null
  return (
    <DashboardModal
      open={open}
      onOpenChange={onOpenChange}
      title={student.name}
      description="Learner progress and submission activity"
    >
      <div className="space-y-4 p-6">
        <dl className="grid gap-3 sm:grid-cols-2">
          {[
            ["Email", student.email],
            ["Course", student.course],
            ["Progress", `${student.progress}%`],
            ["Last submission", student.lastSubmission],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-800/40">
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-400">{label}</dt>
              <dd className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-500">Status</span>
          <StatusBadge status={student.status} />
        </div>
      </div>
    </DashboardModal>
  )
}

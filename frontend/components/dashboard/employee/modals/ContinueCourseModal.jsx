"use client"

import { Play } from "lucide-react"
import DashboardModal from "@/components/dashboard/modals/DashboardModal"
import StatusBadge from "../StatusBadge"

export default function ContinueCourseModal({ open, onOpenChange, course, onContinue }) {
  if (!course) return null

  return (
    <DashboardModal
      open={open}
      onOpenChange={onOpenChange}
      title={course.title}
      description="Resume your learning journey"
    >
      <div className="space-y-4 p-6">
        <dl className="grid gap-3 sm:grid-cols-2">
          {[
            ["Instructor", course.instructor],
            ["Category", course.category],
            ["Progress", `${course.progress}%`],
            ["Modules", `${course.completedModules} of ${course.modules}`],
            ["Due date", course.dueDate],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-800/40">
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-400">{label}</dt>
              <dd className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">{value}</dd>
            </div>
          ))}
        </dl>
        <StatusBadge status={course.status} />
        <button
          type="button"
          onClick={() => {
            onContinue?.(course)
            onOpenChange(false)
          }}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl"
        >
          <Play size={18} />
          Resume Course
        </button>
      </div>
    </DashboardModal>
  )
}

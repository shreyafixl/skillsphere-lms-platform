"use client"

import DashboardModal from "@/components/dashboard/modals/DashboardModal"
import StatusBadge from "../StatusBadge"

export default function TeamMemberViewModal({ open, onOpenChange, member }) {
  if (!member) return null

  return (
    <DashboardModal
      open={open}
      onOpenChange={onOpenChange}
      title={member.name}
      description="Team member profile and learning summary"
      size="default"
    >
      <div className="space-y-4 p-6">
        <dl className="grid gap-3 sm:grid-cols-2">
          {[
            ["Email", member.email],
            ["Role", member.role],
            ["Progress", `${member.progress}%`],
            ["Active courses", String(member.courses)],
            ["Last active", member.lastActive],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-800/40"
            >
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-400">
                {label}
              </dt>
              <dd className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">
                {value}
              </dd>
            </div>
          ))}
        </dl>
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-500">Status</span>
          <StatusBadge status={member.status} />
        </div>
      </div>
    </DashboardModal>
  )
}

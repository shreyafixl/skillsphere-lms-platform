"use client"

import DashboardModal from "@/components/dashboard/modals/DashboardModal"

export default function ProfileModal({ open, onOpenChange, profile }) {
  return (
    <DashboardModal
      open={open}
      onOpenChange={onOpenChange}
      title="My Profile"
      description="Your account overview (mock data)."
      size="default"
    >
      <div className="space-y-6 p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-xl font-bold text-white shadow-lg shadow-violet-500/25">
            {profile.avatar}
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900 dark:text-slate-50">
              {profile.name}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {profile.role}
            </p>
          </div>
        </div>

        <dl className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-800/40">
            <dt className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Email
            </dt>
            <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
              {profile.email}
            </dd>
          </div>
          <div className="rounded-xl border border-slate-200/80 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-800/40">
            <dt className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Role
            </dt>
            <dd className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
              {profile.role}
            </dd>
          </div>
        </dl>
      </div>
    </DashboardModal>
  )
}

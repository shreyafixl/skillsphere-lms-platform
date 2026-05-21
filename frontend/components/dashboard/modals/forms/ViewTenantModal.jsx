"use client"

import { Building2, Globe, Users, Calendar } from "lucide-react"
import DashboardModal from "../DashboardModal"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const planStyles = {
  Enterprise: "bg-violet-50 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
  Pro: "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300",
  Starter: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
}

export default function ViewTenantModal({ open, onOpenChange, tenant, onEdit }) {
  if (!tenant) return null

  return (
    <DashboardModal
      open={open}
      onOpenChange={onOpenChange}
      title="Tenant Details"
      description={tenant.company}
      size="default"
    >
      <div className="space-y-5 px-6 py-5">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-md">
            <Building2 size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">{tenant.company}</h3>
            <span className={cn("mt-1 inline-flex rounded-lg px-2.5 py-1 text-xs font-semibold", planStyles[tenant.plan])}>
              {tenant.plan}
            </span>
          </div>
        </div>
        <dl className="grid gap-4 sm:grid-cols-2">
          {[
            { icon: Globe, label: "Domain", value: tenant.domain },
            { icon: Users, label: "Users", value: tenant.users?.toLocaleString?.() ?? tenant.users },
            { icon: Calendar, label: "Joined", value: tenant.joined },
          ].map((item) => (
            <div key={item.label} className="flex gap-3 rounded-2xl border border-slate-100 p-4 dark:border-slate-800">
              <item.icon size={18} className="shrink-0 text-violet-500" />
              <div>
                <dt className="text-xs text-slate-500 dark:text-slate-400">{item.label}</dt>
                <dd className="text-sm font-semibold text-slate-800 dark:text-slate-100">{item.value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
      <div className="flex justify-end gap-3 border-t border-slate-100 bg-slate-50/50 px-6 py-4 dark:border-slate-800 dark:bg-slate-900/50">
        <Button variant="outline" onClick={() => onOpenChange(false)} className="h-11 rounded-xl">
          Close
        </Button>
        <Button
          onClick={() => {
            onOpenChange(false)
            onEdit?.(tenant)
          }}
          className="h-11 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 text-white"
        >
          Edit Tenant
        </Button>
      </div>
    </DashboardModal>
  )
}

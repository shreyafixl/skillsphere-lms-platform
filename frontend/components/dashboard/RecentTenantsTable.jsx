"use client"

import Link from "next/link"
import { Building2, Eye, MoreHorizontal, Pencil } from "lucide-react"
import { cn } from "@/lib/utils"
import DashboardCard from "./DashboardCard"
import SectionHeader from "./SectionHeader"

const tenants = [
  {
    id: 1,
    company: "Acme Corporation",
    domain: "acme.skillsphere.io",
    users: 450,
    plan: "Enterprise",
    status: "active",
    joined: "Jan 12, 2025",
  },
  {
    id: 2,
    company: "TechFlow Inc",
    domain: "techflow.skillsphere.io",
    users: 280,
    plan: "Pro",
    status: "active",
    joined: "Feb 3, 2025",
  },
  {
    id: 3,
    company: "LearnHub Academy",
    domain: "learnhub.skillsphere.io",
    users: 120,
    plan: "Starter",
    status: "pending",
    joined: "Mar 18, 2025",
  },
  {
    id: 4,
    company: "GlobalEdu Partners",
    domain: "globaledu.skillsphere.io",
    users: 890,
    plan: "Enterprise",
    status: "active",
    joined: "Nov 8, 2024",
  },
  {
    id: 5,
    company: "SkillMint Labs",
    domain: "skillmint.skillsphere.io",
    users: 65,
    plan: "Starter",
    status: "inactive",
    joined: "Apr 2, 2025",
  },
]

const statusStyles = {
  active:
    "bg-emerald-50 text-emerald-700 ring-emerald-600/15 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/25",
  pending:
    "bg-amber-50 text-amber-700 ring-amber-600/15 dark:bg-amber-500/10 dark:text-amber-400 dark:ring-amber-500/25",
  inactive:
    "bg-slate-100 text-slate-600 ring-slate-500/10 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-600/20",
}

const planStyles = {
  Enterprise:
    "text-violet-700 bg-violet-50 dark:text-violet-300 dark:bg-violet-500/10",
  Pro: "text-indigo-700 bg-indigo-50 dark:text-indigo-300 dark:bg-indigo-500/10",
  Starter:
    "text-slate-600 bg-slate-100 dark:text-slate-300 dark:bg-slate-800",
}

function StatusBadge({ status, compact }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md font-semibold capitalize ring-1 ring-inset",
        compact ? "px-2 py-0.5 text-[10px]" : "rounded-full px-2.5 py-1 text-xs",
        statusStyles[status]
      )}
    >
      <span
        className={cn(
          "mr-1 rounded-full",
          compact ? "h-1 w-1" : "mr-1.5 h-1.5 w-1.5",
          status === "active" && "bg-emerald-500",
          status === "pending" && "bg-amber-500",
          status === "inactive" && "bg-slate-400"
        )}
      />
      {status}
    </span>
  )
}

export default function RecentTenantsTable({
  onViewTenant,
  onEditTenant,
  compact = false,
}) {
  return (
    <DashboardCard compact={compact} className="h-full">
      <SectionHeader
        compact={compact}
        title="Recent Tenants"
        subtitle="Latest organizations on the platform"
        action={
          <Link
            href="/dashboard/superadmin/tenants"
            className="text-xs font-medium text-violet-600 transition-colors hover:text-violet-700 dark:text-violet-400"
          >
            View all
          </Link>
        }
      />
      <div className="-mx-1 overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse">
          <thead>
            <tr className="border-b border-slate-100 dark:border-slate-800/80">
              {["Company", "Users", "Plan", "Status", "Actions"].map((col) => (
                <th
                  key={col}
                  className="px-2.5 py-2 text-left text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tenants.map((tenant) => (
              <tr
                key={tenant.id}
                className="group border-b border-slate-50 transition-colors last:border-0 hover:bg-violet-50/30 dark:border-slate-800/40 dark:hover:bg-violet-500/5"
              >
                <td className={cn("px-2.5", compact ? "py-2.5" : "py-3.5")}>
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-sm">
                      <Building2 size={14} />
                    </div>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                      {tenant.company}
                    </span>
                  </div>
                </td>
                <td
                  className={cn(
                    "px-2.5 text-xs text-slate-600 dark:text-slate-400",
                    compact ? "py-2.5" : "py-3.5"
                  )}
                >
                  {tenant.users.toLocaleString()}
                </td>
                <td className={cn("px-2.5", compact ? "py-2.5" : "py-3.5")}>
                  <span
                    className={cn(
                      "inline-flex rounded-md px-2 py-0.5 text-[10px] font-semibold",
                      planStyles[tenant.plan]
                    )}
                  >
                    {tenant.plan}
                  </span>
                </td>
                <td className={cn("px-2.5", compact ? "py-2.5" : "py-3.5")}>
                  <StatusBadge status={tenant.status} compact={compact} />
                </td>
                <td className={cn("px-2.5", compact ? "py-2.5" : "py-3.5")}>
                  <div className="flex items-center gap-0.5 opacity-80 transition-opacity group-hover:opacity-100">
                    <button
                      type="button"
                      onClick={() => onViewTenant?.(tenant)}
                      className="rounded-md p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-violet-600 dark:hover:bg-slate-800 dark:hover:text-violet-400"
                      aria-label="View tenant"
                    >
                      <Eye size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => onEditTenant?.(tenant)}
                      className="rounded-md p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-violet-600 dark:hover:bg-slate-800 dark:hover:text-violet-400"
                      aria-label="Edit tenant"
                    >
                      <Pencil size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => onEditTenant?.(tenant)}
                      className="rounded-md p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-violet-600 dark:hover:bg-slate-800 dark:hover:text-violet-400"
                      aria-label="More actions"
                    >
                      <MoreHorizontal size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardCard>
  )
}

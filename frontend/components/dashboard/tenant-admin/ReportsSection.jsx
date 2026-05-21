"use client"

import Link from "next/link"
import {
  BarChart3,
  Download,
  FileText,
  Shield,
  TrendingUp,
} from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import { reports as defaultReports } from "./tenant-admin-data"

const typeIcons = {
  Analytics: BarChart3,
  Compliance: Shield,
  Performance: TrendingUp,
  Engagement: FileText,
}

const typeColors = {
  Analytics: "bg-violet-50 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400",
  Compliance: "bg-blue-50 text-blue-600 dark:bg-blue-500/15 dark:text-blue-400",
  Performance: "bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-500/15 dark:text-fuchsia-400",
  Engagement: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400",
}

export default function ReportsSection({
  data,
  limit,
  showViewAll = false,
}) {
  const rows = data ?? defaultReports
  const items = limit ? rows.slice(0, limit) : rows

  const handleDownload = (name) => {
    toast.success("Report download started", { description: name })
  }

  return (
    <DashboardCard className="h-full">
      <SectionHeader
        title="Reports"
        subtitle="Export learning and compliance insights"
        action={
          showViewAll ? (
            <Link
              href="/dashboard/tenant-admin/reports"
              className="text-sm font-semibold text-violet-600 transition-colors hover:text-violet-500 dark:text-violet-400"
            >
              View all
            </Link>
          ) : null
        }
      />
      <ul className="space-y-3">
        {items.map((report) => {
          const Icon = typeIcons[report.type] ?? FileText

          return (
            <li
              key={report.id}
              className={cn(
                "flex flex-col gap-4 rounded-2xl border border-slate-100 p-4 transition-all duration-300 sm:flex-row sm:items-center",
                "hover:border-violet-200/80 hover:bg-violet-50/30 hover:shadow-sm",
                "dark:border-slate-800 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/5"
              )}
            >
              <div className="flex min-w-0 flex-1 items-start gap-3">
                <div
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                    typeColors[report.type]
                  )}
                >
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-slate-800 dark:text-slate-100">
                    {report.name}
                  </p>
                  <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                    {report.description}
                  </p>
                  <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">
                    {report.type} · Updated {report.updated} · {report.size}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleDownload(report.name)}
                className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl border border-slate-200/80 px-4 py-2.5 text-sm font-medium text-slate-700 transition-all hover:border-violet-200 hover:bg-white hover:text-violet-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-violet-500/40 dark:hover:bg-slate-800 dark:hover:text-violet-400 sm:self-center"
              >
                <Download size={16} />
                Export
              </button>
            </li>
          )
        })}
      </ul>
    </DashboardCard>
  )
}

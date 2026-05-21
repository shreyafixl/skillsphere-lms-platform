"use client"

import Link from "next/link"
import { Calendar, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import StatusBadge from "./StatusBadge"
import { upcomingDeadlines as defaultDeadlines } from "./manager-data"

const priorityBorder = {
  high: "border-rose-200/80 dark:border-rose-500/30",
  medium: "border-amber-200/80 dark:border-amber-500/30",
  low: "border-slate-200/80 dark:border-slate-700/80",
}

export default function UpcomingDeadlinesPanel({
  deadlines = defaultDeadlines,
  limit,
  showViewAll = false,
}) {
  const items = limit ? deadlines.slice(0, limit) : deadlines

  return (
    <DashboardCard className="h-full">
      <SectionHeader
        title="Upcoming Deadlines"
        subtitle="Courses due soon for your team"
        action={
          showViewAll ? (
            <Link
              href="/dashboard/manager/deadlines"
              className="text-sm font-semibold text-violet-600 transition-colors hover:text-violet-500 dark:text-violet-400"
            >
              View all
            </Link>
          ) : null
        }
      />
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className={cn(
              "rounded-2xl border p-4 transition-all duration-300",
              "hover:border-violet-200 hover:bg-violet-50/30 hover:shadow-sm",
              "dark:hover:border-violet-500/30 dark:hover:bg-violet-500/5",
              priorityBorder[item.priority]
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-semibold text-slate-800 dark:text-slate-100">
                  {item.course}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={14} />
                    {item.dueDate}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Users size={14} />
                    {item.learners} learners
                  </span>
                </div>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-2">
                <StatusBadge status={item.priority} />
                <span className="text-xs font-semibold text-violet-600 dark:text-violet-400">
                  {item.daysLeft}d left
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </DashboardCard>
  )
}

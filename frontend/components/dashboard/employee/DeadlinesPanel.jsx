"use client"

import Link from "next/link"
import { Calendar, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import StatusBadge from "./StatusBadge"
import { upcomingDeadlines as defaultDeadlines } from "./employee-data"

const priorityBorder = {
  high: "border-rose-200/80 dark:border-rose-500/30",
  medium: "border-amber-200/80 dark:border-amber-500/30",
}

export default function DeadlinesPanel({
  deadlines = defaultDeadlines,
  limit,
  showViewAll = false,
}) {
  const items = limit ? deadlines.slice(0, limit) : deadlines

  return (
    <DashboardCard className="h-full">
      <SectionHeader
        title="Upcoming Deadlines"
        subtitle="Assignments and quizzes due soon"
        action={
          showViewAll ? (
            <Link href="/dashboard/employee/deadlines" className="text-sm font-semibold text-violet-600 transition-colors hover:text-violet-500 dark:text-violet-400">
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
              "hover:border-violet-200 hover:bg-violet-50/30 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/5",
              priorityBorder[item.priority] ?? "border-slate-100 dark:border-slate-800"
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-medium text-violet-600 dark:text-violet-400">{item.course}</p>
                <p className="mt-1 font-semibold text-slate-800 dark:text-slate-100">{item.task}</p>
                <p className="mt-2 inline-flex items-center gap-1 text-xs text-slate-500">
                  <Calendar size={14} />
                  {item.dueDate}
                </p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-2">
                <StatusBadge status={item.priority} />
                <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">{item.daysLeft}d left</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </DashboardCard>
  )
}

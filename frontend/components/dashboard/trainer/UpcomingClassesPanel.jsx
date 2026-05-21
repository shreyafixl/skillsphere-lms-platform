"use client"

import Link from "next/link"
import { Calendar, MapPin, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import { upcomingClasses as defaultClasses } from "./trainer-data"

export default function UpcomingClassesPanel({
  classes = defaultClasses,
  limit,
  showViewAll = false,
}) {
  const items = limit ? classes.slice(0, limit) : classes

  return (
    <DashboardCard className="h-full">
      <SectionHeader
        title="Upcoming Classes"
        subtitle="Scheduled live sessions and workshops"
        action={
          showViewAll ? (
            <Link href="/dashboard/trainer/classes" className="text-sm font-semibold text-violet-600 transition-colors hover:text-violet-500 dark:text-violet-400">
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
              "rounded-2xl border border-slate-100 p-4 transition-all duration-300",
              "hover:border-violet-200 hover:bg-violet-50/30 hover:shadow-sm",
              "dark:border-slate-800 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/5"
            )}
          >
            <p className="text-xs font-medium text-violet-600 dark:text-violet-400">{item.course}</p>
            <p className="mt-1 font-semibold text-slate-800 dark:text-slate-100">{item.topic}</p>
            <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1">
                <Calendar size={14} />
                {item.date} · {item.time}
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin size={14} />
                {item.room}
              </span>
              <span className="inline-flex items-center gap-1">
                <Users size={14} />
                {item.learners} learners
              </span>
            </div>
          </li>
        ))}
      </ul>
    </DashboardCard>
  )
}

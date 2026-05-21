"use client"

import Link from "next/link"
import { Megaphone, Pin } from "lucide-react"
import { cn } from "@/lib/utils"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import { announcements as defaultAnnouncements } from "./trainer-data"

export default function AnnouncementsPanel({
  announcements = defaultAnnouncements,
  limit,
  showViewAll = false,
  onEdit,
}) {
  const items = limit ? announcements.slice(0, limit) : announcements

  return (
    <DashboardCard className="h-full">
      <SectionHeader
        title="Announcements"
        subtitle="Updates posted to your course cohorts"
        action={
          showViewAll ? (
            <Link href="/dashboard/trainer/announcements" className="text-sm font-semibold text-violet-600 transition-colors hover:text-violet-500 dark:text-violet-400">
              View all
            </Link>
          ) : null
        }
      />
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => onEdit?.(item)}
              className={cn(
                "w-full rounded-2xl border p-4 text-left transition-all duration-300",
                "hover:border-violet-200 hover:bg-violet-50/30 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/5",
                item.pinned
                  ? "border-violet-200/80 bg-violet-50/40 dark:border-violet-500/30 dark:bg-violet-500/10"
                  : "border-slate-100 dark:border-slate-800"
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex min-w-0 items-start gap-2">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-50 dark:bg-amber-500/15">
                    <Megaphone size={16} className="text-amber-600 dark:text-amber-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-800 dark:text-slate-100">{item.title}</p>
                    <p className="mt-0.5 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">{item.message}</p>
                    <p className="mt-2 text-xs text-slate-400">
                      {item.course} · {item.posted}
                    </p>
                  </div>
                </div>
                {item.pinned && <Pin size={14} className="shrink-0 text-violet-500" />}
              </div>
            </button>
          </li>
        ))}
      </ul>
    </DashboardCard>
  )
}

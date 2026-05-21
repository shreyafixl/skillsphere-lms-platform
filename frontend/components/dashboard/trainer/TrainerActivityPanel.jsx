"use client"

import { BookOpen, FileText, Megaphone, Upload, Video } from "lucide-react"
import { cn } from "@/lib/utils"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import { trainerActivities } from "./trainer-data"

const typeConfig = {
  submission: { icon: FileText, iconBg: "bg-blue-50 dark:bg-blue-500/15", iconColor: "text-blue-600 dark:text-blue-400" },
  session: { icon: Video, iconBg: "bg-violet-50 dark:bg-violet-500/15", iconColor: "text-violet-600 dark:text-violet-400" },
  upload: { icon: Upload, iconBg: "bg-fuchsia-50 dark:bg-fuchsia-500/15", iconColor: "text-fuchsia-600 dark:text-fuchsia-400" },
  announcement: { icon: Megaphone, iconBg: "bg-amber-50 dark:bg-amber-500/15", iconColor: "text-amber-600 dark:text-amber-400" },
  completion: { icon: BookOpen, iconBg: "bg-emerald-50 dark:bg-emerald-500/15", iconColor: "text-emerald-600 dark:text-emerald-400" },
}

export default function TrainerActivityPanel({
  activities = trainerActivities,
  limit,
  title = "Recent Activity",
  subtitle = "Latest events across your courses",
}) {
  const items = limit ? activities.slice(0, limit) : activities
  return (
    <DashboardCard className="h-full">
      <SectionHeader title={title} subtitle={subtitle} />
      <ul className="space-y-1">
        {items.map((activity) => {
          const config = typeConfig[activity.type] ?? typeConfig.submission
          const Icon = config.icon
          return (
            <li key={activity.id}>
              <div className={cn("flex gap-3 rounded-2xl p-3 transition-colors duration-300 hover:bg-slate-50 dark:hover:bg-slate-800/60")}>
                <div className={cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-xl", config.iconBg)}>
                  <Icon size={18} className={config.iconColor} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{activity.title}</p>
                  <p className="mt-0.5 truncate text-xs text-slate-500 dark:text-slate-400">{activity.description}</p>
                  <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">{activity.time}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </DashboardCard>
  )
}

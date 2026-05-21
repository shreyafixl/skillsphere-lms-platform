"use client"

import {
  Award,
  BookOpen,
  CheckCircle,
  Flame,
  Sparkles,
  Trophy,
} from "lucide-react"
import { cn } from "@/lib/utils"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import { activityTimeline as defaultTimeline } from "./employee-data"

const typeConfig = {
  lesson: { icon: BookOpen, iconBg: "bg-violet-50 dark:bg-violet-500/15", iconColor: "text-violet-600 dark:text-violet-400" },
  quiz: { icon: CheckCircle, iconBg: "bg-emerald-50 dark:bg-emerald-500/15", iconColor: "text-emerald-600 dark:text-emerald-400" },
  certificate: { icon: Award, iconBg: "bg-amber-50 dark:bg-amber-500/15", iconColor: "text-amber-600 dark:text-amber-400" },
  streak: { icon: Flame, iconBg: "bg-orange-50 dark:bg-orange-500/15", iconColor: "text-orange-600 dark:text-orange-400" },
  enrollment: { icon: Sparkles, iconBg: "bg-blue-50 dark:bg-blue-500/15", iconColor: "text-blue-600 dark:text-blue-400" },
  achievement: { icon: Trophy, iconBg: "bg-fuchsia-50 dark:bg-fuchsia-500/15", iconColor: "text-fuchsia-600 dark:text-fuchsia-400" },
}

export default function ActivityTimeline({
  activities = defaultTimeline,
  limit,
  title = "Activity Timeline",
  subtitle = "Your recent learning activity",
}) {
  const items = limit ? activities.slice(0, limit) : activities

  return (
    <DashboardCard className="h-full">
      <SectionHeader title={title} subtitle={subtitle} />
      <ul className="relative space-y-0">
        {items.map((activity, index) => {
          const config = typeConfig[activity.type] ?? typeConfig.lesson
          const Icon = config.icon
          const isLast = index === items.length - 1

          return (
            <li key={activity.id} className="relative flex gap-4 pb-6">
              {!isLast && (
                <span className="absolute left-5 top-10 h-[calc(100%-1rem)] w-px bg-slate-200 dark:bg-slate-700" />
              )}
              <div
                className={cn(
                  "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                  config.iconBg
                )}
              >
                <Icon size={18} className={config.iconColor} />
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{activity.title}</p>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{activity.description}</p>
                <p className="mt-1 text-xs text-slate-400">{activity.time}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </DashboardCard>
  )
}

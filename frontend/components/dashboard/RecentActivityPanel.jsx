"use client"

import {
  BookOpen,
  Building2,
  DollarSign,
  UserPlus,
} from "lucide-react"
import { cn } from "@/lib/utils"
import DashboardCard from "./DashboardCard"
import SectionHeader from "./SectionHeader"

const activities = [
  {
    id: 1,
    type: "user",
    title: "New user joined",
    description: "Sarah Chen joined Acme Corporation",
    time: "2 min ago",
    icon: UserPlus,
    iconBg: "bg-blue-50 dark:bg-blue-500/15",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    id: 2,
    type: "tenant",
    title: "Tenant onboarded",
    description: "TechFlow Inc completed onboarding",
    time: "15 min ago",
    icon: Building2,
    iconBg: "bg-violet-50 dark:bg-violet-500/15",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    id: 3,
    type: "course",
    title: "Course uploaded",
    description: "Advanced React Patterns added to catalog",
    time: "1 hr ago",
    icon: BookOpen,
    iconBg: "bg-fuchsia-50 dark:bg-fuchsia-500/15",
    iconColor: "text-fuchsia-600 dark:text-fuchsia-400",
  },
  {
    id: 4,
    type: "revenue",
    title: "Revenue update",
    description: "Monthly recurring revenue crossed $50K",
    time: "3 hrs ago",
    icon: DollarSign,
    iconBg: "bg-emerald-50 dark:bg-emerald-500/15",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
]

export default function RecentActivityPanel() {
  return (
    <DashboardCard className="h-full">
      <SectionHeader
        title="Recent Activity"
        subtitle="Live platform events"
      />
      <ul className="space-y-1">
        {activities.map((activity, index) => {
          const Icon = activity.icon
          return (
            <li key={activity.id}>
              <div
                className={cn(
                  "flex gap-3 rounded-2xl p-3 transition-colors duration-300 hover:bg-slate-50 dark:hover:bg-slate-800/60",
                  index !== activities.length - 1 && "mb-0.5"
                )}
              >
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                    activity.iconBg
                  )}
                >
                  <Icon size={18} className={activity.iconColor} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                    {activity.title}
                  </p>
                  <p className="mt-0.5 truncate text-xs text-slate-500 dark:text-slate-400">
                    {activity.description}
                  </p>
                  <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                    {activity.time}
                  </p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </DashboardCard>
  )
}

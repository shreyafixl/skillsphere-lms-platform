"use client"

import { Flame, Target } from "lucide-react"
import { cn } from "@/lib/utils"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import { employeeInfo, streakCalendar } from "./employee-data"

export default function StreakCard({
  streakDays = employeeInfo.streakDays,
  totalHours = employeeInfo.totalHours,
  calendar = streakCalendar,
}) {
  return (
    <DashboardCard className="h-full">
      <SectionHeader title="Learning Streak" subtitle="Stay consistent to unlock achievements" />
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 shadow-lg shadow-orange-500/30">
            <Flame size={32} className="text-white" />
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">{streakDays}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">day streak</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex justify-between gap-1">
            {calendar.map((day) => (
              <div key={day.day} className="flex flex-1 flex-col items-center gap-1.5">
                <div
                  className={cn(
                    "h-8 w-full max-w-[36px] rounded-lg transition-colors",
                    day.active
                      ? "bg-gradient-to-t from-orange-500 to-amber-400 shadow-sm shadow-orange-500/30"
                      : "bg-slate-100 dark:bg-slate-800"
                  )}
                />
                <span className="text-[10px] font-medium text-slate-400">{day.day}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-violet-50/80 px-3 py-2 dark:bg-violet-500/10">
            <Target size={16} className="text-violet-600 dark:text-violet-400" />
            <span className="text-sm text-slate-600 dark:text-slate-300">
              <strong className="text-slate-900 dark:text-slate-100">{totalHours}h</strong> learned this month
            </span>
          </div>
        </div>
      </div>
    </DashboardCard>
  )
}

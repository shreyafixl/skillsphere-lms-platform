"use client"

import { Compass, Flame, Shield, Star, Trophy, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import { achievements as defaultAchievements } from "./employee-data"

const iconMap = {
  zap: Zap,
  shield: Shield,
  flame: Flame,
  trophy: Trophy,
  star: Star,
  compass: Compass,
}

export default function AchievementsGrid({ achievements = defaultAchievements }) {
  const earned = achievements.filter((a) => a.earned).length

  return (
    <DashboardCard>
      <SectionHeader title="Achievements" subtitle={`${earned} of ${achievements.length} badges earned`} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((badge) => {
          const Icon = iconMap[badge.iconKey] ?? Trophy

          return (
            <div
              key={badge.id}
              className={cn(
                "rounded-2xl border p-4 transition-all duration-300",
                badge.earned
                  ? "border-violet-200/80 bg-gradient-to-br from-violet-50/80 to-fuchsia-50/40 shadow-sm dark:border-violet-500/30 dark:from-violet-500/10 dark:to-fuchsia-500/5"
                  : "border-slate-100 opacity-90 dark:border-slate-800",
                !badge.earned && "hover:border-slate-200 dark:hover:border-slate-700"
              )}
            >
              <div
                className={cn(
                  "mb-3 flex h-12 w-12 items-center justify-center rounded-xl",
                  badge.earned
                    ? "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-500/30"
                    : "bg-slate-100 text-slate-400 dark:bg-slate-800"
                )}
              >
                <Icon size={24} />
              </div>
              <p className="font-semibold text-slate-900 dark:text-slate-100">{badge.title}</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{badge.description}</p>
              {badge.earned ? (
                <p className="mt-2 text-xs font-medium text-violet-600 dark:text-violet-400">
                  Earned {badge.earnedDate}
                </p>
              ) : (
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Progress</span>
                    <span>{badge.progress}%</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div
                      className="h-full rounded-full bg-violet-500"
                      style={{ width: `${badge.progress}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </DashboardCard>
  )
}

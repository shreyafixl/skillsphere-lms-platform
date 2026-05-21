"use client"

import { Flame, Trophy, Zap } from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import StatsCard from "@/components/dashboard/StatsCard"
import { EmployeeLayout, AchievementsGrid, achievements, EmployeePageSection } from "@/components/dashboard/employee"

export default function EmployeeAchievementsPage() {
  const earned = achievements.filter((a) => a.earned).length

  return (
    <EmployeeLayout topbarTitle="Achievements">
      <EmployeePageSection className="space-y-6 sm:space-y-8">
        <PageHeader title="Achievements" description="Earn badges by completing courses, maintaining streaks, and hitting milestones." />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatsCard title="Badges Earned" value={String(earned)} growth={`${achievements.length} total`} icon={<Trophy size={24} />} iconBg="bg-amber-50 dark:bg-amber-500/15" iconColor="text-amber-600 dark:text-amber-400" />
          <StatsCard title="In Progress" value={String(achievements.length - earned)} growth="Keep going" icon={<Zap size={24} />} iconBg="bg-violet-50 dark:bg-violet-500/15" iconColor="text-violet-600 dark:text-violet-400" />
          <StatsCard title="Next Unlock" value="Streak Master" growth="86% complete" icon={<Flame size={24} />} iconBg="bg-orange-50 dark:bg-orange-500/15" iconColor="text-orange-600 dark:text-orange-400" />
        </div>
        <AchievementsGrid />
      </EmployeePageSection>
    </EmployeeLayout>
  )
}

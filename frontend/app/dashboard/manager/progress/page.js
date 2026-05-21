"use client"

import { Target, TrendingUp, UserCheck, AlertTriangle } from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import StatsCard from "@/components/dashboard/StatsCard"
import {
  ManagerLayout,
  TeamProgressTable,
  ManagerPerformanceChart,
  ManagerPageSection,
} from "@/components/dashboard/manager"

export default function ManagerProgressPage() {
  return (
    <ManagerLayout topbarTitle="Team Progress">
      {({ teamMembers, openFilters }) => {
        const avgProgress = Math.round(
          teamMembers.reduce((s, m) => s + m.progress, 0) / teamMembers.length
        )
        const onTrack = teamMembers.filter((m) => m.progress >= 70).length
        const atRisk = teamMembers.filter((m) => m.status === "at-risk").length

        return (
          <ManagerPageSection className="space-y-6 sm:space-y-8">
            <PageHeader
              title="Employee Progress Tracking"
              description="Monitor learning progress and identify learners who need support."
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatsCard
                title="Avg. Progress"
                value={`${avgProgress}%`}
                growth="+5.2%"
                icon={<Target size={24} />}
                iconBg="bg-violet-50 dark:bg-violet-500/15"
                iconColor="text-violet-600 dark:text-violet-400"
              />
              <StatsCard
                title="On Track"
                value={String(onTrack)}
                growth="70%+ progress"
                icon={<UserCheck size={24} />}
                iconBg="bg-emerald-50 dark:bg-emerald-500/15"
                iconColor="text-emerald-600 dark:text-emerald-400"
              />
              <StatsCard
                title="Improving"
                value="+6"
                growth="This month"
                icon={<TrendingUp size={24} />}
                iconBg="bg-blue-50 dark:bg-blue-500/15"
                iconColor="text-blue-600 dark:text-blue-400"
              />
              <StatsCard
                title="At Risk"
                value={String(atRisk)}
                growth="Action needed"
                icon={<AlertTriangle size={24} />}
                iconBg="bg-rose-50 dark:bg-rose-500/15"
                iconColor="text-rose-600 dark:text-rose-400"
              />
            </div>

            <ManagerPerformanceChart
              title="Progress Trends"
              subtitle="Team average progress and completions over time"
            />

            <TeamProgressTable
              data={teamMembers}
              onOpenFilters={openFilters}
            />
          </ManagerPageSection>
        )
      }}
    </ManagerLayout>
  )
}

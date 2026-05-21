"use client"

import { AlertTriangle, Calendar, Clock, Users } from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import StatsCard from "@/components/dashboard/StatsCard"
import {
  ManagerLayout,
  UpcomingDeadlinesPanel,
  upcomingDeadlines,
  ManagerPageSection,
} from "@/components/dashboard/manager"

export default function ManagerDeadlinesPage() {
  const urgent = upcomingDeadlines.filter((d) => d.priority === "high").length
  const totalLearners = upcomingDeadlines.reduce((s, d) => s + d.learners, 0)

  return (
    <ManagerLayout topbarTitle="Deadlines">
      <ManagerPageSection className="space-y-6 sm:space-y-8">
        <PageHeader
          title="Upcoming Deadlines"
          description="Course due dates and learner counts for your team."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatsCard
            title="Due Soon"
            value={String(upcomingDeadlines.length)}
            growth="Next 30 days"
            icon={<Calendar size={24} />}
            iconBg="bg-violet-50 dark:bg-violet-500/15"
            iconColor="text-violet-600 dark:text-violet-400"
          />
          <StatsCard
            title="Urgent"
            value={String(urgent)}
            growth="≤ 3 days"
            icon={<AlertTriangle size={24} />}
            iconBg="bg-rose-50 dark:bg-rose-500/15"
            iconColor="text-rose-600 dark:text-rose-400"
          />
          <StatsCard
            title="Learners Affected"
            value={String(totalLearners)}
            growth="Across courses"
            icon={<Users size={24} />}
            iconBg="bg-blue-50 dark:bg-blue-500/15"
            iconColor="text-blue-600 dark:text-blue-400"
          />
          <StatsCard
            title="Next Due"
            value="3d"
            growth="React Advanced"
            icon={<Clock size={24} />}
            iconBg="bg-amber-50 dark:bg-amber-500/15"
            iconColor="text-amber-600 dark:text-amber-400"
          />
        </div>

        <UpcomingDeadlinesPanel />
      </ManagerPageSection>
    </ManagerLayout>
  )
}

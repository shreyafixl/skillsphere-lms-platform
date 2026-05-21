"use client"

import { AlertCircle, Calendar, Clock } from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import StatsCard from "@/components/dashboard/StatsCard"
import { EmployeeLayout, DeadlinesPanel, upcomingDeadlines, EmployeePageSection } from "@/components/dashboard/employee"

export default function EmployeeDeadlinesPage() {
  const urgent = upcomingDeadlines.filter((d) => d.priority === "high").length

  return (
    <EmployeeLayout topbarTitle="Deadlines">
      <EmployeePageSection className="space-y-6 sm:space-y-8">
        <PageHeader title="Upcoming Deadlines" description="Stay on track with assignments, quizzes, and project due dates." />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatsCard title="Due Soon" value={String(upcomingDeadlines.length)} growth="Next 30 days" icon={<Calendar size={24} />} iconBg="bg-violet-50 dark:bg-violet-500/15" iconColor="text-violet-600 dark:text-violet-400" />
          <StatsCard title="Urgent" value={String(urgent)} growth="≤ 7 days" icon={<AlertCircle size={24} />} iconBg="bg-rose-50 dark:bg-rose-500/15" iconColor="text-rose-600 dark:text-rose-400" />
          <StatsCard title="Next Due" value="3d" growth="Module 3 quiz" icon={<Clock size={24} />} iconBg="bg-amber-50 dark:bg-amber-500/15" iconColor="text-amber-600 dark:text-amber-400" />
        </div>
        <DeadlinesPanel />
      </EmployeePageSection>
    </EmployeeLayout>
  )
}

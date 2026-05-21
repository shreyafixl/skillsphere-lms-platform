"use client"

import { BarChart3, Building2, Target, Users } from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import StatsCard from "@/components/dashboard/StatsCard"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import {
  ManagerLayout,
  DepartmentAnalyticsChart,
  CourseCompletionTable,
  departmentAnalytics,
  ManagerPageSection,
} from "@/components/dashboard/manager"

export default function ManagerAnalyticsPage() {
  const totalEnrolled = departmentAnalytics.reduce((s, d) => s + d.enrolled, 0)
  const avgCompletion = Math.round(
    departmentAnalytics.reduce((s, d) => s + d.completion, 0) /
      departmentAnalytics.length
  )

  return (
    <ManagerLayout topbarTitle="Analytics">
      <div className="space-y-6 sm:space-y-8">
        <PageHeader
          title="Department Analytics"
          description="Completion rates and progress across squads in your department."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatsCard
            title="Squads"
            value={String(departmentAnalytics.length)}
            growth="Engineering"
            icon={<Building2 size={24} />}
            iconBg="bg-violet-50 dark:bg-violet-500/15"
            iconColor="text-violet-600 dark:text-violet-400"
          />
          <StatsCard
            title="Total Enrolled"
            value={String(totalEnrolled)}
            growth="+4"
            icon={<Users size={24} />}
            iconBg="bg-blue-50 dark:bg-blue-500/15"
            iconColor="text-blue-600 dark:text-blue-400"
          />
          <StatsCard
            title="Avg. Completion"
            value={`${avgCompletion}%`}
            growth="+3.1%"
            icon={<Target size={24} />}
            iconBg="bg-emerald-50 dark:bg-emerald-500/15"
            iconColor="text-emerald-600 dark:text-emerald-400"
          />
          <StatsCard
            title="Top Squad"
            value="QA"
            growth="91% completion"
            icon={<BarChart3 size={24} />}
            iconBg="bg-fuchsia-50 dark:bg-fuchsia-500/15"
            iconColor="text-fuchsia-600 dark:text-fuchsia-400"
          />
        </div>

        <DepartmentAnalyticsChart />

        <DashboardCard>
          <SectionHeader
            title="Squad Breakdown"
            subtitle="Enrolled learners and average progress by squad"
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {departmentAnalytics.map((squad) => (
              <div
                key={squad.department}
                className="rounded-2xl border border-slate-100 p-4 transition-colors hover:border-violet-200 hover:bg-violet-50/30 dark:border-slate-800 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/5"
              >
                <p className="font-semibold text-slate-800 dark:text-slate-100">
                  {squad.department}
                </p>
                <p className="mt-2 text-2xl font-bold text-violet-600 dark:text-violet-400">
                  {squad.completion}%
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {squad.enrolled} enrolled · {squad.avgProgress}% avg. progress
                </p>
              </div>
            ))}
          </div>
        </DashboardCard>

        <CourseCompletionTable />
      </div>
    </ManagerLayout>
  )
}

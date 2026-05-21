"use client"

import { Flame, Target, Clock } from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import StatsCard from "@/components/dashboard/StatsCard"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import { cn } from "@/lib/utils"
import {
  EmployeeLayout,
  LearningProgressChart,
  StreakCard,
  enrolledCourses,
  employeeInfo,
  EmployeePageSection,
} from "@/components/dashboard/employee"

export default function EmployeeProgressPage() {
  const avgProgress = Math.round(
    enrolledCourses.reduce((s, c) => s + c.progress, 0) / enrolledCourses.length
  )

  return (
    <EmployeeLayout topbarTitle="Progress">
      <EmployeePageSection className="space-y-6 sm:space-y-8">
        <PageHeader title="Learning Progress" description="Track your study habits, streak, and course completion over time." />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatsCard title="Overall Progress" value={`${avgProgress}%`} growth="+6% this month" icon={<Target size={24} />} iconBg="bg-violet-50 dark:bg-violet-500/15" iconColor="text-violet-600 dark:text-violet-400" />
          <StatsCard title="Learning Streak" value={`${employeeInfo.streakDays} days`} growth="Personal best!" icon={<Flame size={24} />} iconBg="bg-orange-50 dark:bg-orange-500/15" iconColor="text-orange-600 dark:text-orange-400" />
          <StatsCard title="Hours This Month" value={`${employeeInfo.totalHours}h`} growth="+12h" icon={<Clock size={24} />} iconBg="bg-blue-50 dark:bg-blue-500/15" iconColor="text-blue-600 dark:text-blue-400" />
        </div>
        <StreakCard />
        <LearningProgressChart />
        <DashboardCard>
          <SectionHeader title="Progress by Course" subtitle="Completion across your enrolled courses" />
          <div className="space-y-4">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="rounded-2xl border border-slate-100 p-4 dark:border-slate-800">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-semibold text-slate-900 dark:text-slate-100">{course.title}</p>
                  <span className="text-sm font-bold text-violet-600 dark:text-violet-400">{course.progress}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                  <div
                    className={cn(
                      "h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500",
                      course.progress === 100 && "from-emerald-500 to-teal-500"
                    )}
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  {course.completedModules} of {course.modules} modules · Due {course.dueDate}
                </p>
              </div>
            ))}
          </div>
        </DashboardCard>
      </EmployeePageSection>
    </EmployeeLayout>
  )
}

"use client"

import { BarChart3, BookOpen, Target, Users } from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import StatsCard from "@/components/dashboard/StatsCard"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import { cn } from "@/lib/utils"
import {
  TrainerLayout,
  LearnerAnalyticsChart,
  assignedCourses,
  TrainerPageSection,
} from "@/components/dashboard/trainer"

export default function TrainerAnalyticsPage() {
  const totalStudents = assignedCourses.reduce((s, c) => s + c.students, 0)
  const avgCompletion = Math.round(
    assignedCourses.reduce((s, c) => s + c.completion, 0) / assignedCourses.length
  )

  return (
    <TrainerLayout topbarTitle="Analytics">
      <TrainerPageSection className="space-y-6 sm:space-y-8">
        <PageHeader title="Learner Analytics" description="Engagement, completions, and performance across your assigned courses." />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatsCard title="Active Learners" value="112" growth="+8" icon={<Users size={24} />} iconBg="bg-blue-50 dark:bg-blue-500/15" iconColor="text-blue-600 dark:text-blue-400" />
          <StatsCard title="Avg. Completion" value={`${avgCompletion}%`} growth="+4.1%" icon={<Target size={24} />} iconBg="bg-emerald-50 dark:bg-emerald-500/15" iconColor="text-emerald-600 dark:text-emerald-400" />
          <StatsCard title="Courses" value={String(assignedCourses.length)} growth="Assigned" icon={<BookOpen size={24} />} iconBg="bg-violet-50 dark:bg-violet-500/15" iconColor="text-violet-600 dark:text-violet-400" />
          <StatsCard title="Enrollments" value={String(totalStudents)} growth="+12%" icon={<BarChart3 size={24} />} iconBg="bg-fuchsia-50 dark:bg-fuchsia-500/15" iconColor="text-fuchsia-600 dark:text-fuchsia-400" />
        </div>
        <LearnerAnalyticsChart />
        <DashboardCard>
          <SectionHeader title="Course Performance" subtitle="Completion rates by assigned course" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {assignedCourses.map((course) => (
              <div
                key={course.id}
                className="rounded-2xl border border-slate-100 p-4 transition-colors hover:border-violet-200 hover:bg-violet-50/30 dark:border-slate-800 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/5"
              >
                <p className="font-semibold text-slate-800 dark:text-slate-100">{course.title}</p>
                <p className="mt-1 text-xs text-slate-500">{course.students} students</p>
                <p className="mt-2 text-2xl font-bold text-violet-600 dark:text-violet-400">{course.completion}%</p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                  <div
                    className={cn(
                      "h-full rounded-full",
                      course.completion >= 80 ? "bg-emerald-500" : course.completion >= 50 ? "bg-violet-500" : "bg-amber-500"
                    )}
                    style={{ width: `${course.completion}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </TrainerPageSection>
    </TrainerLayout>
  )
}

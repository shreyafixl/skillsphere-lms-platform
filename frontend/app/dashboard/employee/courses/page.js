"use client"

import { BookOpen, CheckCircle, Play, Target } from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import StatsCard from "@/components/dashboard/StatsCard"
import { EmployeeLayout, EnrolledCoursesGrid, EmployeePageSection } from "@/components/dashboard/employee"

export default function EmployeeCoursesPage() {
  return (
    <EmployeeLayout topbarTitle="My Courses">
      {({ enrolledCourses, openContinueCourse }) => {
        const inProgress = enrolledCourses.filter((c) => c.status === "in-progress").length
        const completed = enrolledCourses.filter((c) => c.status === "completed").length
        const avgProgress = Math.round(
          enrolledCourses.reduce((s, c) => s + c.progress, 0) / enrolledCourses.length
        )

        return (
          <EmployeePageSection className="space-y-6 sm:space-y-8">
            <PageHeader title="Enrolled Courses" description="All courses you're currently taking or have completed." />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <StatsCard title="In Progress" value={String(inProgress)} growth="Active" icon={<Play size={24} />} iconBg="bg-violet-50 dark:bg-violet-500/15" iconColor="text-violet-600 dark:text-violet-400" />
              <StatsCard title="Completed" value={String(completed)} growth="Certified" icon={<CheckCircle size={24} />} iconBg="bg-emerald-50 dark:bg-emerald-500/15" iconColor="text-emerald-600 dark:text-emerald-400" />
              <StatsCard title="Avg. Progress" value={`${avgProgress}%`} growth="+6%" icon={<Target size={24} />} iconBg="bg-blue-50 dark:bg-blue-500/15" iconColor="text-blue-600 dark:text-blue-400" />
            </div>
            <EnrolledCoursesGrid courses={enrolledCourses} onContinue={openContinueCourse} />
          </EmployeePageSection>
        )
      }}
    </EmployeeLayout>
  )
}

"use client"

import { AlertTriangle, Target, UserCheck, Users } from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import StatsCard from "@/components/dashboard/StatsCard"
import { TrainerLayout, StudentProgressTable, TrainerPageSection } from "@/components/dashboard/trainer"

export default function TrainerStudentsPage() {
  return (
    <TrainerLayout topbarTitle="Students">
      {({ students, openViewStudent, openFilters }) => {
        const avg = Math.round(students.reduce((s, m) => s + m.progress, 0) / students.length)
        const atRisk = students.filter((s) => s.status === "at-risk").length
        const completed = students.filter((s) => s.status === "completed").length

        return (
          <TrainerPageSection className="space-y-6 sm:space-y-8">
            <PageHeader title="Student Progress" description="Track learner progress and submission activity across your courses." />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatsCard title="Learners" value={String(students.length)} growth="Enrolled" icon={<Users size={24} />} iconBg="bg-blue-50 dark:bg-blue-500/15" iconColor="text-blue-600 dark:text-blue-400" />
              <StatsCard title="Avg. Progress" value={`${avg}%`} growth="+5.2%" icon={<Target size={24} />} iconBg="bg-violet-50 dark:bg-violet-500/15" iconColor="text-violet-600 dark:text-violet-400" />
              <StatsCard title="Completed" value={String(completed)} growth="Certified" icon={<UserCheck size={24} />} iconBg="bg-emerald-50 dark:bg-emerald-500/15" iconColor="text-emerald-600 dark:text-emerald-400" />
              <StatsCard title="At Risk" value={String(atRisk)} growth="Needs support" icon={<AlertTriangle size={24} />} iconBg="bg-rose-50 dark:bg-rose-500/15" iconColor="text-rose-600 dark:text-rose-400" />
            </div>
            <StudentProgressTable data={students} onViewStudent={openViewStudent} onOpenFilters={openFilters} />
          </TrainerPageSection>
        )
      }}
    </TrainerLayout>
  )
}

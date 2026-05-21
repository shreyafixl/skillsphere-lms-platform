"use client"

import { CheckCircle, Clock, FileText } from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import StatsCard from "@/components/dashboard/StatsCard"
import { TrainerLayout, RecentSubmissionsTable, TrainerPageSection } from "@/components/dashboard/trainer"

export default function TrainerSubmissionsPage() {
  return (
    <TrainerLayout topbarTitle="Submissions">
      {({ recentSubmissions, openGradeSubmission, openFilters }) => {
        const pending = recentSubmissions.filter((s) => s.status === "pending").length
        const graded = recentSubmissions.filter((s) => s.status === "graded").length
        const avgScore = Math.round(
          recentSubmissions.filter((s) => s.score != null).reduce((s, r) => s + r.score, 0) /
            graded || 1
        )

        return (
          <TrainerPageSection className="space-y-6 sm:space-y-8">
            <PageHeader title="Recent Submissions" description="Review, grade, and provide feedback on learner assignments." />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <StatsCard title="Pending Review" value={String(pending)} growth="Action needed" icon={<Clock size={24} />} iconBg="bg-amber-50 dark:bg-amber-500/15" iconColor="text-amber-600 dark:text-amber-400" />
              <StatsCard title="Graded" value={String(graded)} growth="This week" icon={<CheckCircle size={24} />} iconBg="bg-emerald-50 dark:bg-emerald-500/15" iconColor="text-emerald-600 dark:text-emerald-400" />
              <StatsCard title="Avg. Score" value={`${avgScore}%`} growth="Graded items" icon={<FileText size={24} />} iconBg="bg-violet-50 dark:bg-violet-500/15" iconColor="text-violet-600 dark:text-violet-400" />
            </div>
            <RecentSubmissionsTable data={recentSubmissions} onGrade={openGradeSubmission} onOpenFilters={openFilters} />
          </TrainerPageSection>
        )
      }}
    </TrainerLayout>
  )
}

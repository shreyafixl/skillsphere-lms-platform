"use client"

import { BookOpen, Target, Upload, Users } from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import { PrimaryActionButton } from "@/components/dashboard/ActionButton"
import StatsCard from "@/components/dashboard/StatsCard"
import { TrainerLayout, AssignedCoursesTable, TrainerPageSection } from "@/components/dashboard/trainer"

export default function TrainerCoursesPage() {
  return (
    <TrainerLayout topbarTitle="Courses">
      {({ assignedCourses, openUploadMaterial, openFilters }) => {
        const live = assignedCourses.filter((c) => c.status === "live").length
        const totalStudents = assignedCourses.reduce((s, c) => s + c.students, 0)
        const avgCompletion = Math.round(
          assignedCourses.reduce((s, c) => s + c.completion, 0) / assignedCourses.length
        )

        return (
          <TrainerPageSection className="space-y-6 sm:space-y-8">
            <PageHeader
              title="Assigned Courses"
              description="Courses you lead, with learner counts and completion rates."
              action={
                <PrimaryActionButton onClick={() => openUploadMaterial()}>
                  <Upload size={18} />
                  Upload Material
                </PrimaryActionButton>
              }
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <StatsCard title="Live Courses" value={String(live)} growth={`${assignedCourses.length} total`} icon={<BookOpen size={24} />} iconBg="bg-violet-50 dark:bg-violet-500/15" iconColor="text-violet-600 dark:text-violet-400" />
              <StatsCard title="Total Students" value={String(totalStudents)} growth="+8" icon={<Users size={24} />} iconBg="bg-blue-50 dark:bg-blue-500/15" iconColor="text-blue-600 dark:text-blue-400" />
              <StatsCard title="Avg. Completion" value={`${avgCompletion}%`} growth="+4.1%" icon={<Target size={24} />} iconBg="bg-emerald-50 dark:bg-emerald-500/15" iconColor="text-emerald-600 dark:text-emerald-400" />
            </div>
            <AssignedCoursesTable data={assignedCourses} onUploadMaterial={openUploadMaterial} onOpenFilters={openFilters} />
          </TrainerPageSection>
        )
      }}
    </TrainerLayout>
  )
}

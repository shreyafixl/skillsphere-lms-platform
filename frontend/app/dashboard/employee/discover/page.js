"use client"

import { Compass, Sparkles, Star } from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import StatsCard from "@/components/dashboard/StatsCard"
import { EmployeeLayout, RecommendedCoursesGrid, EmployeePageSection } from "@/components/dashboard/employee"

export default function EmployeeDiscoverPage() {
  return (
    <EmployeeLayout topbarTitle="Discover">
      {({ recommendedCourses, openEnrollCourse }) => (
        <EmployeePageSection className="space-y-6 sm:space-y-8">
          <PageHeader title="Discover Courses" description="Personalized recommendations based on your role, skills, and learning history." />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <StatsCard title="For You" value={String(recommendedCourses.length)} growth="Curated" icon={<Sparkles size={24} />} iconBg="bg-violet-50 dark:bg-violet-500/15" iconColor="text-violet-600 dark:text-violet-400" />
            <StatsCard title="Top Match" value="96%" growth="TypeScript Mastery" icon={<Compass size={24} />} iconBg="bg-fuchsia-50 dark:bg-fuchsia-500/15" iconColor="text-fuchsia-600 dark:text-fuchsia-400" />
            <StatsCard title="Avg. Rating" value="4.8" growth="Highly rated" icon={<Star size={24} />} iconBg="bg-amber-50 dark:bg-amber-500/15" iconColor="text-amber-600 dark:text-amber-400" />
          </div>
          <RecommendedCoursesGrid courses={recommendedCourses} onEnroll={openEnrollCourse} />
        </EmployeePageSection>
      )}
    </EmployeeLayout>
  )
}

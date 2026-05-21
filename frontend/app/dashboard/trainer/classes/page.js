"use client"

import { Calendar, MapPin, Users } from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import StatsCard from "@/components/dashboard/StatsCard"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import { TrainerLayout, UpcomingClassesPanel, upcomingClasses, TrainerPageSection } from "@/components/dashboard/trainer"

export default function TrainerClassesPage() {
  const totalLearners = upcomingClasses.reduce((s, c) => s + c.learners, 0)

  return (
    <TrainerLayout topbarTitle="Classes">
      <TrainerPageSection className="space-y-6 sm:space-y-8">
        <PageHeader title="Upcoming Classes" description="Scheduled live sessions, rooms, and learner attendance." />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatsCard title="This Week" value={String(upcomingClasses.length)} growth="Scheduled" icon={<Calendar size={24} />} iconBg="bg-violet-50 dark:bg-violet-500/15" iconColor="text-violet-600 dark:text-violet-400" />
          <StatsCard title="Learners" value={String(totalLearners)} growth="Expected" icon={<Users size={24} />} iconBg="bg-blue-50 dark:bg-blue-500/15" iconColor="text-blue-600 dark:text-blue-400" />
          <StatsCard title="Virtual" value="2" growth="Online sessions" icon={<MapPin size={24} />} iconBg="bg-fuchsia-50 dark:bg-fuchsia-500/15" iconColor="text-fuchsia-600 dark:text-fuchsia-400" />
        </div>
        <DashboardCard>
          <SectionHeader title="Class Schedule" subtitle="Full calendar of upcoming sessions" />
          <UpcomingClassesPanel />
        </DashboardCard>
      </TrainerPageSection>
    </TrainerLayout>
  )
}

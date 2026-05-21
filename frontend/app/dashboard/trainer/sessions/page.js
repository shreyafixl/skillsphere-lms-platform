"use client"

import { Calendar, Plus, Video } from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import { PrimaryActionButton } from "@/components/dashboard/ActionButton"
import StatsCard from "@/components/dashboard/StatsCard"
import { TrainerLayout, SessionsTable, UpcomingClassesPanel, TrainerPageSection } from "@/components/dashboard/trainer"

export default function TrainerSessionsPage() {
  return (
    <TrainerLayout topbarTitle="Sessions">
      {({ sessions, openCreateSession, openEditSession, openFilters }) => {
        const scheduled = sessions.filter((s) => s.status === "scheduled").length

        return (
          <TrainerPageSection className="space-y-6 sm:space-y-8">
            <PageHeader
              title="Session Management"
              description="Schedule, edit, and manage live sessions, labs, and workshops."
              action={
                <PrimaryActionButton onClick={openCreateSession}>
                  <Plus size={18} />
                  Schedule Session
                </PrimaryActionButton>
              }
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <StatsCard title="Total Sessions" value={String(sessions.length)} growth="All time" icon={<Video size={24} />} iconBg="bg-violet-50 dark:bg-violet-500/15" iconColor="text-violet-600 dark:text-violet-400" />
              <StatsCard title="Scheduled" value={String(scheduled)} growth="Upcoming" icon={<Calendar size={24} />} iconBg="bg-fuchsia-50 dark:bg-fuchsia-500/15" iconColor="text-fuchsia-600 dark:text-fuchsia-400" />
              <StatsCard title="Completed" value={String(sessions.filter((s) => s.status === "completed").length)} growth="This month" icon={<Video size={24} />} iconBg="bg-emerald-50 dark:bg-emerald-500/15" iconColor="text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
              <div className="xl:col-span-2">
                <SessionsTable data={sessions} onEditSession={openEditSession} onOpenFilters={openFilters} />
              </div>
              <UpcomingClassesPanel />
            </div>
          </TrainerPageSection>
        )
      }}
    </TrainerLayout>
  )
}

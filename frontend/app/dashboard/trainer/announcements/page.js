"use client"

import { Megaphone, Pin, Plus } from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import { PrimaryActionButton } from "@/components/dashboard/ActionButton"
import StatsCard from "@/components/dashboard/StatsCard"
import { TrainerLayout, AnnouncementsPanel, TrainerPageSection } from "@/components/dashboard/trainer"

export default function TrainerAnnouncementsPage() {
  return (
    <TrainerLayout topbarTitle="Announcements">
      {({ announcements, openCreateAnnouncement, openEditAnnouncement }) => {
        const pinned = announcements.filter((a) => a.pinned).length

        return (
          <TrainerPageSection className="space-y-6 sm:space-y-8">
            <PageHeader
              title="Announcements"
              description="Post updates and reminders to learners in your courses."
              action={
                <PrimaryActionButton onClick={openCreateAnnouncement}>
                  <Plus size={18} />
                  Post Announcement
                </PrimaryActionButton>
              }
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <StatsCard title="Total Posts" value={String(announcements.length)} growth="Active" icon={<Megaphone size={24} />} iconBg="bg-amber-50 dark:bg-amber-500/15" iconColor="text-amber-600 dark:text-amber-400" />
              <StatsCard title="Pinned" value={String(pinned)} growth="Highlighted" icon={<Pin size={24} />} iconBg="bg-violet-50 dark:bg-violet-500/15" iconColor="text-violet-600 dark:text-violet-400" />
            </div>
            <AnnouncementsPanel announcements={announcements} onEdit={openEditAnnouncement} />
          </TrainerPageSection>
        )
      }}
    </TrainerLayout>
  )
}

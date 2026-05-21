"use client"

import { Bell, Users } from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import { PrimaryActionButton } from "@/components/dashboard/ActionButton"
import StatsCard from "@/components/dashboard/StatsCard"
import {
  ManagerLayout,
  TeamMembersTable,
  ManagerPageSection,
} from "@/components/dashboard/manager"

export default function ManagerTeamPage() {
  return (
    <ManagerLayout topbarTitle="My Team">
      {({ teamMembers, openViewMember, openNudgeMember, openFilters }) => {
        const active = teamMembers.filter((m) => m.status === "active").length
        const atRisk = teamMembers.filter((m) => m.status === "at-risk").length

        return (
          <ManagerPageSection className="space-y-6 sm:space-y-8">
            <PageHeader
              title="Assigned Learners"
              description="Direct reports and learners assigned to your team."
              action={
                <PrimaryActionButton onClick={() => openNudgeMember(teamMembers[0])}>
                  <Bell size={18} />
                  Send Team Reminder
                </PrimaryActionButton>
              }
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <StatsCard
                title="Team Size"
                value={String(teamMembers.length)}
                growth="+2"
                icon={<Users size={24} />}
                iconBg="bg-blue-50 dark:bg-blue-500/15"
                iconColor="text-blue-600 dark:text-blue-400"
              />
              <StatsCard
                title="Active Learners"
                value={String(active)}
                growth={`${Math.round((active / teamMembers.length) * 100)}%`}
                icon={<Users size={24} />}
                iconBg="bg-emerald-50 dark:bg-emerald-500/15"
                iconColor="text-emerald-600 dark:text-emerald-400"
              />
              <StatsCard
                title="At Risk"
                value={String(atRisk)}
                growth="Needs attention"
                icon={<Bell size={24} />}
                iconBg="bg-rose-50 dark:bg-rose-500/15"
                iconColor="text-rose-600 dark:text-rose-400"
              />
            </div>

            <TeamMembersTable
              data={teamMembers}
              onViewMember={openViewMember}
              onNudgeMember={openNudgeMember}
              onOpenFilters={openFilters}
            />
          </ManagerPageSection>
        )
      }}
    </ManagerLayout>
  )
}

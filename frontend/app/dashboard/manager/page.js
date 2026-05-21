"use client"

import Link from "next/link"
import {
  BarChart3,
  Clock,
  FileText,
  TrendingUp,
  Users,
} from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import DashboardCard from "@/components/dashboard/DashboardCard"
import { PrimaryActionButton } from "@/components/dashboard/ActionButton"
import {
  ManagerLayout,
  ManagerStatsGrid,
  ManagerPerformanceChart,
  ManagerActivityPanel,
  TeamMembersTable,
  UpcomingDeadlinesPanel,
  ManagerReportsSection,
  ManagerPageSection,
  ManagerStaggerGrid,
  ManagerStaggerItem,
  managerCopy,
} from "@/components/dashboard/manager"

const quickLinks = [
  {
    title: "My Team",
    description: "Assigned learners & roster",
    href: "/dashboard/manager/team",
    icon: Users,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-500/15",
  },
  {
    title: "Team Progress",
    description: "Track employee learning",
    href: "/dashboard/manager/progress",
    icon: TrendingUp,
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-500/15",
  },
  {
    title: "Analytics",
    description: "Department insights",
    href: "/dashboard/manager/analytics",
    icon: BarChart3,
    color: "text-fuchsia-600 dark:text-fuchsia-400",
    bg: "bg-fuchsia-50 dark:bg-fuchsia-500/15",
  },
  {
    title: "Deadlines",
    description: "Upcoming due dates",
    href: "/dashboard/manager/deadlines",
    icon: Clock,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-500/15",
  },
  {
    title: "Reports",
    description: "Export team insights",
    href: "/dashboard/manager/reports",
    icon: FileText,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-500/15",
  },
]

export default function ManagerDashboard() {
  return (
    <ManagerLayout topbarTitle="Overview">
      {({
        teamMembers,
        reports,
        openCreateReport,
        openViewMember,
        openNudgeMember,
        openFilters,
      }) => (
        <ManagerPageSection className="space-y-6 sm:space-y-8">
          <PageHeader
            title={managerCopy.dashboardHeading}
            description={managerCopy.dashboardDescription}
            action={
              <PrimaryActionButton onClick={openCreateReport}>
                <FileText size={18} />
                Create Report
              </PrimaryActionButton>
            }
          />

          <ManagerStatsGrid />

          <ManagerStaggerGrid className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 sm:gap-4">
            {quickLinks.map((link) => {
              const Icon = link.icon
              return (
                <ManagerStaggerItem key={link.href}>
                  <Link href={link.href}>
                    <DashboardCard className="h-full p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/10 dark:hover:border-violet-500/30 sm:p-5">
                      <div
                        className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${link.bg}`}
                      >
                        <Icon size={20} className={link.color} />
                      </div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                        {link.title}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                        {link.description}
                      </p>
                    </DashboardCard>
                  </Link>
                </ManagerStaggerItem>
              )
            })}
          </ManagerStaggerGrid>

          <ManagerPerformanceChart />

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <TeamMembersTable
              data={teamMembers}
              onViewMember={openViewMember}
              onNudgeMember={openNudgeMember}
              onOpenFilters={openFilters}
              compact
              showViewAll
            />
            <UpcomingDeadlinesPanel limit={4} showViewAll />
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <ManagerReportsSection data={reports} limit={3} showViewAll />
            </div>
            <div>
              <ManagerActivityPanel limit={5} />
            </div>
          </div>
        </ManagerPageSection>
      )}
    </ManagerLayout>
  )
}

"use client"

import { FileText, Download, Calendar, BarChart3 } from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import { PrimaryActionButton } from "@/components/dashboard/ActionButton"
import StatsCard from "@/components/dashboard/StatsCard"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import TenantAnalyticsChart from "@/components/dashboard/tenantadmin/TenantAnalyticsChart"
import {
  TenantAdminLayout,
  ReportsSection,
} from "@/components/dashboard/tenantadmin"

export default function ReportsPage() {
  return (
    <TenantAdminLayout topbarTitle="Reports">
      {({ reports, openCreateReport }) => {
        const stats = [
          {
            title: "Available Reports",
            value: String(reports.length),
            growth: "+2",
            icon: <FileText size={24} />,
            iconBg: "bg-violet-50 dark:bg-violet-500/15",
            iconColor: "text-violet-600 dark:text-violet-400",
          },
          {
            title: "Generated This Month",
            value: "14",
            growth: "+28%",
            icon: <BarChart3 size={24} />,
            iconBg: "bg-blue-50 dark:bg-blue-500/15",
            iconColor: "text-blue-600 dark:text-blue-400",
          },
          {
            title: "Scheduled",
            value: "3",
            growth: "Weekly",
            icon: <Calendar size={24} />,
            iconBg: "bg-fuchsia-50 dark:bg-fuchsia-500/15",
            iconColor: "text-fuchsia-600 dark:text-fuchsia-400",
          },
          {
            title: "Last Export",
            value: "Today",
            growth: "2.4 MB",
            icon: <Download size={24} />,
            iconBg: "bg-emerald-50 dark:bg-emerald-500/15",
            iconColor: "text-emerald-600 dark:text-emerald-400",
          },
        ]

        return (
          <div className="space-y-6 sm:space-y-8">
            <PageHeader
              title="Reports"
              description="Generate, schedule, and export learning analytics for your organization."
              action={
                <PrimaryActionButton onClick={openCreateReport}>
                  <FileText size={18} />
                  Create Report
                </PrimaryActionButton>
              }
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <StatsCard key={stat.title} {...stat} />
              ))}
            </div>

            <TenantAnalyticsChart
              title="Report Preview"
              subtitle="Enrollment and completion trends for exported reports"
            />

            <ReportsSection data={reports} />

            <DashboardCard>
              <SectionHeader
                title="Scheduled Reports"
                subtitle="Automated exports delivered to your inbox"
              />
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { name: "Weekly Progress", cadence: "Every Monday", next: "May 26" },
                  { name: "Compliance Snapshot", cadence: "Monthly", next: "Jun 1" },
                  { name: "Trainer Summary", cadence: "Quarterly", next: "Jul 1" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-slate-100 p-4 transition-colors hover:border-violet-200 hover:bg-violet-50/30 dark:border-slate-800 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/5"
                  >
                    <p className="font-semibold text-slate-800 dark:text-slate-100">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {item.cadence}
                    </p>
                    <p className="mt-2 text-xs text-violet-600 dark:text-violet-400">
                      Next: {item.next}
                    </p>
                  </div>
                ))}
              </div>
            </DashboardCard>
          </div>
        )
      }}
    </TenantAdminLayout>
  )
}

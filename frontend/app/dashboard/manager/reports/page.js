"use client"

import { FileText, Download, BarChart3, Calendar } from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import { PrimaryActionButton } from "@/components/dashboard/ActionButton"
import StatsCard from "@/components/dashboard/StatsCard"
import {
  ManagerLayout,
  ManagerReportsSection,
  ManagerPerformanceChart,
  ManagerPageSection,
} from "@/components/dashboard/manager"

export default function ManagerReportsPage() {
  return (
    <ManagerLayout topbarTitle="Reports">
      {({ reports, openCreateReport }) => (
        <ManagerPageSection className="space-y-6 sm:space-y-8">
          <PageHeader
            title="Team Reports"
            description="Generate and export learning analytics for your direct reports."
            action={
              <PrimaryActionButton onClick={openCreateReport}>
                <FileText size={18} />
                Create Report
              </PrimaryActionButton>
            }
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatsCard
              title="Available Reports"
              value={String(reports.length)}
              growth="+1"
              icon={<FileText size={24} />}
              iconBg="bg-violet-50 dark:bg-violet-500/15"
              iconColor="text-violet-600 dark:text-violet-400"
            />
            <StatsCard
              title="Generated This Month"
              value="8"
              growth="+33%"
              icon={<BarChart3 size={24} />}
              iconBg="bg-blue-50 dark:bg-blue-500/15"
              iconColor="text-blue-600 dark:text-blue-400"
            />
            <StatsCard
              title="Scheduled"
              value="2"
              growth="Weekly"
              icon={<Calendar size={24} />}
              iconBg="bg-fuchsia-50 dark:bg-fuchsia-500/15"
              iconColor="text-fuchsia-600 dark:text-fuchsia-400"
            />
            <StatsCard
              title="Last Export"
              value="Today"
              growth="1.8 MB"
              icon={<Download size={24} />}
              iconBg="bg-emerald-50 dark:bg-emerald-500/15"
              iconColor="text-emerald-600 dark:text-emerald-400"
            />
          </div>

          <ManagerPerformanceChart
            title="Report Preview"
            subtitle="Team progress trends included in exported reports"
          />

          <ManagerReportsSection data={reports} />
        </ManagerPageSection>
      )}
    </ManagerLayout>
  )
}

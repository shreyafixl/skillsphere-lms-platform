"use client"

import { Settings2 } from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import { PrimaryActionButton } from "@/components/dashboard/ActionButton"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import { EmployeeLayout, employeeCopy, EmployeePageSection } from "@/components/dashboard/employee"

export default function EmployeeSettingsPage() {
  return (
    <EmployeeLayout topbarTitle="Settings">
      {({ employeeInfo, openSettings }) => (
        <EmployeePageSection className="space-y-6 sm:space-y-8">
          <PageHeader
            title="Settings"
            description={employeeCopy.settingsDescription}
            action={
              <PrimaryActionButton onClick={openSettings}>
                <Settings2 size={18} />
                Edit Settings
              </PrimaryActionButton>
            }
          />
          <DashboardCard>
            <SectionHeader title="Learning Profile" subtitle="Your personal learning workspace" />
            <dl className="grid gap-4 sm:grid-cols-2">
              {[
                ["Name", employeeInfo.name],
                ["Department", employeeInfo.department],
                ["Role", employeeInfo.role],
                ["Level", employeeInfo.level],
                ["Streak", `${employeeInfo.streakDays} days`],
                ["Hours (month)", `${employeeInfo.totalHours}h`],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-800/40">
                  <dt className="text-xs font-medium uppercase tracking-wider text-slate-400">{label}</dt>
                  <dd className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">{value}</dd>
                </div>
              ))}
            </dl>
          </DashboardCard>
        </EmployeePageSection>
      )}
    </EmployeeLayout>
  )
}

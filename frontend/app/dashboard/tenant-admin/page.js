"use client"

import Link from "next/link"
import {
  BookOpen,
  FileText,
  GraduationCap,
  Users,
} from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import DashboardCard from "@/components/dashboard/DashboardCard"
import {
  TenantAdminLayout,
  TenantStatsGrid,
  TenantAnalyticsChart,
  TenantActivityPanel,
  EmployeesTable,
  TrainersTable,
  CourseAssignmentsTable,
  ReportsSection,
  tenantAdminCopy,
} from "@/components/dashboard/tenant-admin"

const quickLinks = [
  {
    title: "Employees",
    description: "Manage employees and teams",
    href: "/dashboard/tenant-admin/employees",
    icon: Users,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-500/15",
  },
  {
    title: "Trainers",
    description: "Assign and monitor trainers",
    href: "/dashboard/tenant-admin/trainers",
    icon: GraduationCap,
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-500/15",
  },
  {
    title: "Courses",
    description: "Assignments and deadlines",
    href: "/dashboard/tenant-admin/courses",
    icon: BookOpen,
    color: "text-fuchsia-600 dark:text-fuchsia-400",
    bg: "bg-fuchsia-50 dark:bg-fuchsia-500/15",
  },
  {
    title: "Reports",
    description: "Export analytics & compliance",
    href: "/dashboard/tenant-admin/reports",
    icon: FileText,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-500/15",
  },
]

export default function TenantAdminDashboard() {
  return (
    <TenantAdminLayout topbarTitle="Overview">
      <div className="space-y-6 sm:space-y-8">
        <PageHeader
          title={tenantAdminCopy.dashboardHeading}
          description={tenantAdminCopy.dashboardDescription}
        />

        <TenantStatsGrid />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {quickLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link key={link.href} href={link.href}>
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
            )
          })}
        </div>

        <TenantAnalyticsChart />

        <CourseAssignmentsTable compact showViewAll />

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <EmployeesTable compact showViewAll />
          <TrainersTable compact showViewAll />
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <ReportsSection limit={3} showViewAll />
          </div>
          <div>
            <TenantActivityPanel limit={5} />
          </div>
        </div>
      </div>
    </TenantAdminLayout>
  )
}

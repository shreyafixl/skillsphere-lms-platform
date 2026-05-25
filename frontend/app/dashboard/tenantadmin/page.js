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

import { Button } from "@/components/ui/button"

import { PrimaryActionButton } from "@/components/dashboard/ActionButton"

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
} from "@/components/dashboard/tenantadmin"

const quickLinks = [
  {
    title: "Employees",
    description: "Manage employees and teams",
    href: "/dashboard/tenantadmin/employees",
    icon: Users,
    color:
      "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-500/15",
  },

  {
    title: "Trainers",
    description: "Assign and monitor trainers",
    href: "/dashboard/tenantadmin/trainers",
    icon: GraduationCap,
    color:
      "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-500/15",
  },

  {
    title: "Courses",
    description: "Assignments and deadlines",
    href: "/dashboard/tenantadmin/courses",
    icon: BookOpen,
    color:
      "text-fuchsia-600 dark:text-fuchsia-400",
    bg: "bg-fuchsia-50 dark:bg-fuchsia-500/15",
  },

  {
    title: "Reports",
    description:
      "Export analytics & compliance",
    href: "/dashboard/tenantadmin/reports",
    icon: FileText,
    color:
      "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-500/15",
  },
]

export default function TenantAdminDashboard() {
  return (
    <TenantAdminLayout topbarTitle="Overview">
      {({
        employees,
        trainers,
        assignments,
        reports,
        openInviteEmployee,
        openAssignCourse,
        openCreateReport,
        openEditEmployee,
        openEditTrainer,
        openFilters,
      }) => (
        <div className="space-y-5">
          <PageHeader
            title={
              tenantAdminCopy.dashboardHeading
            }
            description={
              tenantAdminCopy.dashboardDescription
            }
            action={
              <div className="flex flex-wrap gap-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={openAssignCourse}
                  className="h-10 rounded-xl border-slate-200 px-4 text-sm dark:border-slate-700"
                >
                  Assign Course
                </Button>

                <PrimaryActionButton
                  onClick={
                    openInviteEmployee
                  }
                >
                  Invite Employee
                </PrimaryActionButton>
              </div>
            }
          />

          <TenantStatsGrid />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {quickLinks.map((link) => {
              const Icon = link.icon

              return (
                <Link
                  key={link.href}
                  href={link.href}
                >
                  <DashboardCard className="h-full rounded-2xl border border-slate-200/80 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-sm hover:shadow-violet-500/10 dark:border-slate-800/80 dark:hover:border-violet-500/30">
                    <div
                      className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl ${link.bg}`}
                    >
                      <Icon
                        size={18}
                        className={
                          link.color
                        }
                      />
                    </div>

                    <p className="text-[13px] font-semibold text-slate-900 dark:text-slate-50">
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

          <CourseAssignmentsTable
            data={assignments}
            onOpenFilters={openFilters}
            compact
            showViewAll
          />

          <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <EmployeesTable
              data={employees}
              onEditEmployee={
                openEditEmployee
              }
              onOpenFilters={openFilters}
              compact
              showViewAll
            />

            <TrainersTable
              data={trainers}
              onEditTrainer={
                openEditTrainer
              }
              onOpenFilters={openFilters}
              compact
              showViewAll
            />
          </div>

          <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <ReportsSection
                data={reports}
                limit={3}
                showViewAll
              />
            </div>

            <div>
              <TenantActivityPanel
                limit={5}
              />
            </div>
          </div>
        </div>
      )}
    </TenantAdminLayout>
  )
}
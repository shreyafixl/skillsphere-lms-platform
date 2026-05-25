"use client"

import { UserPlus, Users, UserCheck, Clock, BookOpen } from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import { PrimaryActionButton } from "@/components/dashboard/ActionButton"
import { Button } from "@/components/ui/button"
import StatsCard from "@/components/dashboard/StatsCard"
import {
  TenantAdminLayout,
  EmployeesTable,
} from "@/components/dashboard/tenantadmin"

export default function EmployeesPage() {
  return (
    <TenantAdminLayout topbarTitle="Employees">
      {({ employees, openInviteEmployee, openAddEmployee, openEditEmployee, openFilters }) => {
        const stats = [
          {
            title: "Total Employees",
            value: String(employees.length),
            growth: "+12",
            icon: <Users size={24} />,
            iconBg: "bg-blue-50 dark:bg-blue-500/15",
            iconColor: "text-blue-600 dark:text-blue-400",
          },
          {
            title: "Active",
            value: String(employees.filter((e) => e.status === "active").length),
            growth: "94%",
            icon: <UserCheck size={24} />,
            iconBg: "bg-emerald-50 dark:bg-emerald-500/15",
            iconColor: "text-emerald-600 dark:text-emerald-400",
          },
          {
            title: "Pending",
            value: String(employees.filter((e) => e.status === "pending").length),
            growth: "3",
            icon: <Clock size={24} />,
            iconBg: "bg-amber-50 dark:bg-amber-500/15",
            iconColor: "text-amber-600 dark:text-amber-400",
          },
          {
            title: "Avg. Courses",
            value: "3.4",
            growth: "+0.6",
            icon: <BookOpen size={24} />,
            iconBg: "bg-violet-50 dark:bg-violet-500/15",
            iconColor: "text-violet-600 dark:text-violet-400",
          },
        ]

        return (
          <div className="space-y-6 sm:space-y-8">
            <PageHeader
              title="Employee Management"
              description="Invite, track progress, and manage employees across your organization."
              action={
                <div className="flex flex-wrap gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={openAddEmployee}
                    className="h-11 rounded-xl border-slate-200 px-4 dark:border-slate-700"
                  >
                    <Users size={18} className="mr-2" />
                    Add Employee
                  </Button>
                  <PrimaryActionButton onClick={openInviteEmployee}>
                    <UserPlus size={18} />
                    Invite Employee
                  </PrimaryActionButton>
                </div>
              }
            />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <StatsCard key={stat.title} {...stat} />
              ))}
            </div>

            <EmployeesTable
              data={employees}
              onEditEmployee={openEditEmployee}
              onOpenFilters={openFilters}
            />
          </div>
        )
      }}
    </TenantAdminLayout>
  )
}

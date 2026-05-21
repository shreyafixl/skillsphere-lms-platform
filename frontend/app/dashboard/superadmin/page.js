"use client"

import { useState } from "react"
import {
  BookOpen,
  Building2,
  DollarSign,
  Users,
} from "lucide-react"
import DashboardLayout from "@/components/dashboard/DashboardLayout"
import StatsCard from "@/components/dashboard/StatsCard"
import AnalyticsChart from "@/components/dashboard/AnalyticsChart"
import RecentTenantsTable from "@/components/dashboard/RecentTenantsTable"
import RecentActivityPanel from "@/components/dashboard/RecentActivityPanel"
import QuickActions from "@/components/dashboard/QuickActions"
import { TenantFormModal, ViewTenantModal } from "@/components/dashboard/modals"

const stats = [
  {
    title: "Total Users",
    value: "24,583",
    growth: "+12.5%",
    trend: "up",
    icon: <Users size={24} />,
    iconBg: "bg-blue-50 dark:bg-blue-500/15",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Active Tenants",
    value: "186",
    growth: "+8.2%",
    trend: "up",
    icon: <Building2 size={24} />,
    iconBg: "bg-violet-50 dark:bg-violet-500/15",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    title: "Total Courses",
    value: "1,429",
    growth: "+15.3%",
    trend: "up",
    icon: <BookOpen size={24} />,
    iconBg: "bg-fuchsia-50 dark:bg-fuchsia-500/15",
    iconColor: "text-fuchsia-600 dark:text-fuchsia-400",
  },
  {
    title: "Revenue",
    value: "$842K",
    growth: "+22.1%",
    trend: "up",
    icon: <DollarSign size={24} />,
    iconBg: "bg-emerald-50 dark:bg-emerald-500/15",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
]

export default function SuperAdminDashboard() {
  const [viewTenant, setViewTenant] = useState(null)
  const [editTenant, setEditTenant] = useState(null)
  const [viewOpen, setViewOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)

  return (
    <DashboardLayout topbarTitle="Overview">
      <div className="space-y-6 sm:space-y-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Super Admin Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 sm:text-base">
            Monitor platform health, tenants, and revenue at a glance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>

        <AnalyticsChart />

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <RecentTenantsTable
              onViewTenant={(tenant) => {
                setViewTenant(tenant)
                setViewOpen(true)
              }}
              onEditTenant={(tenant) => {
                setEditTenant(tenant)
                setEditOpen(true)
              }}
            />
          </div>
          <div>
            <RecentActivityPanel />
          </div>
        </div>

        <QuickActions />
      </div>

      <ViewTenantModal
        open={viewOpen}
        onOpenChange={setViewOpen}
        tenant={viewTenant}
        onEdit={(tenant) => {
          setEditTenant(tenant)
          setEditOpen(true)
        }}
      />
      <TenantFormModal
        open={editOpen}
        onOpenChange={setEditOpen}
        mode="edit"
        initialData={editTenant}
      />
    </DashboardLayout>
  )
}

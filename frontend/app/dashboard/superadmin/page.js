"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard/DashboardLayout"
import StatsCard from "@/components/dashboard/StatsCard"
import AnalyticsChart from "@/components/dashboard/AnalyticsChart"
import DashboardBarChart from "@/components/dashboard/DashboardBarChart"
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
    sparkline: [55, 72, 48, 80, 65, 88, 76],
    href: "/dashboard/superadmin/users",
  },
  {
    title: "Active Tenants",
    value: "186",
    growth: "+8.2%",
    trend: "up",
    sparkline: [40, 52, 45, 60, 58, 70, 68],
    href: "/dashboard/superadmin/tenants",
  },
  {
    title: "Monthly Revenue",
    value: "$842K",
    growth: "+22.1%",
    trend: "up",
    visual: "ring",
    sparkline: [78],
    href: "/dashboard/superadmin/analytics",
  },
]

const subscriptionData = [
  { label: "Jan", basic: 42, pro: 28, enterprise: 12 },
  { label: "Feb", basic: 48, pro: 32, enterprise: 14 },
  { label: "Mar", basic: 45, pro: 35, enterprise: 15 },
  { label: "Apr", basic: 52, pro: 38, enterprise: 18 },
  { label: "May", basic: 50, pro: 40, enterprise: 17 },
  { label: "Jun", basic: 58, pro: 44, enterprise: 20 },
]

const registrationData = [
  { label: "Mon", count: 24 },
  { label: "Tue", count: 32 },
  { label: "Wed", count: 28 },
  { label: "Thu", count: 40 },
  { label: "Fri", count: 36 },
  { label: "Sat", count: 18 },
  { label: "Sun", count: 22 },
]

const activeUsersData = [
  { label: "W1", learners: 420, trainers: 48 },
  { label: "W2", learners: 480, trainers: 52 },
  { label: "W3", learners: 510, trainers: 55 },
  { label: "W4", learners: 540, trainers: 58 },
]

export default function SuperAdminDashboard() {
  const [viewTenant, setViewTenant] = useState(null)
  const [editTenant, setEditTenant] = useState(null)
  const [viewOpen, setViewOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)

  return (
    <DashboardLayout topbarTitle="Overview">
      <div className="space-y-5">
        {/* Stat cards — reference-style compact row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {stats.map((stat) => (
            <StatsCard key={stat.title} enterprise {...stat} />
          ))}
        </div>

        {/* Primary analytics row: revenue (2/3) + subscriptions (1/3) */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <AnalyticsChart enterprise />
          </div>
          <div className="min-h-[280px]">
            <DashboardBarChart
              title="Subscriptions"
              data={subscriptionData}
              bars={[
                { key: "basic", name: "Basic", color: "#a78bfa" },
                { key: "pro", name: "Pro", color: "#6366f1" },
                { key: "enterprise", name: "Enterprise", color: "#22d3ee" },
              ]}
              height={200}
              periodOptions={["This Year", "This Month"]}
            />
          </div>
        </div>

        {/* Secondary charts row */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          <DashboardBarChart
            title="Registrations"
            data={registrationData}
            bars={[{ key: "count", name: "Sign-ups", color: "#8b5cf6" }]}
            height={160}
            periodOptions={["Today", "This Week", "This Month"]}
            defaultPeriod="Today"
            showLegend={false}
          />
          <DashboardBarChart
            title="Active Users"
            data={activeUsersData}
            bars={[
              { key: "learners", name: "Learners", color: "#22d3ee" },
              { key: "trainers", name: "Trainers", color: "#f472b6" },
            ]}
            height={160}
            periodOptions={["This Month", "This Year"]}
          />
          <div className="min-h-[220px] md:col-span-2 xl:col-span-1">
            <RecentActivityPanel compact />
          </div>
        </div>

        {/* Data table + quick actions */}
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
          <div className="xl:col-span-8">
            <RecentTenantsTable
              compact
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
          <div className="xl:col-span-4">
            <QuickActions compact />
          </div>
        </div>
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

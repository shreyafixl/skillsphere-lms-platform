"use client"

import { useState } from "react"
import {
  Building2,
  Plus,
  Users,
  TrendingUp,
  Clock,
  MoreHorizontal,
  Eye,
  Pencil,
} from "lucide-react"
import { cn } from "@/lib/utils"
import DashboardLayout from "@/components/dashboard/DashboardLayout"
import PageHeader from "@/components/dashboard/PageHeader"
import StatsCard from "@/components/dashboard/StatsCard"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import { PrimaryActionButton } from "@/components/dashboard/ActionButton"
import { TenantFormModal, ViewTenantModal } from "@/components/dashboard/modals"

const onboardingStats = [
  {
    title: "Total Tenants",
    value: "186",
    growth: "+8.2%",
    icon: <Building2 size={24} />,
    iconBg: "bg-violet-50 dark:bg-violet-500/15",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    title: "Active",
    value: "162",
    growth: "+5.1%",
    icon: <TrendingUp size={24} />,
    iconBg: "bg-emerald-50 dark:bg-emerald-500/15",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Onboarding",
    value: "14",
    growth: "+12",
    icon: <Clock size={24} />,
    iconBg: "bg-amber-50 dark:bg-amber-500/15",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    title: "Total Users",
    value: "24.5K",
    growth: "+12.5%",
    icon: <Users size={24} />,
    iconBg: "bg-blue-50 dark:bg-blue-500/15",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
]

const tenantCards = [
  { name: "Acme Corporation", plan: "Enterprise", users: 450, courses: 28, status: "active" },
  { name: "TechFlow Inc", plan: "Pro", users: 280, courses: 16, status: "active" },
  { name: "LearnHub Academy", plan: "Starter", users: 120, courses: 8, status: "pending" },
  { name: "GlobalEdu Partners", plan: "Enterprise", users: 890, courses: 42, status: "active" },
]

const tenants = [
  { id: 1, company: "Acme Corporation", domain: "acme.skillsphere.io", users: 450, plan: "Enterprise", status: "active", joined: "Jan 12, 2025" },
  { id: 2, company: "TechFlow Inc", domain: "techflow.skillsphere.io", users: 280, plan: "Pro", status: "active", joined: "Feb 3, 2025" },
  { id: 3, company: "LearnHub Academy", domain: "learnhub.skillsphere.io", users: 120, plan: "Starter", status: "pending", joined: "Mar 18, 2025" },
  { id: 4, company: "GlobalEdu Partners", domain: "globaledu.skillsphere.io", users: 890, plan: "Enterprise", status: "active", joined: "Nov 8, 2024" },
  { id: 5, company: "SkillMint Labs", domain: "skillmint.skillsphere.io", users: 65, plan: "Starter", status: "inactive", joined: "Apr 2, 2025" },
  { id: 6, company: "NovaLearn", domain: "novalearn.skillsphere.io", users: 340, plan: "Pro", status: "active", joined: "Dec 20, 2024" },
]

const statusStyles = {
  active: "bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-500/15 dark:text-emerald-400 dark:ring-emerald-500/30",
  pending: "bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-500/15 dark:text-amber-400 dark:ring-amber-500/30",
  inactive: "bg-slate-100 text-slate-600 ring-slate-500/10 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-600/30",
}

const planStyles = {
  Enterprise: "bg-violet-50 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
  Pro: "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300",
  Starter: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
}

export default function TenantsPage() {
  const [createOpen, setCreateOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [viewOpen, setViewOpen] = useState(false)
  const [selectedTenant, setSelectedTenant] = useState(null)

  const openEdit = (tenant) => {
    setSelectedTenant(tenant)
    setEditOpen(true)
  }

  const openView = (tenant) => {
    setSelectedTenant(tenant)
    setViewOpen(true)
  }

  return (
    <DashboardLayout topbarTitle="Tenants">
      <div className="space-y-5">
        <PageHeader
          title="Tenant Management"
          description="Manage organizations, onboarding pipelines, and subscription plans across the platform."
          action={
            <PrimaryActionButton onClick={() => setCreateOpen(true)}>
              <Plus size={16} />
              Add Tenant
            </PrimaryActionButton>
          }
        />
  
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {onboardingStats.map((stat) => (
            <StatsCard
              key={stat.title}
              {...stat}
              compact
              enterprise
            />
          ))}
        </div>
  
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {tenantCards.map((tenant) => (
            <DashboardCard
              key={tenant.name}
              role="button"
              tabIndex={0}
              onClick={() =>
                openView({
                  company: tenant.name,
                  plan: tenant.plan,
                  users: tenant.users,
                  domain: `${tenant.name
                    .toLowerCase()
                    .replace(/\s/g, "")}.skillsphere.io`,
                  joined: "2025",
                  status: tenant.status,
                })
              }
              onKeyDown={(e) =>
                e.key === "Enter" &&
                openView({
                  company: tenant.name,
                  plan: tenant.plan,
                  users: tenant.users,
                  domain: `${tenant.name
                    .toLowerCase()
                    .replace(/\s/g, "")}.skillsphere.io`,
                  joined: "2025",
                  status: tenant.status,
                })
              }
              className="group cursor-pointer rounded-2xl border border-slate-200/80 p-4 transition-all hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-sm dark:border-slate-800/80 dark:hover:border-violet-500/30"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white shadow-sm">
                  <Building2 size={18} />
                </div>
  
                <span
                  className={cn(
                    "rounded-full px-2 py-1 text-[11px] font-semibold capitalize ring-1 ring-inset",
                    statusStyles[tenant.status]
                  )}
                >
                  {tenant.status}
                </span>
              </div>
  
              <h3 className="mt-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
                {tenant.name}
              </h3>
  
              <span
                className={cn(
                  "mt-1 inline-flex rounded-lg px-2 py-0.5 text-[11px] font-semibold",
                  planStyles[tenant.plan]
                )}
              >
                {tenant.plan}
              </span>
  
              <div className="mt-3 flex gap-3 text-xs text-slate-500 dark:text-slate-400">
                <span>{tenant.users} users</span>
                <span>{tenant.courses} courses</span>
              </div>
            </DashboardCard>
          ))}
        </div>
  
        <DashboardCard>
          <SectionHeader
            title="All Tenants"
            subtitle="Complete list of platform organizations"
          />
  
          <div className="-mx-2 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  {[
                    "Company",
                    "Domain",
                    "Users",
                    "Plan",
                    "Status",
                    "Joined",
                    "Actions",
                  ].map((col) => (
                    <th
                      key={col}
                      className="px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500"
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
  
              <tbody>
                {tenants.map((tenant) => (
                  <tr
                    key={tenant.id}
                    className="group border-b border-slate-50 transition-colors last:border-0 hover:bg-violet-50/40 dark:border-slate-800/50 dark:hover:bg-violet-500/10"
                  >
                    <td className="px-3 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white">
                          <Building2 size={15} />
                        </div>
  
                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                          {tenant.company}
                        </span>
                      </div>
                    </td>
  
                    <td className="px-3 py-3 text-sm text-slate-500 dark:text-slate-400">
                      {tenant.domain}
                    </td>
  
                    <td className="px-3 py-3 text-sm text-slate-600 dark:text-slate-300">
                      {tenant.users.toLocaleString()}
                    </td>
  
                    <td className="px-3 py-3">
                      <span
                        className={cn(
                          "rounded-lg px-2 py-1 text-[11px] font-semibold",
                          planStyles[tenant.plan]
                        )}
                      >
                        {tenant.plan}
                      </span>
                    </td>
  
                    <td className="px-3 py-3">
                      <span
                        className={cn(
                          "rounded-full px-2 py-1 text-[11px] font-semibold capitalize ring-1 ring-inset",
                          statusStyles[tenant.status]
                        )}
                      >
                        {tenant.status}
                      </span>
                    </td>
  
                    <td className="px-3 py-3 text-sm text-slate-500 dark:text-slate-400">
                      {tenant.joined}
                    </td>
  
                    <td className="px-3 py-3">
                      <div className="flex gap-1 opacity-70 group-hover:opacity-100">
                        <button
                          type="button"
                          onClick={() => openView(tenant)}
                          className="rounded-lg p-1.5 text-slate-500 hover:bg-white hover:text-violet-600 dark:hover:bg-slate-800 dark:hover:text-violet-400"
                          aria-label="View"
                        >
                          <Eye size={15} />
                        </button>
  
                        <button
                          type="button"
                          onClick={() => openEdit(tenant)}
                          className="rounded-lg p-1.5 text-slate-500 hover:bg-white hover:text-violet-600 dark:hover:bg-slate-800 dark:hover:text-violet-400"
                          aria-label="Edit"
                        >
                          <Pencil size={15} />
                        </button>
  
                        <button
                          type="button"
                          onClick={() => openEdit(tenant)}
                          className="rounded-lg p-1.5 text-slate-500 hover:bg-white hover:text-violet-600 dark:hover:bg-slate-800 dark:hover:text-violet-400"
                          aria-label="More"
                        >
                          <MoreHorizontal size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DashboardCard>
      </div>
  
      <TenantFormModal
        open={createOpen}
        onOpenChange={setCreateOpen}
        mode="create"
      />
  
      <TenantFormModal
        open={editOpen}
        onOpenChange={setEditOpen}
        mode="edit"
        initialData={selectedTenant}
      />
  
      <ViewTenantModal
        open={viewOpen}
        onOpenChange={setViewOpen}
        tenant={selectedTenant}
        onEdit={openEdit}
      />
    </DashboardLayout>
  )
}

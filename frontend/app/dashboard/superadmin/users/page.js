"use client"

import { useState } from "react"
import {
  Search,
  UserPlus,
  Users,
  Shield,
  Filter,
  MoreHorizontal,
  Mail,
  Pencil,
} from "lucide-react"
import { cn } from "@/lib/utils"
import DashboardLayout from "@/components/dashboard/DashboardLayout"
import PageHeader from "@/components/dashboard/PageHeader"
import StatsCard from "@/components/dashboard/StatsCard"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import { PrimaryActionButton } from "@/components/dashboard/ActionButton"
import { UserFormModal } from "@/components/dashboard/modals"

const stats = [
  { title: "Total Users", value: "24,583", growth: "+12.5%", icon: <Users size={24} />, iconBg: "bg-blue-50 dark:bg-blue-500/15", iconColor: "text-blue-600 dark:text-blue-400" },
  { title: "Active Today", value: "3,842", growth: "+18.2%", icon: <UserPlus size={24} />, iconBg: "bg-violet-50 dark:bg-violet-500/15", iconColor: "text-violet-600 dark:text-violet-400" },
  { title: "Admins", value: "248", growth: "+2.1%", icon: <Shield size={24} />, iconBg: "bg-fuchsia-50 dark:bg-fuchsia-500/15", iconColor: "text-fuchsia-600 dark:text-fuchsia-400" },
  { title: "New This Week", value: "412", growth: "+24%", icon: <UserPlus size={24} />, iconBg: "bg-emerald-50 dark:bg-emerald-500/15", iconColor: "text-emerald-600 dark:text-emerald-400" },
]

const recentRegistrations = [
  { name: "Sarah Chen", email: "sarah@acme.com", tenant: "Acme Corp", time: "2 min ago" },
  { name: "James Wilson", email: "james@techflow.io", tenant: "TechFlow Inc", time: "18 min ago" },
  { name: "Maria Garcia", email: "maria@globaledu.com", tenant: "GlobalEdu", time: "1 hr ago" },
  { name: "Alex Kim", email: "alex@novalearn.com", tenant: "NovaLearn", time: "3 hrs ago" },
]

const users = [
  { id: 1, name: "Sarah Chen", email: "sarah@acme.com", tenant: "Acme Corporation", role: "Admin", status: "active", joined: "May 20, 2025" },
  { id: 2, name: "James Wilson", email: "james@techflow.io", tenant: "TechFlow Inc", role: "Manager", status: "active", joined: "May 19, 2025" },
  { id: 3, name: "Emily Davis", email: "emily@learnhub.edu", tenant: "LearnHub Academy", role: "Learner", status: "active", joined: "May 18, 2025" },
  { id: 4, name: "Michael Brown", email: "michael@globaledu.com", tenant: "GlobalEdu Partners", role: "Admin", status: "active", joined: "May 17, 2025" },
  { id: 5, name: "Lisa Park", email: "lisa@skillmint.io", tenant: "SkillMint Labs", role: "Learner", status: "inactive", joined: "May 15, 2025" },
  { id: 6, name: "David Lee", email: "david@novalearn.com", tenant: "NovaLearn", role: "Trainer", status: "active", joined: "May 14, 2025" },
]

const roleStyles = {
  Admin: "bg-violet-50 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
  Manager: "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300",
  Trainer: "bg-fuchsia-50 text-fuchsia-700 dark:bg-fuchsia-500/15 dark:text-fuchsia-300",
  Learner: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
}

export default function UsersPage() {
  const [search, setSearch] = useState("")
  const [inviteOpen, setInviteOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.tenant.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <DashboardLayout topbarTitle="Users">
  <div className="space-y-5">
    <PageHeader
      title="User Management"
      description="Search, manage, and monitor users across all tenants on the platform."
      action={
        <PrimaryActionButton onClick={() => setInviteOpen(true)}>
          <UserPlus size={16} />
          Invite User
        </PrimaryActionButton>
      }
    />

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatsCard
          key={stat.title}
          {...stat}
          compact
          enterprise
        />
      ))}
    </div>

    <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
      <DashboardCard className="xl:col-span-2">
        <SectionHeader
          title="All Users"
          subtitle={`${filtered.length} users found`}
        />

        <div className="mb-4 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="search"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 w-full rounded-xl border border-slate-200/80 bg-slate-50/80 pl-9 pr-4 text-sm outline-none transition-all focus:border-violet-300 focus:ring-2 focus:ring-violet-500/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-100 dark:focus:border-violet-500/50"
            />
          </div>

          <button
            type="button"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-slate-200/80 px-4 text-sm font-medium text-slate-700 transition-colors hover:border-violet-200 hover:bg-violet-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-violet-500/40 dark:hover:bg-violet-500/10"
          >
            <Filter size={15} />
            Filters
          </button>
        </div>

        <div className="-mx-2 overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-800">
                {["User", "Tenant", "Role", "Status", "Joined", ""].map(
                  (col) => (
                    <th
                      key={col || "actions"}
                      className="px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500"
                    >
                      {col}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody>
              {filtered.map((user) => (
                <tr
                  key={user.id}
                  className="group border-b border-slate-50 transition-colors last:border-0 hover:bg-violet-50/40 dark:border-slate-800/50 dark:hover:bg-violet-500/10"
                >
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-[10px] font-bold text-white">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                          {user.name}
                        </p>

                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-3 py-3 text-sm text-slate-600 dark:text-slate-300">
                    {user.tenant}
                  </td>

                  <td className="px-3 py-3">
                    <span
                      className={cn(
                        "rounded-lg px-2 py-1 text-[11px] font-semibold",
                        roleStyles[user.role]
                      )}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td className="px-3 py-3">
                    <span
                      className={cn(
                        "rounded-full px-2 py-1 text-[11px] font-semibold capitalize",
                        user.status === "active"
                          ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400"
                          : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                      )}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="px-3 py-3 text-sm text-slate-500 dark:text-slate-400">
                    {user.joined}
                  </td>

                  <td className="px-3 py-3">
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedUser(user)
                          setEditOpen(true)
                        }}
                        className="rounded-lg p-1.5 text-slate-500 hover:bg-white hover:text-violet-600 dark:hover:bg-slate-800 dark:hover:text-violet-400"
                        aria-label="Edit user"
                      >
                        <Pencil size={15} />
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setSelectedUser(user)
                          setEditOpen(true)
                        }}
                        className="rounded-lg p-1.5 text-slate-500 hover:text-violet-600 dark:hover:text-violet-400"
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

      <DashboardCard>
        <SectionHeader
          title="Recent Registrations"
          subtitle="Latest sign-ups across tenants"
        />

        <ul className="space-y-2.5">
          {recentRegistrations.map((reg, i) => (
            <li
              key={i}
              className="flex items-center gap-3 rounded-2xl p-2.5 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/60"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700 dark:bg-violet-500/20 dark:text-violet-300">
                {reg.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {reg.name}
                </p>

                <p className="flex items-center gap-1 truncate text-xs text-slate-500 dark:text-slate-400">
                  <Mail size={11} />
                  {reg.email}
                </p>

                <p className="text-[11px] text-violet-600 dark:text-violet-400">
                  {reg.tenant} · {reg.time}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </DashboardCard>
    </div>
  </div>

  <UserFormModal
    open={inviteOpen}
    onOpenChange={setInviteOpen}
    mode="invite"
  />

  <UserFormModal
    open={editOpen}
    onOpenChange={setEditOpen}
    mode="edit"
    initialData={selectedUser}
  />
</DashboardLayout>
  )
}
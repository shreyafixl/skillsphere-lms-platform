"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Bell, Eye, Filter } from "lucide-react"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import SearchBar from "@/components/dashboard/tenantadmin/SearchBar"
import StatusBadge from "./StatusBadge"
import {
  DataTable,
  DataTableCell,
  DataTableHead,
  DataTableRow,
  UserAvatar,
} from "@/components/dashboard/tenantadmin/DataTable"
import { teamMembers as defaultTeamMembers } from "./manager-data"

export default function TeamMembersTable({
  data,
  onViewMember,
  onNudgeMember,
  onOpenFilters,
  compact = false,
  showViewAll = false,
}) {
  const rows = data ?? defaultTeamMembers
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    const list = rows.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.email.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q)
    )
    return compact ? list.slice(0, 5) : list
  }, [rows, search, compact])

  return (
    <DashboardCard>
      <SectionHeader
        title="Assigned Learners"
        subtitle={`${filtered.length}${compact ? "+" : ""} team members`}
        action={
          showViewAll ? (
            <Link
              href="/dashboard/manager/team"
              className="text-sm font-semibold text-violet-600 transition-colors hover:text-violet-500 dark:text-violet-400"
            >
              View all
            </Link>
          ) : null
        }
      />
      {!compact && (
        <div className="mb-5 flex flex-col gap-3 sm:flex-row">
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search team members..."
          />
          <button
            type="button"
            onClick={() => onOpenFilters?.("team")}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200/80 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-violet-200 hover:bg-violet-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-violet-500/40 dark:hover:bg-violet-500/10"
          >
            <Filter size={16} />
            Filters
          </button>
        </div>
      )}
      <DataTable minWidth="720px">
        <DataTableHead
          columns={["Member", "Role", "Progress", "Courses", "Status", ""]}
        />
        <tbody>
          {filtered.map((member) => (
            <DataTableRow key={member.id}>
              <DataTableCell>
                <div className="flex items-center gap-3">
                  <UserAvatar name={member.name} size="sm" />
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-100">
                      {member.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {member.email}
                    </p>
                  </div>
                </div>
              </DataTableCell>
              <DataTableCell className="text-slate-600 dark:text-slate-300">
                {member.role}
              </DataTableCell>
              <DataTableCell>
                <div className="flex min-w-[100px] items-center gap-2">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                      style={{ width: `${member.progress}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                    {member.progress}%
                  </span>
                </div>
              </DataTableCell>
              <DataTableCell className="text-slate-600 dark:text-slate-300">
                {member.courses}
              </DataTableCell>
              <DataTableCell>
                <StatusBadge status={member.status} />
              </DataTableCell>
              <DataTableCell>
                <div className="flex gap-1">
                  <button
                    type="button"
                    onClick={() => onViewMember?.(member)}
                    className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-white hover:text-violet-600 dark:hover:bg-slate-800 dark:hover:text-violet-400"
                    aria-label={`View ${member.name}`}
                  >
                    <Eye size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNudgeMember?.(member)}
                    className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-white hover:text-violet-600 dark:hover:bg-slate-800 dark:hover:text-violet-400"
                    aria-label={`Nudge ${member.name}`}
                  >
                    <Bell size={16} />
                  </button>
                </div>
              </DataTableCell>
            </DataTableRow>
          ))}
        </tbody>
      </DataTable>
    </DashboardCard>
  )
}

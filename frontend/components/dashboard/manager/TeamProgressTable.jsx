"use client"

import { useMemo, useState } from "react"
import { Filter } from "lucide-react"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import SearchBar from "@/components/dashboard/tenant-admin/SearchBar"
import StatusBadge from "./StatusBadge"
import {
  DataTable,
  DataTableCell,
  DataTableHead,
  DataTableRow,
  UserAvatar,
} from "@/components/dashboard/tenant-admin/DataTable"
import { teamMembers as defaultTeamMembers } from "./manager-data"

export default function TeamProgressTable({
  data,
  onOpenFilters,
}) {
  const rows = data ?? defaultTeamMembers
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return rows.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q)
    )
  }, [rows, search])

  return (
    <DashboardCard>
      <SectionHeader
        title="Employee Progress Tracking"
        subtitle={`${filtered.length} learners with active assignments`}
      />
      <div className="mb-5 flex flex-col gap-3 sm:flex-row">
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or role..."
        />
        <button
          type="button"
          onClick={() => onOpenFilters?.("progress")}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200/80 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-violet-200 hover:bg-violet-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-violet-500/40 dark:hover:bg-violet-500/10"
        >
          <Filter size={16} />
          Filters
        </button>
      </div>
      <DataTable minWidth="760px">
        <DataTableHead
          columns={["Employee", "Role", "Progress", "Courses", "Last Active", "Status"]}
        />
        <tbody>
          {filtered.map((member) => (
            <DataTableRow key={member.id}>
              <DataTableCell>
                <div className="flex items-center gap-3">
                  <UserAvatar name={member.name} size="sm" />
                  <p className="font-semibold text-slate-800 dark:text-slate-100">
                    {member.name}
                  </p>
                </div>
              </DataTableCell>
              <DataTableCell className="text-slate-600 dark:text-slate-300">
                {member.role}
              </DataTableCell>
              <DataTableCell>
                <div className="flex min-w-[120px] items-center gap-2">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                      style={{ width: `${member.progress}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium">{member.progress}%</span>
                </div>
              </DataTableCell>
              <DataTableCell className="text-slate-600 dark:text-slate-300">
                {member.courses} active
              </DataTableCell>
              <DataTableCell className="text-slate-500 dark:text-slate-400">
                {member.lastActive}
              </DataTableCell>
              <DataTableCell>
                <StatusBadge status={member.status} />
              </DataTableCell>
            </DataTableRow>
          ))}
        </tbody>
      </DataTable>
    </DashboardCard>
  )
}

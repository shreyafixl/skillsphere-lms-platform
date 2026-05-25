"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { CheckCircle, Filter } from "lucide-react"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import SearchBar from "@/components/dashboard/tenantadmin/SearchBar"
import StatusBadge from "./StatusBadge"
import { DataTable, DataTableCell, DataTableHead, DataTableRow, UserAvatar } from "@/components/dashboard/tenantadmin/DataTable"
import { recentSubmissions as defaultSubmissions } from "./trainer-data"

export default function RecentSubmissionsTable({
  data,
  onGrade,
  onOpenFilters,
  compact = false,
  showViewAll = false,
}) {
  const rows = data ?? defaultSubmissions
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    const list = rows.filter(
      (s) =>
        s.student.toLowerCase().includes(q) ||
        s.course.toLowerCase().includes(q) ||
        s.assignment.toLowerCase().includes(q)
    )
    return compact ? list.slice(0, 5) : list
  }, [rows, search, compact])

  return (
    <DashboardCard>
      <SectionHeader
        title="Recent Submissions"
        subtitle={`${filtered.length}${compact ? "+" : ""} submissions`}
        action={
          showViewAll ? (
            <Link href="/dashboard/trainer/submissions" className="text-sm font-semibold text-violet-600 transition-colors hover:text-violet-500 dark:text-violet-400">
              View all
            </Link>
          ) : null
        }
      />
      {!compact && (
        <div className="mb-5 flex flex-col gap-3 sm:flex-row">
          <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search submissions..." />
          <button
            type="button"
            onClick={() => onOpenFilters?.("submissions")}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200/80 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-violet-200 hover:bg-violet-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-violet-500/40 dark:hover:bg-violet-500/10"
          >
            <Filter size={16} />
            Filters
          </button>
        </div>
      )}
      <DataTable minWidth="760px">
        <DataTableHead columns={["Student", "Course", "Assignment", "Submitted", "Score", "Status", ""]} />
        <tbody>
          {filtered.map((row) => (
            <DataTableRow key={row.id}>
              <DataTableCell>
                <div className="flex items-center gap-3">
                  <UserAvatar name={row.student} size="sm" />
                  <p className="font-semibold text-slate-800 dark:text-slate-100">{row.student}</p>
                </div>
              </DataTableCell>
              <DataTableCell className="text-slate-600 dark:text-slate-300">{row.course}</DataTableCell>
              <DataTableCell className="text-slate-600 dark:text-slate-300">{row.assignment}</DataTableCell>
              <DataTableCell className="text-slate-500 dark:text-slate-400">{row.submitted}</DataTableCell>
              <DataTableCell className="font-medium text-slate-700 dark:text-slate-300">
                {row.score != null ? `${row.score}%` : "—"}
              </DataTableCell>
              <DataTableCell><StatusBadge status={row.status} /></DataTableCell>
              <DataTableCell>
                {row.status === "pending" && (
                  <button
                    type="button"
                    onClick={() => onGrade?.(row)}
                    className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-white hover:text-violet-600 dark:hover:bg-slate-800 dark:hover:text-violet-400"
                    aria-label={`Grade ${row.assignment}`}
                  >
                    <CheckCircle size={16} />
                  </button>
                )}
              </DataTableCell>
            </DataTableRow>
          ))}
        </tbody>
      </DataTable>
    </DashboardCard>
  )
}

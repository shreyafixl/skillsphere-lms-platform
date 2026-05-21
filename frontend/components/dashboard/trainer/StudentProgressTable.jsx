"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Eye, Filter } from "lucide-react"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import SearchBar from "@/components/dashboard/tenant-admin/SearchBar"
import StatusBadge from "./StatusBadge"
import { DataTable, DataTableCell, DataTableHead, DataTableRow, UserAvatar } from "@/components/dashboard/tenant-admin/DataTable"
import { students as defaultStudents } from "./trainer-data"

export default function StudentProgressTable({
  data,
  onViewStudent,
  onOpenFilters,
  compact = false,
  showViewAll = false,
}) {
  const rows = data ?? defaultStudents
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    const list = rows.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.course.toLowerCase().includes(q) ||
        s.email.toLowerCase().includes(q)
    )
    return compact ? list.slice(0, 5) : list
  }, [rows, search, compact])

  return (
    <DashboardCard>
      <SectionHeader
        title="Student Progress"
        subtitle={`${filtered.length}${compact ? "+" : ""} learners`}
        action={
          showViewAll ? (
            <Link href="/dashboard/trainer/students" className="text-sm font-semibold text-violet-600 transition-colors hover:text-violet-500 dark:text-violet-400">
              View all
            </Link>
          ) : null
        }
      />
      {!compact && (
        <div className="mb-5 flex flex-col gap-3 sm:flex-row">
          <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search students..." />
          <button
            type="button"
            onClick={() => onOpenFilters?.("students")}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200/80 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-violet-200 hover:bg-violet-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-violet-500/40 dark:hover:bg-violet-500/10"
          >
            <Filter size={16} />
            Filters
          </button>
        </div>
      )}
      <DataTable minWidth="720px">
        <DataTableHead columns={["Student", "Course", "Progress", "Last Submission", "Status", ""]} />
        <tbody>
          {filtered.map((student) => (
            <DataTableRow key={student.id}>
              <DataTableCell>
                <div className="flex items-center gap-3">
                  <UserAvatar name={student.name} size="sm" />
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-100">{student.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{student.email}</p>
                  </div>
                </div>
              </DataTableCell>
              <DataTableCell className="text-slate-600 dark:text-slate-300">{student.course}</DataTableCell>
              <DataTableCell>
                <div className="flex min-w-[100px] items-center gap-2">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" style={{ width: `${student.progress}%` }} />
                  </div>
                  <span className="text-xs font-medium">{student.progress}%</span>
                </div>
              </DataTableCell>
              <DataTableCell className="text-slate-500 dark:text-slate-400">{student.lastSubmission}</DataTableCell>
              <DataTableCell><StatusBadge status={student.status} /></DataTableCell>
              <DataTableCell>
                <button
                  type="button"
                  onClick={() => onViewStudent?.(student)}
                  className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-white hover:text-violet-600 dark:hover:bg-slate-800 dark:hover:text-violet-400"
                  aria-label={`View ${student.name}`}
                >
                  <Eye size={16} />
                </button>
              </DataTableCell>
            </DataTableRow>
          ))}
        </tbody>
      </DataTable>
    </DashboardCard>
  )
}

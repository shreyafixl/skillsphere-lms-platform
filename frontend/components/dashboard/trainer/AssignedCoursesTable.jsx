"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Filter, Upload } from "lucide-react"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import SearchBar from "@/components/dashboard/tenant-admin/SearchBar"
import StatusBadge from "./StatusBadge"
import { DataTable, DataTableCell, DataTableHead, DataTableRow } from "@/components/dashboard/tenant-admin/DataTable"
import { assignedCourses as defaultCourses } from "./trainer-data"

export default function AssignedCoursesTable({
  data,
  onUploadMaterial,
  onOpenFilters,
  compact = false,
  showViewAll = false,
}) {
  const rows = data ?? defaultCourses
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    const list = rows.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q)
    )
    return compact ? list.slice(0, 4) : list
  }, [rows, search, compact])

  return (
    <DashboardCard>
      <SectionHeader
        title="Assigned Courses"
        subtitle={`${filtered.length}${compact ? "+" : ""} courses`}
        action={
          showViewAll ? (
            <Link href="/dashboard/trainer/courses" className="text-sm font-semibold text-violet-600 transition-colors hover:text-violet-500 dark:text-violet-400">
              View all
            </Link>
          ) : null
        }
      />
      {!compact && (
        <div className="mb-5 flex flex-col gap-3 sm:flex-row">
          <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search courses..." />
          <button
            type="button"
            onClick={() => onOpenFilters?.("courses")}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200/80 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-violet-200 hover:bg-violet-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-violet-500/40 dark:hover:bg-violet-500/10"
          >
            <Filter size={16} />
            Filters
          </button>
        </div>
      )}
      <DataTable minWidth="760px">
        <DataTableHead columns={["Course", "Students", "Completion", "Modules", "Next Session", "Status", ""]} />
        <tbody>
          {filtered.map((course) => (
            <DataTableRow key={course.id}>
              <DataTableCell>
                <p className="font-semibold text-slate-800 dark:text-slate-100">{course.title}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{course.category}</p>
              </DataTableCell>
              <DataTableCell className="text-slate-600 dark:text-slate-300">{course.students}</DataTableCell>
              <DataTableCell>
                <div className="flex min-w-[88px] items-center gap-2">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" style={{ width: `${course.completion}%` }} />
                  </div>
                  <span className="text-xs font-medium">{course.completion}%</span>
                </div>
              </DataTableCell>
              <DataTableCell className="text-slate-600 dark:text-slate-300">{course.modules}</DataTableCell>
              <DataTableCell className="text-slate-500 dark:text-slate-400">{course.nextSession}</DataTableCell>
              <DataTableCell><StatusBadge status={course.status} /></DataTableCell>
              <DataTableCell>
                <button
                  type="button"
                  onClick={() => onUploadMaterial?.(course)}
                  className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-white hover:text-violet-600 dark:hover:bg-slate-800 dark:hover:text-violet-400"
                  aria-label={`Upload material for ${course.title}`}
                >
                  <Upload size={16} />
                </button>
              </DataTableCell>
            </DataTableRow>
          ))}
        </tbody>
      </DataTable>
    </DashboardCard>
  )
}

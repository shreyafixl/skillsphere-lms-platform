"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Filter } from "lucide-react"
import { cn } from "@/lib/utils"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import SearchBar from "./SearchBar"
import StatusBadge from "./StatusBadge"
import {
  DataTable,
  DataTableCell,
  DataTableHead,
  DataTableRow,
} from "./DataTable"
import { courseAssignments as defaultAssignments } from "./tenantadmin-data"

export default function CourseAssignmentsTable({
  data,
  onOpenFilters,
  compact = false,
  showViewAll = false,
}) {
  const rows = data ?? defaultAssignments
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    const list = rows.filter(
      (c) =>
        c.course.toLowerCase().includes(q) ||
        c.trainer.toLowerCase().includes(q)
    )
    return compact ? list.slice(0, 4) : list
  }, [rows, search, compact])

  return (
    <DashboardCard>
      <SectionHeader
        title="Course Assignments"
        subtitle={`${filtered.length}${compact ? "+" : ""} assignments`}
        action={
          showViewAll ? (
            <Link
              href="/dashboard/tenantadmin/courses"
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
            placeholder="Search courses or trainers..."
          />
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
        <DataTableHead
          columns={["Course", "Trainer", "Assigned", "Completed", "Due", "Status"]}
        />
        <tbody>
          {filtered.map((row) => {
            const rate = Math.round((row.completed / row.assigned) * 100)

            return (
              <DataTableRow key={row.id}>
                <DataTableCell>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">
                    {row.course}
                  </p>
                </DataTableCell>
                <DataTableCell className="text-slate-600 dark:text-slate-300">
                  {row.trainer}
                </DataTableCell>
                <DataTableCell className="text-slate-600 dark:text-slate-300">
                  {row.assigned}
                </DataTableCell>
                <DataTableCell>
                  <div className="flex min-w-[88px] flex-col gap-1">
                    <span className="text-slate-600 dark:text-slate-300">
                      {row.completed}
                    </span>
                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                      <div
                        className={cn(
                          "h-full rounded-full",
                          rate >= 80
                            ? "bg-emerald-500"
                            : rate >= 50
                              ? "bg-violet-500"
                              : "bg-amber-500"
                        )}
                        style={{ width: `${rate}%` }}
                      />
                    </div>
                  </div>
                </DataTableCell>
                <DataTableCell className="text-slate-500 dark:text-slate-400">
                  {row.dueDate}
                </DataTableCell>
                <DataTableCell>
                  <StatusBadge status={row.status} />
                </DataTableCell>
              </DataTableRow>
            )
          })}
        </tbody>
      </DataTable>
    </DashboardCard>
  )
}

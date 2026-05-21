"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Filter, Pencil } from "lucide-react"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import SearchBar from "./SearchBar"
import StatusBadge from "./StatusBadge"
import {
  DataTable,
  DataTableCell,
  DataTableHead,
  DataTableRow,
  UserAvatar,
} from "./DataTable"
import { employees as defaultEmployees } from "./tenant-admin-data"

export default function EmployeesTable({
  data,
  onEditEmployee,
  onOpenFilters,
  compact = false,
  showViewAll = false,
}) {
  const rows = data ?? defaultEmployees
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    const list = rows.filter(
      (e) =>
        e.name.toLowerCase().includes(q) ||
        e.email.toLowerCase().includes(q) ||
        e.department.toLowerCase().includes(q)
    )
    return compact ? list.slice(0, 5) : list
  }, [rows, search, compact])

  return (
    <DashboardCard>
      <SectionHeader
        title="Employee Management"
        subtitle={`${filtered.length}${compact ? "+" : ""} employees`}
        action={
          showViewAll ? (
            <Link
              href="/dashboard/tenant-admin/employees"
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
            placeholder="Search employees..."
          />
          <button
            type="button"
            onClick={() => onOpenFilters?.("employees")}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200/80 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-violet-200 hover:bg-violet-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-violet-500/40 dark:hover:bg-violet-500/10"
          >
            <Filter size={16} />
            Filters
          </button>
        </div>
      )}
      <DataTable minWidth="720px">
        <DataTableHead
          columns={["Employee", "Department", "Progress", "Courses", "Status", ""]}
        />
        <tbody>
          {filtered.map((employee) => (
            <DataTableRow key={employee.id}>
              <DataTableCell>
                <div className="flex items-center gap-3">
                  <UserAvatar name={employee.name} size="sm" />
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-100">
                      {employee.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {employee.email}
                    </p>
                  </div>
                </div>
              </DataTableCell>
              <DataTableCell className="text-slate-600 dark:text-slate-300">
                {employee.department}
              </DataTableCell>
              <DataTableCell>
                <div className="flex min-w-[100px] items-center gap-2">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                      style={{ width: `${employee.progress}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                    {employee.progress}%
                  </span>
                </div>
              </DataTableCell>
              <DataTableCell className="text-slate-600 dark:text-slate-300">
                {employee.courses}
              </DataTableCell>
              <DataTableCell>
                <StatusBadge status={employee.status} />
              </DataTableCell>
              <DataTableCell>
                <button
                  type="button"
                  onClick={() => onEditEmployee?.(employee)}
                  className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-white hover:text-violet-600 dark:hover:bg-slate-800 dark:hover:text-violet-400"
                  aria-label={`Edit ${employee.name}`}
                >
                  <Pencil size={compact ? 18 : 16} />
                </button>
              </DataTableCell>
            </DataTableRow>
          ))}
        </tbody>
      </DataTable>
    </DashboardCard>
  )
}

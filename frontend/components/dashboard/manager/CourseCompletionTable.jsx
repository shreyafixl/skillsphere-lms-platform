"use client"

import { cn } from "@/lib/utils"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import StatusBadge from "./StatusBadge"
import {
  DataTable,
  DataTableCell,
  DataTableHead,
  DataTableRow,
} from "@/components/dashboard/tenant-admin/DataTable"
import { courseCompletionStats as defaultStats } from "./manager-data"

export default function CourseCompletionTable({ data }) {
  const rows = data ?? defaultStats

  return (
    <DashboardCard>
      <SectionHeader
        title="Course Completion Stats"
        subtitle="Completion rates for courses assigned to your team"
      />
      <DataTable minWidth="680px">
        <DataTableHead
          columns={["Course", "Assigned", "Completed", "Rate", "Status"]}
        />
        <tbody>
          {rows.map((row) => (
            <DataTableRow key={row.course}>
              <DataTableCell>
                <p className="font-semibold text-slate-800 dark:text-slate-100">
                  {row.course}
                </p>
              </DataTableCell>
              <DataTableCell className="text-slate-600 dark:text-slate-300">
                {row.assigned}
              </DataTableCell>
              <DataTableCell className="text-slate-600 dark:text-slate-300">
                {row.completed}
              </DataTableCell>
              <DataTableCell>
                <div className="flex min-w-[88px] flex-col gap-1">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {row.rate}%
                  </span>
                  <div className="h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div
                      className={cn(
                        "h-full rounded-full",
                        row.rate >= 80
                          ? "bg-emerald-500"
                          : row.rate >= 50
                            ? "bg-violet-500"
                            : "bg-amber-500"
                      )}
                      style={{ width: `${row.rate}%` }}
                    />
                  </div>
                </div>
              </DataTableCell>
              <DataTableCell>
                <StatusBadge status={row.status} />
              </DataTableCell>
            </DataTableRow>
          ))}
        </tbody>
      </DataTable>
    </DashboardCard>
  )
}

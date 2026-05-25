"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Calendar, Filter, Pencil } from "lucide-react"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import SearchBar from "@/components/dashboard/tenantadmin/SearchBar"
import StatusBadge from "./StatusBadge"
import { DataTable, DataTableCell, DataTableHead, DataTableRow } from "@/components/dashboard/tenantadmin/DataTable"
import { sessions as defaultSessions } from "./trainer-data"

export default function SessionsTable({
  data,
  onEditSession,
  onOpenFilters,
  compact = false,
  showViewAll = false,
}) {
  const rows = data ?? defaultSessions
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    const list = rows.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.course.toLowerCase().includes(q)
    )
    return compact ? list.slice(0, 4) : list
  }, [rows, search, compact])

  return (
    <DashboardCard>
      <SectionHeader
        title="Session Management"
        subtitle={`${filtered.length}${compact ? "+" : ""} sessions`}
        action={
          showViewAll ? (
            <Link href="/dashboard/trainer/sessions" className="text-sm font-semibold text-violet-600 transition-colors hover:text-violet-500 dark:text-violet-400">
              View all
            </Link>
          ) : null
        }
      />
      {!compact && (
        <div className="mb-5 flex flex-col gap-3 sm:flex-row">
          <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search sessions..." />
          <button
            type="button"
            onClick={() => onOpenFilters?.("sessions")}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200/80 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-violet-200 hover:bg-violet-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-violet-500/40 dark:hover:bg-violet-500/10"
          >
            <Filter size={16} />
            Filters
          </button>
        </div>
      )}
      <DataTable minWidth="760px">
        <DataTableHead columns={["Session", "Course", "Date & Time", "Duration", "Attendees", "Format", "Status", ""]} />
        <tbody>
          {filtered.map((session) => (
            <DataTableRow key={session.id}>
              <DataTableCell>
                <p className="font-semibold text-slate-800 dark:text-slate-100">{session.title}</p>
              </DataTableCell>
              <DataTableCell className="text-slate-600 dark:text-slate-300">{session.course}</DataTableCell>
              <DataTableCell>
                <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                  <Calendar size={14} className="text-slate-400" />
                  <span className="text-sm">{session.date}</span>
                  <span className="text-xs text-slate-400">{session.time}</span>
                </div>
              </DataTableCell>
              <DataTableCell className="text-slate-600 dark:text-slate-300">{session.duration}</DataTableCell>
              <DataTableCell className="text-slate-600 dark:text-slate-300">{session.attendees}</DataTableCell>
              <DataTableCell className="text-slate-600 dark:text-slate-300">{session.format}</DataTableCell>
              <DataTableCell><StatusBadge status={session.status} /></DataTableCell>
              <DataTableCell>
                <button
                  type="button"
                  onClick={() => onEditSession?.(session)}
                  className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-white hover:text-violet-600 dark:hover:bg-slate-800 dark:hover:text-violet-400"
                  aria-label={`Edit ${session.title}`}
                >
                  <Pencil size={16} />
                </button>
              </DataTableCell>
            </DataTableRow>
          ))}
        </tbody>
      </DataTable>
    </DashboardCard>
  )
}

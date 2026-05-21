"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Filter, Pencil, Star } from "lucide-react"
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
import { trainers as defaultTrainers } from "./tenant-admin-data"

export default function TrainersTable({
  data,
  onEditTrainer,
  onOpenFilters,
  compact = false,
  showViewAll = false,
}) {
  const rows = data ?? defaultTrainers
  const [search, setSearch] = useState("")

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    const list = rows.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.email.toLowerCase().includes(q) ||
        t.specialty.toLowerCase().includes(q)
    )
    return compact ? list.slice(0, 4) : list
  }, [rows, search, compact])

  return (
    <DashboardCard>
      <SectionHeader
        title="Trainers"
        subtitle={`${filtered.length}${compact ? "+" : ""} trainers`}
        action={
          showViewAll ? (
            <Link
              href="/dashboard/tenant-admin/trainers"
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
            placeholder="Search trainers..."
          />
          <button
            type="button"
            onClick={() => onOpenFilters?.("trainers")}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200/80 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-violet-200 hover:bg-violet-50 dark:border-slate-700 dark:text-slate-300 dark:hover:border-violet-500/40 dark:hover:bg-violet-500/10"
          >
            <Filter size={16} />
            Filters
          </button>
        </div>
      )}
      <DataTable minWidth="640px">
        <DataTableHead
          columns={["Trainer", "Specialty", "Courses", "Learners", "Rating", "Status", ""]}
        />
        <tbody>
          {filtered.map((trainer) => (
            <DataTableRow key={trainer.id}>
              <DataTableCell>
                <div className="flex items-center gap-3">
                  <UserAvatar name={trainer.name} size="sm" />
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-slate-100">
                      {trainer.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {trainer.email}
                    </p>
                  </div>
                </div>
              </DataTableCell>
              <DataTableCell className="text-slate-600 dark:text-slate-300">
                {trainer.specialty}
              </DataTableCell>
              <DataTableCell className="text-slate-600 dark:text-slate-300">
                {trainer.courses}
              </DataTableCell>
              <DataTableCell className="text-slate-600 dark:text-slate-300">
                {trainer.learners}
              </DataTableCell>
              <DataTableCell>
                <span className="inline-flex items-center gap-1 font-medium text-amber-600 dark:text-amber-400">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  {trainer.rating}
                </span>
              </DataTableCell>
              <DataTableCell>
                <StatusBadge status={trainer.status} />
              </DataTableCell>
              <DataTableCell>
                <button
                  type="button"
                  onClick={() => onEditTrainer?.(trainer)}
                  className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-white hover:text-violet-600 dark:hover:bg-slate-800 dark:hover:text-violet-400"
                  aria-label={`Edit ${trainer.name}`}
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

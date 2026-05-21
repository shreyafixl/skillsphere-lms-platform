"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import { departmentAnalytics } from "./manager-data"

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null

  return (
    <div className="rounded-xl border border-slate-700/50 bg-slate-900/95 px-4 py-3 shadow-xl backdrop-blur-sm">
      <p className="mb-2 text-xs font-medium text-slate-400">{label}</p>
      {payload.map((entry) => (
        <p
          key={entry.dataKey}
          className="text-sm font-semibold"
          style={{ color: entry.color }}
        >
          {entry.name}: {entry.value}%
        </p>
      ))}
    </div>
  )
}

export default function DepartmentAnalyticsChart({
  data = departmentAnalytics,
  title = "Department Analytics",
  subtitle = "Completion rates across squads in your department",
}) {
  return (
    <DashboardCard padding={false} className="overflow-hidden">
      <div className="p-6 pb-0">
        <SectionHeader title={title} subtitle={subtitle} />
      </div>
      <div className="mx-6 mb-6 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950/50 p-4 ring-1 ring-white/5 sm:p-6">
        <div className="h-[240px] w-full sm:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis
                dataKey="department"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 11 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                domain={[0, 100]}
              />
              <Tooltip content={<ChartTooltip />} />
              <Bar
                dataKey="completion"
                name="Completion"
                fill="#8b5cf6"
                radius={[8, 8, 0, 0]}
                maxBarSize={48}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardCard>
  )
}

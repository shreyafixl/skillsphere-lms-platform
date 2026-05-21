"use client"

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import DashboardCard from "./DashboardCard"
import SectionHeader from "./SectionHeader"

const chartData = [
  { month: "Jan", revenue: 42, users: 1200 },
  { month: "Feb", revenue: 58, users: 1450 },
  { month: "Mar", revenue: 51, users: 1380 },
  { month: "Apr", revenue: 72, users: 1820 },
  { month: "May", revenue: 68, users: 1750 },
  { month: "Jun", revenue: 84, users: 2100 },
  { month: "Jul", revenue: 91, users: 2280 },
  { month: "Aug", revenue: 88, users: 2190 },
]

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
          {entry.name}: {entry.value}
          {entry.dataKey === "revenue" ? "K" : ""}
        </p>
      ))}
    </div>
  )
}

export default function AnalyticsChart() {
  return (
    <DashboardCard padding={false} className="overflow-hidden">
      <div className="p-6 pb-0">
        <SectionHeader
          title="Platform Analytics"
          subtitle="Revenue and user growth across all tenants"
        />
      </div>
      <div className="mx-6 mb-6 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950/40 p-4 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />
            <span className="text-xs font-medium text-slate-400">Revenue (K)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-400/80" />
            <span className="text-xs font-medium text-slate-400">New Users</span>
          </div>
        </div>
        <div className="h-[220px] w-full sm:h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 8, right: 8, left: -16, bottom: 0 }}
            >
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.45} />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="usersGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#e879f9" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#e879f9" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#334155"
                vertical={false}
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />
              <Tooltip content={<ChartTooltip />} />
              <Area
                type="monotone"
                dataKey="revenue"
                name="Revenue"
                stroke="#8b5cf6"
                strokeWidth={2.5}
                fill="url(#revenueGradient)"
              />
              <Area
                type="monotone"
                dataKey="users"
                name="Users"
                stroke="#e879f9"
                strokeWidth={2}
                fill="url(#usersGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardCard>
  )
}

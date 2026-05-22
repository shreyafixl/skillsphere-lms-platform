"use client"

import { useState } from "react"
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
import ChartPeriodSelect from "./ChartPeriodSelect"
import { cn } from "@/lib/utils"

const chartData = [
  { month: "Jan", revenue: 42 },
  { month: "Feb", revenue: 58 },
  { month: "Mar", revenue: 51 },
  { month: "Apr", revenue: 72 },
  { month: "May", revenue: 68 },
  { month: "Jun", revenue: 84 },
  { month: "Jul", revenue: 91 },
  { month: "Aug", revenue: 88 },
  { month: "Sep", revenue: 95 },
  { month: "Oct", revenue: 102 },
  { month: "Nov", revenue: 98 },
  { month: "Dec", revenue: 110 },
]

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null

  return (
    <div className="rounded-xl border border-slate-200/80 bg-white px-4 py-3 shadow-lg dark:border-slate-700 dark:bg-slate-900">
      <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-lg font-bold text-violet-600 dark:text-violet-400">
        ${payload[0]?.value}K
      </p>
      <p className="text-xs text-slate-500">Platform revenue</p>
    </div>
  )
}

export default function AnalyticsChart({
  compact = false,
  enterprise = false,
  title = "Platform Analytics",
}) {
  const [period, setPeriod] = useState("This Year")

  if (enterprise) {
    return (
      <DashboardCard padding={false} compact className="h-full overflow-hidden">
        <div className="flex items-start justify-between gap-3 border-b border-slate-100 px-4 py-3 dark:border-slate-800">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Revenue Growth
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Monthly platform revenue
            </p>
          </div>
          <ChartPeriodSelect value={period} onChange={setPeriod} />
        </div>
        <div className="px-2 pb-3 pt-1">
          <div className="h-[220px] w-full sm:h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 12, right: 12, left: -18, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="enterpriseRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#e2e8f0"
                  vertical={false}
                />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 11 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#94a3b8", fontSize: 11 }}
                  tickFormatter={(v) => `${v}K`}
                />
                <Tooltip content={<ChartTooltip />} />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#6366f1"
                  strokeWidth={2.5}
                  fill="url(#enterpriseRevenue)"
                  dot={false}
                  activeDot={{
                    r: 5,
                    fill: "#6366f1",
                    stroke: "#fff",
                    strokeWidth: 2,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </DashboardCard>
    )
  }

  return (
    <DashboardCard padding={false} compact={compact} className="overflow-hidden">
      <div className={cn(compact ? "p-4 pb-0" : "p-6 pb-0")}>
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </h3>
      </div>
      <div className="mx-4 mb-4 h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <Area type="monotone" dataKey="revenue" stroke="#8b5cf6" fill="#8b5cf633" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </DashboardCard>
  )
}

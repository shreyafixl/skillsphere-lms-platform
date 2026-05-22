"use client"

import { useState } from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import DashboardCard from "./DashboardCard"
import ChartPeriodSelect from "./ChartPeriodSelect"
import { cn } from "@/lib/utils"

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-lg border border-slate-200/80 bg-white px-3 py-2 shadow-lg dark:border-slate-700 dark:bg-slate-900">
      <p className="mb-1 text-xs font-medium text-slate-500">{label}</p>
      {payload.map((entry) => (
        <p
          key={entry.dataKey}
          className="text-xs font-semibold"
          style={{ color: entry.color }}
        >
          {entry.name}: {entry.value}
        </p>
      ))}
    </div>
  )
}

export default function DashboardBarChart({
  title,
  data,
  bars,
  height = 180,
  periodOptions = ["This Month", "This Year"],
  defaultPeriod = "This Month",
  showLegend = true,
  compact = true,
}) {
  const [period, setPeriod] = useState(defaultPeriod)

  return (
    <DashboardCard padding={false} compact={compact} className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-3 border-b border-slate-100 px-4 py-3 dark:border-slate-800">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </h3>
        <ChartPeriodSelect
          value={period}
          onChange={setPeriod}
          options={periodOptions}
        />
      </div>
      <div className={cn("w-full flex-1 px-3 pb-3 pt-2")} style={{ minHeight: height }}>
        <ResponsiveContainer width="100%" height={height}>
          <BarChart data={data} margin={{ top: 4, right: 4, left: -22, bottom: 0 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
              vertical={false}
            />
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 10 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 10 }}
            />
            <Tooltip content={<ChartTooltip />} />
            {showLegend && (
              <Legend
                iconType="circle"
                iconSize={8}
                wrapperStyle={{ fontSize: 11, paddingTop: 8 }}
              />
            )}
            {bars.map((bar) => (
              <Bar
                key={bar.key}
                dataKey={bar.key}
                name={bar.name}
                fill={bar.color}
                radius={[4, 4, 0, 0]}
                maxBarSize={28}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </DashboardCard>
  )
}

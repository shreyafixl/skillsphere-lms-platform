"use client"

import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import { learningProgressData } from "./employee-data"

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl border border-slate-700/50 bg-slate-900/95 px-4 py-3 shadow-xl backdrop-blur-sm">
      <p className="mb-2 text-xs font-medium text-slate-400">{label}</p>
      {payload.map((entry) => (
        <p key={entry.dataKey} className="text-sm font-semibold" style={{ color: entry.color }}>
          {entry.name}: {entry.value}
          {entry.dataKey === "progress" ? "%" : entry.dataKey === "hours" ? "h" : ""}
        </p>
      ))}
    </div>
  )
}

export default function LearningProgressChart({
  data = learningProgressData,
  title = "Learning Progress",
  subtitle = "Weekly study hours and overall progress trend",
}) {
  return (
    <DashboardCard padding={false} className="overflow-hidden">
      <div className="p-6 pb-0">
        <SectionHeader title={title} subtitle={subtitle} />
      </div>
      <div className="mx-6 mb-6 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950/50 p-4 ring-1 ring-white/5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />
            <span className="text-xs font-medium text-slate-400">Progress %</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-400/90" />
            <span className="text-xs font-medium text-slate-400">Study hours</span>
          </div>
        </div>
        <div className="h-[220px] w-full sm:h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
              <defs>
                <linearGradient id="empProgressGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.45} />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} domain={[0, 100]} />
              <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <Tooltip content={<ChartTooltip />} />
              <Bar yAxisId="right" dataKey="hours" name="Hours" fill="#d946ef" fillOpacity={0.6} radius={[6, 6, 0, 0]} maxBarSize={32} />
              <Area yAxisId="left" type="monotone" dataKey="progress" name="Progress" stroke="#8b5cf6" strokeWidth={2.5} fill="url(#empProgressGrad)" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </DashboardCard>
  )
}

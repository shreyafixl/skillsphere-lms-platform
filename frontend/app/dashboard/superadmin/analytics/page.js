"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import {
  DollarSign,
  Users,
  Activity,
  TrendingUp,
} from "lucide-react"
import DashboardLayout from "@/components/dashboard/DashboardLayout"
import PageHeader from "@/components/dashboard/PageHeader"
import StatsCard from "@/components/dashboard/StatsCard"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"

const revenueData = [
  { month: "Jan", revenue: 62, mrr: 58 },
  { month: "Feb", revenue: 74, mrr: 68 },
  { month: "Mar", revenue: 71, mrr: 72 },
  { month: "Apr", revenue: 88, mrr: 82 },
  { month: "May", revenue: 92, mrr: 88 },
  { month: "Jun", revenue: 105, mrr: 98 },
  { month: "Jul", revenue: 112, mrr: 108 },
  { month: "Aug", revenue: 118, mrr: 115 },
]

const userGrowthData = [
  { month: "Jan", users: 18200, active: 12400 },
  { month: "Feb", users: 19100, active: 13200 },
  { month: "Mar", users: 19800, active: 13800 },
  { month: "Apr", users: 20900, active: 14500 },
  { month: "May", users: 21800, active: 15200 },
  { month: "Jun", users: 22800, active: 16100 },
  { month: "Jul", users: 23600, active: 16800 },
  { month: "Aug", users: 24583, active: 17500 },
]

const performanceData = [
  { metric: "Uptime", value: 99.98 },
  { metric: "API Latency", value: 94 },
  { metric: "Completion", value: 78 },
  { metric: "NPS Score", value: 72 },
]

const stats = [
  { title: "Total Revenue", value: "$842K", growth: "+22.1%", icon: <DollarSign size={24} />, iconBg: "bg-emerald-50 dark:bg-emerald-500/15", iconColor: "text-emerald-600 dark:text-emerald-400" },
  { title: "MRR", value: "$115K", growth: "+18.4%", icon: <TrendingUp size={24} />, iconBg: "bg-violet-50 dark:bg-violet-500/15", iconColor: "text-violet-600 dark:text-violet-400" },
  { title: "Total Users", value: "24,583", growth: "+12.5%", icon: <Users size={24} />, iconBg: "bg-blue-50 dark:bg-blue-500/15", iconColor: "text-blue-600 dark:text-blue-400" },
  { title: "Platform Health", value: "99.9%", growth: "+0.1%", icon: <Activity size={24} />, iconBg: "bg-fuchsia-50 dark:bg-fuchsia-500/15", iconColor: "text-fuchsia-600 dark:text-fuchsia-400" },
]

function DarkTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl border border-slate-700/50 bg-slate-900/95 px-4 py-3 shadow-xl backdrop-blur-sm">
      <p className="mb-2 text-xs font-medium text-slate-400">{label}</p>
      {payload.map((entry) => (
        <p key={entry.dataKey} className="text-sm font-semibold" style={{ color: entry.color }}>
          {entry.name}: {entry.value}
          {entry.dataKey === "revenue" || entry.dataKey === "mrr" ? "K" : ""}
        </p>
      ))}
    </div>
  )
}

function ChartShell({ title, subtitle, children }) {
  return (
    <DashboardCard padding={false} className="overflow-hidden">
      <div className="p-6 pb-0">
        <SectionHeader title={title} subtitle={subtitle} />
      </div>
      <div className="mx-6 mb-6 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950/40 p-4 sm:p-6">
        <div className="h-[240px] w-full sm:h-[280px]">{children}</div>
      </div>
    </DashboardCard>
  )
}

export default function AnalyticsPage() {
  return (
    <DashboardLayout topbarTitle="Analytics">
      <div className="space-y-6 sm:space-y-8">
        <PageHeader
          title="Platform Analytics"
          description="Deep insights into revenue, user growth, and platform performance metrics."
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <ChartShell title="Revenue Analytics" subtitle="Monthly revenue and MRR trends">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
                <Tooltip content={<DarkTooltip />} />
                <Bar dataKey="revenue" name="Revenue" fill="#8b5cf6" radius={[6, 6, 0, 0]} />
                <Bar dataKey="mrr" name="MRR" fill="#a78bfa" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartShell>

          <ChartShell title="User Growth" subtitle="Total vs active users over time">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userGrowthData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
                <Tooltip content={<DarkTooltip />} />
                <Line type="monotone" dataKey="users" name="Total Users" stroke="#8b5cf6" strokeWidth={2.5} dot={false} />
                <Line type="monotone" dataKey="active" name="Active Users" stroke="#e879f9" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </ChartShell>
        </div>

        <ChartShell title="Combined Performance" subtitle="Revenue and user growth correlation">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={userGrowthData.map((u, i) => ({ ...u, revenue: revenueData[i]?.revenue ?? 0 }))} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
              <defs>
                <linearGradient id="analyticsRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="analyticsUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#e879f9" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#e879f9" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
              <Tooltip content={<DarkTooltip />} />
              <Area type="monotone" dataKey="revenue" name="Revenue (K)" stroke="#8b5cf6" strokeWidth={2} fill="url(#analyticsRevenue)" />
              <Area type="monotone" dataKey="users" name="Users" stroke="#e879f9" strokeWidth={2} fill="url(#analyticsUsers)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartShell>

        <DashboardCard>
          <SectionHeader title="Platform Performance" subtitle="Key health and engagement metrics" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {performanceData.map((item) => (
              <div
                key={item.metric}
                className="rounded-2xl border border-slate-100 p-5 transition-colors hover:border-violet-200 hover:bg-violet-50/30 dark:border-slate-800 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/5"
              >
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{item.metric}</p>
                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-50">
                  {item.metric === "API Latency" ? `${item.value}ms` : `${item.value}%`}
                </p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                    style={{ width: `${Math.min(item.value, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </DashboardLayout>
  )
}

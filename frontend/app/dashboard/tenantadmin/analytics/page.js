"use client"

import DashboardLayout from "@/components/dashboard/DashboardLayout"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts"

const chartData = [
  { month: "Jan", users: 40 },
  { month: "Feb", users: 55 },
  { month: "Mar", users: 70 },
  { month: "Apr", users: 48 },
  { month: "May", users: 90 },
  { month: "Jun", users: 65 },
  { month: "Jul", users: 100 },
]

export default function AnalyticsPage() {
  const stats = [
    {
      title: "Employees",
      value: "1,284",
    },
    {
      title: "Courses",
      value: "42",
    },
    {
      title: "Completion Rate",
      value: "89%",
    },
    {
      title: "Training Hours",
      value: "4,920",
    },
  ]

  return (
    <DashboardLayout
      role="tenantadmin"
      topbarTitle="Analytics"
      enterprise
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Analytics Dashboard
          </h1>

          <p className="mt-1 text-slate-500 dark:text-slate-400">
            Track learning performance and employee engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-sm text-slate-500">
                {item.title}
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
                {item.value}
              </h2>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Performance Overview
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Monthly employee engagement analytics
            </p>
          </div>

          <div className="h-[350px]">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <BarChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="users"
                  radius={[10, 10, 0, 0]}
                  fill="#a855f7"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
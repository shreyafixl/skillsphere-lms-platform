"use client"

import DashboardLayout from "@/components/dashboard/DashboardLayout"

export default function SuperAdminDashboard() {

  return (

    <DashboardLayout>

      <h1 className="text-4xl font-bold mb-8">
        Super Admin Dashboard
      </h1>

      {/* CHART */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">

        <h2 className="text-2xl font-bold mb-6">
          Platform Analytics
        </h2>

        <div className="h-[260px] bg-slate-900 rounded-3xl flex items-end justify-start gap-4 px-6 pb-6 mt-6 overflow-x-auto">

          <div className="w-10 h-24 bg-violet-500 rounded-t-xl"></div>

          <div className="w-10 h-40 bg-violet-500 rounded-t-xl"></div>

          <div className="w-10 h-32 bg-violet-500 rounded-t-xl"></div>

          <div className="w-10 h-52 bg-violet-500 rounded-t-xl"></div>

          <div className="w-10 h-36 bg-violet-500 rounded-t-xl"></div>

          <div className="w-10 h-44 bg-violet-500 rounded-t-xl"></div>

          <div className="w-10 h-28 bg-violet-500 rounded-t-xl"></div>

        </div>

      </div>

    </DashboardLayout>

  )

}
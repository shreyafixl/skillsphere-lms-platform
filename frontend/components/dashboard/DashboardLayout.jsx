"use client"

import Sidebar from "./sidebar"
import Topbar from "./topbar"

export default function DashboardLayout({ children }) {

  return (

    <div className="flex bg-slate-50 min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* RIGHT SECTION */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <Topbar />

        {/* PAGE CONTENT */}
        <main className="p-8 space-y-8">

          {children}

        </main>

      </div>

    </div>

  )

}
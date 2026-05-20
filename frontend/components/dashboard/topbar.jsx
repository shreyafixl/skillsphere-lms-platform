"use client"

import {
  Bell,
  Search,
  Moon
} from "lucide-react"

export default function Topbar() {

  return (

    <div className="h-20 bg-white/80 backdrop-blur-xl border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-40">

      {/* SEARCH BAR */}
      <div className="relative w-[400px]">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search..."
          className="w-full h-11 rounded-xl bg-slate-100 pl-11 pr-4 outline-none focus:ring-2 focus:ring-violet-500"
        />

      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-5">

        {/* DARK MODE */}
        <button className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-all">

          <Moon size={18} />

        </button>

        {/* NOTIFICATIONS */}
        <button className="relative w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-all">

          <Bell size={18} />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>

        </button>

        {/* PROFILE */}
        <div className="flex items-center gap-3">

          <div className="text-right">

            <h2 className="text-sm font-semibold text-slate-800">
              Admin User
            </h2>

            <p className="text-xs text-slate-500">
              Super Admin
            </p>

          </div>

          <div className="w-11 h-11 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold">
            A
          </div>

        </div>

      </div>

    </div>

  )

}
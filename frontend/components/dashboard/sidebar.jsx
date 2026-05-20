"use client"

import {
  LayoutDashboard,
  Users,
  BookOpen,
  BarChart3,
  Settings,
  LogOut,
  Building2,
  GraduationCap
} from "lucide-react"

export default function Sidebar() {

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard
    },
    {
      title: "Tenants",
      icon: Building2
    },
    {
      title: "Users",
      icon: Users
    },
    {
      title: "Courses",
      icon: BookOpen
    },
    {
      title: "Trainers",
      icon: GraduationCap
    },
    {
      title: "Analytics",
      icon: BarChart3
    },
    {
      title: "Settings",
      icon: Settings
    }
  ]

  return (

    <div className="w-64 h-screen bg-slate-950 text-white flex flex-col justify-between p-5">

      {/* LOGO */}
      <div>

        <div className="flex items-center gap-3 mb-10">

          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-lg flex items-center justify-center font-bold text-lg">
            S
          </div>

          <div>

            <h1 className="font-bold text-lg">
              SkillSphere
            </h1>

            <p className="text-xs text-slate-400">
              Enterprise LMS
            </p>

          </div>

        </div>

        {/* MENU */}
        <div className="space-y-2">

          {menuItems.map((item, index) => {

            const Icon = item.icon

            return (

              <button
                key={index}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
                  item.title === "Dashboard"
                    ? "bg-violet-600 text-white shadow-lg"
                    : "text-slate-300 hover:bg-violet-600/20 hover:text-white"
                }`}
              >

                <Icon size={20} />

                <span>
                  {item.title}
                </span>

              </button>

            )

          })}

        </div>

      </div>

      {/* PROFILE */}
      <div className="border-t border-slate-800 pt-5">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center font-semibold shadow-lg">
              A
            </div>

            <div>

              <h2 className="text-sm font-semibold">
                Admin User
              </h2>

              <p className="text-xs text-slate-400">
                Super Admin
              </p>

            </div>

          </div>

          <button className="text-slate-400 hover:text-red-500 transition-all">

            <LogOut size={18} />

          </button>

        </div>

      </div>

    </div>

  )

}
"use client"

import {
  BookOpen,
  GraduationCap,
  Target,
  Users,
} from "lucide-react"
import StatsCard from "@/components/dashboard/StatsCard"
import { overviewStats } from "./tenantadmin-data"

const icons = {
  users: <Users size={24} />,
  trainers: <GraduationCap size={24} />,
  courses: <BookOpen size={24} />,
  completion: <Target size={24} />,
}

export default function TenantStatsGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {overviewStats.map((stat) => (
        <StatsCard
          key={stat.title}
          {...stat}
          icon={icons[stat.iconKey]}
        />
      ))}
    </div>
  )
}

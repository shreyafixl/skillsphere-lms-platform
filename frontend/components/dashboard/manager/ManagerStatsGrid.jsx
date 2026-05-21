"use client"

import { BookOpen, Clock, Target, Users } from "lucide-react"
import StatsCard from "@/components/dashboard/StatsCard"
import { overviewStats } from "./manager-data"

const icons = {
  team: <Users size={24} />,
  progress: <Target size={24} />,
  completed: <BookOpen size={24} />,
  deadlines: <Clock size={24} />,
}

export default function ManagerStatsGrid({ stats = overviewStats }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatsCard key={stat.title} {...stat} icon={icons[stat.iconKey]} />
      ))}
    </div>
  )
}

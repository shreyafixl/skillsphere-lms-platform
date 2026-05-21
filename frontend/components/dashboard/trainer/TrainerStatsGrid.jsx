"use client"

import { BookOpen, GraduationCap, Target, Video } from "lucide-react"
import StatsCard from "@/components/dashboard/StatsCard"
import { overviewStats } from "./trainer-data"

const icons = {
  courses: <BookOpen size={24} />,
  students: <GraduationCap size={24} />,
  completion: <Target size={24} />,
  sessions: <Video size={24} />,
}

export default function TrainerStatsGrid({ stats = overviewStats }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatsCard key={stat.title} {...stat} icon={icons[stat.iconKey]} />
      ))}
    </div>
  )
}

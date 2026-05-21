"use client"

import { Clock, Star, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import { recommendedCourses as defaultRecommended } from "./employee-data"

export default function RecommendedCoursesGrid({
  courses = defaultRecommended,
  limit,
  onEnroll,
}) {
  const items = limit ? courses.slice(0, limit) : courses

  return (
    <DashboardCard>
      <SectionHeader title="Recommended for You" subtitle="Personalized based on your role and progress" />
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((course) => (
          <article
            key={course.id}
            className={cn(
              "rounded-2xl border border-slate-100 p-4 transition-all duration-300",
              "hover:border-violet-200 hover:shadow-md hover:shadow-violet-500/10",
              "dark:border-slate-800 dark:hover:border-violet-500/30"
            )}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">{course.title}</p>
                <p className="mt-0.5 text-xs text-slate-500">{course.category}</p>
              </div>
              <span className="shrink-0 rounded-lg bg-violet-50 px-2 py-1 text-xs font-bold text-violet-600 dark:bg-violet-500/15 dark:text-violet-400">
                {course.match}% match
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1">
                <Clock size={14} />
                {course.duration}
              </span>
              <span className="inline-flex items-center gap-1">
                <Star size={14} className="fill-amber-400 text-amber-400" />
                {course.rating}
              </span>
              <span className="inline-flex items-center gap-1">
                <Users size={14} />
                {(course.learners / 1000).toFixed(1)}k
              </span>
            </div>
            <button
              type="button"
              onClick={() => onEnroll?.(course)}
              className="mt-4 w-full rounded-xl border border-violet-200 bg-violet-50 py-2.5 text-sm font-semibold text-violet-700 transition-colors hover:bg-violet-100 dark:border-violet-500/40 dark:bg-violet-500/10 dark:text-violet-300 dark:hover:bg-violet-500/20"
            >
              Enroll Now
            </button>
          </article>
        ))}
      </div>
    </DashboardCard>
  )
}

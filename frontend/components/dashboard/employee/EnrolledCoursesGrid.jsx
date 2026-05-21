"use client"

import Link from "next/link"
import { BookOpen, Play } from "lucide-react"
import { cn } from "@/lib/utils"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import StatusBadge from "./StatusBadge"
import { enrolledCourses as defaultCourses } from "./employee-data"

const thumbColors = {
  react: "from-violet-600 to-indigo-600",
  security: "from-emerald-600 to-teal-600",
  leadership: "from-fuchsia-600 to-pink-600",
  privacy: "from-blue-600 to-cyan-600",
  communication: "from-amber-600 to-orange-600",
}

export default function EnrolledCoursesGrid({
  courses = defaultCourses,
  limit,
  showViewAll = false,
  onContinue,
}) {
  const items = limit ? courses.slice(0, limit) : courses

  return (
    <DashboardCard>
      <SectionHeader
        title="Enrolled Courses"
        subtitle="Continue where you left off"
        action={
          showViewAll ? (
            <Link href="/dashboard/employee/courses" className="text-sm font-semibold text-violet-600 transition-colors hover:text-violet-500 dark:text-violet-400">
              View all
            </Link>
          ) : null
        }
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((course) => (
          <article
            key={course.id}
            className={cn(
              "group overflow-hidden rounded-2xl border border-slate-100 transition-all duration-300",
              "hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/10",
              "dark:border-slate-800 dark:hover:border-violet-500/30"
            )}
          >
            <div className={cn("flex h-24 items-center justify-center bg-gradient-to-br", thumbColors[course.thumbnail] ?? thumbColors.react)}>
              <BookOpen size={36} className="text-white/90" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-semibold text-slate-900 dark:text-slate-100">{course.title}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{course.instructor} · {course.category}</p>
                </div>
                <StatusBadge status={course.status} />
              </div>
              <div className="mt-3">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>{course.completedModules}/{course.modules} modules</span>
                  <span className="font-medium text-violet-600 dark:text-violet-400">{course.progress}%</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
              {course.status === "in-progress" && (
                <button
                  type="button"
                  onClick={() => onContinue?.(course)}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-500/25 transition-all hover:shadow-lg hover:shadow-violet-500/30"
                >
                  <Play size={16} />
                  Continue Learning
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </DashboardCard>
  )
}

"use client"

import { useState } from "react"
import {
  BookOpen,
  Plus,
  Users,
  Layers,
  TrendingUp,
  Clock,
  Star,
} from "lucide-react"
import { cn } from "@/lib/utils"
import DashboardLayout from "@/components/dashboard/DashboardLayout"
import PageHeader from "@/components/dashboard/PageHeader"
import StatsCard from "@/components/dashboard/StatsCard"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import { PrimaryActionButton } from "@/components/dashboard/ActionButton"
import { CourseFormModal } from "@/components/dashboard/modals"

const stats = [
  { title: "Total Courses", value: "1,429", growth: "+15.3%", icon: <BookOpen size={24} />, iconBg: "bg-fuchsia-50 dark:bg-fuchsia-500/15", iconColor: "text-fuchsia-600 dark:text-fuchsia-400" },
  { title: "Enrollments", value: "48.2K", growth: "+22%", icon: <Users size={24} />, iconBg: "bg-blue-50 dark:bg-blue-500/15", iconColor: "text-blue-600 dark:text-blue-400" },
  { title: "Categories", value: "24", growth: "+3", icon: <Layers size={24} />, iconBg: "bg-violet-50 dark:bg-violet-500/15", iconColor: "text-violet-600 dark:text-violet-400" },
  { title: "Avg. Completion", value: "78%", growth: "+4.2%", icon: <TrendingUp size={24} />, iconBg: "bg-emerald-50 dark:bg-emerald-500/15", iconColor: "text-emerald-600 dark:text-emerald-400" },
]

const categories = [
  { name: "Technology", count: 342, color: "bg-violet-500" },
  { name: "Leadership", count: 218, color: "bg-indigo-500" },
  { name: "Compliance", count: 186, color: "bg-fuchsia-500" },
  { name: "Sales", count: 154, color: "bg-blue-500" },
  { name: "Soft Skills", count: 129, color: "bg-emerald-500" },
]

const courses = [
  { title: "Advanced React Patterns", category: "Technology", enrollments: 1240, progress: 72, duration: "12h", rating: 4.8 },
  { title: "Enterprise Leadership 101", category: "Leadership", enrollments: 890, progress: 65, duration: "8h", rating: 4.6 },
  { title: "GDPR & Data Privacy", category: "Compliance", enrollments: 2100, progress: 91, duration: "4h", rating: 4.9 },
  { title: "B2B Sales Mastery", category: "Sales", enrollments: 560, progress: 58, duration: "10h", rating: 4.5 },
  { title: "Effective Communication", category: "Soft Skills", enrollments: 780, progress: 84, duration: "6h", rating: 4.7 },
  { title: "Cloud Architecture AWS", category: "Technology", enrollments: 1450, progress: 45, duration: "18h", rating: 4.8 },
]

const categoryColors = {
  Technology: "bg-violet-50 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
  Leadership: "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300",
  Compliance: "bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300",
  Sales: "bg-blue-50 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300",
  "Soft Skills": "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
}

export default function CoursesPage() {
  const [courseOpen, setCourseOpen] = useState(false)

  return (
    <DashboardLayout topbarTitle="Courses">
      <div className="space-y-6 sm:space-y-8">
        <PageHeader
          title="Course Catalog"
          description="Manage courses, track enrollments, and monitor learning progress across the platform."
          action={
            <PrimaryActionButton onClick={() => setCourseOpen(true)}>
              <Plus size={18} />
              Upload Course
            </PrimaryActionButton>
          }
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>

        <DashboardCard>
          <SectionHeader title="Categories" subtitle="Course distribution by topic" />
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.name}
                type="button"
                className="group flex items-center gap-3 rounded-2xl border border-slate-200/80 px-4 py-3 transition-all hover:border-violet-200 hover:shadow-md dark:border-slate-700 dark:hover:border-violet-500/40"
              >
                <span className={cn("h-2.5 w-2.5 rounded-full", cat.color)} />
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">{cat.name}</span>
                <span className="rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </DashboardCard>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <DashboardCard
              key={course.title}
              role="button"
              tabIndex={0}
              onClick={() => setCourseOpen(true)}
              onKeyDown={(e) => e.key === "Enter" && setCourseOpen(true)}
              className="group cursor-pointer transition-all hover:-translate-y-0.5 hover:border-violet-200 dark:hover:border-violet-500/30"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-violet-600 text-white">
                  <BookOpen size={20} />
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star size={14} className="fill-amber-400" />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{course.rating}</span>
                </div>
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-slate-100">{course.title}</h3>
              <span className={cn("mt-2 inline-flex rounded-lg px-2.5 py-1 text-xs font-semibold", categoryColors[course.category])}>
                {course.category}
              </span>
              <div className="mt-4 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <Users size={14} />
                  {course.enrollments.toLocaleString()}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {course.duration}
                </span>
              </div>
              <div className="mt-4">
                <div className="mb-1.5 flex justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Avg. progress</span>
                  <span className="font-semibold text-violet-600 dark:text-violet-400">{course.progress}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            </DashboardCard>
          ))}
        </div>
      </div>

      <CourseFormModal open={courseOpen} onOpenChange={setCourseOpen} />
    </DashboardLayout>
  )
}

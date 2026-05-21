"use client"

import { BookOpen, CheckCircle, ClipboardList, Users } from "lucide-react"
import { toast } from "sonner"
import PageHeader from "@/components/dashboard/PageHeader"
import { PrimaryActionButton } from "@/components/dashboard/ActionButton"
import StatsCard from "@/components/dashboard/StatsCard"
import {
  TenantAdminLayout,
  CourseAssignmentsTable,
  courseAssignments,
} from "@/components/dashboard/tenant-admin"

const totalAssigned = courseAssignments.reduce((s, c) => s + c.assigned, 0)
const totalCompleted = courseAssignments.reduce((s, c) => s + c.completed, 0)

const stats = [
  {
    title: "Assignments",
    value: String(courseAssignments.length),
    growth: "+2",
    icon: <ClipboardList size={24} />,
    iconBg: "bg-violet-50 dark:bg-violet-500/15",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    title: "Active",
    value: String(
      courseAssignments.filter((c) => c.status === "active").length
    ),
    growth: "4",
    icon: <BookOpen size={24} />,
    iconBg: "bg-fuchsia-50 dark:bg-fuchsia-500/15",
    iconColor: "text-fuchsia-600 dark:text-fuchsia-400",
  },
  {
    title: "Learners Assigned",
    value: totalAssigned.toLocaleString(),
    growth: "+18%",
    icon: <Users size={24} />,
    iconBg: "bg-blue-50 dark:bg-blue-500/15",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Completed",
    value: totalCompleted.toLocaleString(),
    growth: `${Math.round((totalCompleted / totalAssigned) * 100)}%`,
    icon: <CheckCircle size={24} />,
    iconBg: "bg-emerald-50 dark:bg-emerald-500/15",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
]

export default function CoursesPage() {
  return (
    <TenantAdminLayout topbarTitle="Course Assignments">
      <div className="space-y-6 sm:space-y-8">
        <PageHeader
          title="Course Assignments"
          description="Assign courses to teams, set deadlines, and track completion."
          action={
            <PrimaryActionButton
              onClick={() =>
                toast.success("Assignment created", {
                  description: "New course assignment draft saved.",
                })
              }
            >
              <BookOpen size={18} />
              New Assignment
            </PrimaryActionButton>
          }
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>

        <CourseAssignmentsTable />
      </div>
    </TenantAdminLayout>
  )
}

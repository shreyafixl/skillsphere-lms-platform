"use client"

import Link from "next/link"
import { BookOpen, FileText, Megaphone, Upload, Users, Video } from "lucide-react"
import PageHeader from "@/components/dashboard/PageHeader"
import DashboardCard from "@/components/dashboard/DashboardCard"
import { PrimaryActionButton } from "@/components/dashboard/ActionButton"
import {
  TrainerLayout,
  TrainerStatsGrid,
  LearnerAnalyticsChart,
  TrainerActivityPanel,
  AssignedCoursesTable,
  StudentProgressTable,
  SessionsTable,
  UpcomingClassesPanel,
  RecentSubmissionsTable,
  AnnouncementsPanel,
  TrainerPageSection,
  TrainerStaggerGrid,
  TrainerStaggerItem,
  trainerCopy,
} from "@/components/dashboard/trainer"

const quickLinks = [
  { title: "Courses", description: "Assigned courses", href: "/dashboard/trainer/courses", icon: BookOpen, color: "text-violet-600 dark:text-violet-400", bg: "bg-violet-50 dark:bg-violet-500/15" },
  { title: "Students", description: "Progress tracking", href: "/dashboard/trainer/students", icon: Users, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-500/15" },
  { title: "Sessions", description: "Manage sessions", href: "/dashboard/trainer/sessions", icon: Video, color: "text-fuchsia-600 dark:text-fuchsia-400", bg: "bg-fuchsia-50 dark:bg-fuchsia-500/15" },
  { title: "Submissions", description: "Grade work", href: "/dashboard/trainer/submissions", icon: FileText, color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-500/15" },
  { title: "Announcements", description: "Post updates", href: "/dashboard/trainer/announcements", icon: Megaphone, color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-500/15" },
]

export default function TrainerDashboard() {
  return (
    <TrainerLayout topbarTitle="Overview">
      {({
        assignedCourses,
        students,
        sessions,
        announcements,
        recentSubmissions,
        openUploadMaterial,
        openViewStudent,
        openGradeSubmission,
        openEditSession,
        openEditAnnouncement,
        openFilters,
      }) => (
        <TrainerPageSection className="space-y-6 sm:space-y-8">
          <PageHeader
            title={trainerCopy.dashboardHeading}
            description={trainerCopy.dashboardDescription}
            action={
              <PrimaryActionButton onClick={() => openUploadMaterial()}>
                <Upload size={18} />
                Upload Material
              </PrimaryActionButton>
            }
          />

          <TrainerStatsGrid />

          <TrainerStaggerGrid className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 sm:gap-4">
            {quickLinks.map((link) => {
              const Icon = link.icon
              return (
                <TrainerStaggerItem key={link.href}>
                  <Link href={link.href}>
                    <DashboardCard className="h-full p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/10 dark:hover:border-violet-500/30 sm:p-5">
                      <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${link.bg}`}>
                        <Icon size={20} className={link.color} />
                      </div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{link.title}</p>
                      <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{link.description}</p>
                    </DashboardCard>
                  </Link>
                </TrainerStaggerItem>
              )
            })}
          </TrainerStaggerGrid>

          <LearnerAnalyticsChart />

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <AssignedCoursesTable
              data={assignedCourses}
              onUploadMaterial={openUploadMaterial}
              onOpenFilters={openFilters}
              compact
              showViewAll
            />
            <StudentProgressTable
              data={students}
              onViewStudent={openViewStudent}
              onOpenFilters={openFilters}
              compact
              showViewAll
            />
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <SessionsTable
              data={sessions}
              onEditSession={openEditSession}
              onOpenFilters={openFilters}
              compact
              showViewAll
            />
            <UpcomingClassesPanel limit={3} showViewAll />
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <RecentSubmissionsTable
                data={recentSubmissions}
                onGrade={openGradeSubmission}
                onOpenFilters={openFilters}
                compact
                showViewAll
              />
            </div>
            <div>
              <AnnouncementsPanel
                announcements={announcements}
                limit={3}
                showViewAll
                onEdit={openEditAnnouncement}
              />
            </div>
          </div>

          <TrainerActivityPanel limit={5} />
        </TrainerPageSection>
      )}
    </TrainerLayout>
  )
}

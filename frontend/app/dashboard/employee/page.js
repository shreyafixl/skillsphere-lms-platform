"use client"

import Link from "next/link"

import {
  Award,
  BookOpen,
  Compass,
  Play,
  TrendingUp,
} from "lucide-react"

import PageHeader from "@/components/dashboard/PageHeader"
import DashboardCard from "@/components/dashboard/DashboardCard"

import { PrimaryActionButton } from "@/components/dashboard/ActionButton"

import {
  EmployeeLayout,
  EmployeeStatsGrid,
  StreakCard,
  LearningProgressChart,
  EnrolledCoursesGrid,
  CertificatesPanel,
  DeadlinesPanel,
  RecommendedCoursesGrid,
  ActivityTimeline,
  AchievementsGrid,
  EmployeePageSection,
  EmployeeStaggerGrid,
  EmployeeStaggerItem,
  employeeCopy,
} from "@/components/dashboard/employee"

const quickLinks = [
  {
    title: "My Courses",
    description: "Continue learning",
    href: "/dashboard/employee/courses",
    icon: BookOpen,
    color:
      "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-500/15",
  },

  {
    title: "Progress",
    description: "Track your growth",
    href: "/dashboard/employee/progress",
    icon: TrendingUp,
    color:
      "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-500/15",
  },

  {
    title: "Certificates",
    description: "View credentials",
    href: "/dashboard/employee/certificates",
    icon: Award,
    color:
      "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-500/15",
  },

  {
    title: "Discover",
    description: "Find new courses",
    href: "/dashboard/employee/discover",
    icon: Compass,
    color:
      "text-fuchsia-600 dark:text-fuchsia-400",
    bg: "bg-fuchsia-50 dark:bg-fuchsia-500/15",
  },
]

export default function EmployeeDashboard() {
  return (
    <EmployeeLayout topbarTitle="My Learning">
      {({
        enrolledCourses,
        recommendedCourses,
        openContinueCourse,
        openViewCertificate,
        openEnrollCourse,
      }) => {
        const inProgress =
          enrolledCourses.find(
            (c) =>
              c.status === "in-progress"
          )

        return (
          <EmployeePageSection className="space-y-5">
            <PageHeader
              title={
                employeeCopy.dashboardHeading
              }
              description={
                employeeCopy.dashboardDescription
              }
              action={
                inProgress ? (
                  <PrimaryActionButton
                    onClick={() =>
                      openContinueCourse(
                        inProgress
                      )
                    }
                  >
                    <Play size={16} />
                    Continue Learning
                  </PrimaryActionButton>
                ) : null
              }
            />

            <EmployeeStatsGrid />

            <EmployeeStaggerGrid className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {quickLinks.map((link) => {
                const Icon = link.icon

                return (
                  <EmployeeStaggerItem
                    key={link.href}
                  >
                    <Link href={link.href}>
                      <DashboardCard className="h-full rounded-2xl border border-slate-200/80 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-sm hover:shadow-violet-500/10 dark:border-slate-800/80 dark:hover:border-violet-500/30">
                        <div
                          className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl ${link.bg}`}
                        >
                          <Icon
                            size={18}
                            className={
                              link.color
                            }
                          />
                        </div>

                        <p className="text-[13px] font-semibold text-slate-900 dark:text-slate-50">
                          {link.title}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                          {link.description}
                        </p>
                      </DashboardCard>
                    </Link>
                  </EmployeeStaggerItem>
                )
              })}
            </EmployeeStaggerGrid>

            <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
              <div className="xl:col-span-2">
                <StreakCard />
              </div>

              <DeadlinesPanel
                limit={3}
                showViewAll
              />
            </div>

            <LearningProgressChart />

            <EnrolledCoursesGrid
              limit={4}
              showViewAll
              onContinue={
                openContinueCourse
              }
            />

            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
              <CertificatesPanel
                limit={2}
                showViewAll
                onView={
                  openViewCertificate
                }
              />

              <ActivityTimeline limit={5} />
            </div>

            <RecommendedCoursesGrid
              courses={recommendedCourses}
              limit={2}
              onEnroll={openEnrollCourse}
            />

            <AchievementsGrid />
          </EmployeePageSection>
        )
      }}
    </EmployeeLayout>
  )
}
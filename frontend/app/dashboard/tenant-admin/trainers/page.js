"use client"

import { GraduationCap, Star, Users, BookOpen } from "lucide-react"
import { toast } from "sonner"
import PageHeader from "@/components/dashboard/PageHeader"
import { PrimaryActionButton } from "@/components/dashboard/ActionButton"
import StatsCard from "@/components/dashboard/StatsCard"
import {
  TenantAdminLayout,
  TrainersTable,
  trainers,
} from "@/components/dashboard/tenant-admin"

const stats = [
  {
    title: "Total Trainers",
    value: String(trainers.length),
    growth: "+1",
    icon: <GraduationCap size={24} />,
    iconBg: "bg-violet-50 dark:bg-violet-500/15",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    title: "Active Trainers",
    value: String(trainers.filter((t) => t.status === "active").length),
    growth: "100%",
    icon: <Users size={24} />,
    iconBg: "bg-emerald-50 dark:bg-emerald-500/15",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Avg. Rating",
    value: "4.8",
    growth: "+0.2",
    icon: <Star size={24} />,
    iconBg: "bg-amber-50 dark:bg-amber-500/15",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    title: "Courses Led",
    value: String(trainers.reduce((sum, t) => sum + t.courses, 0)),
    growth: "+4",
    icon: <BookOpen size={24} />,
    iconBg: "bg-fuchsia-50 dark:bg-fuchsia-500/15",
    iconColor: "text-fuchsia-600 dark:text-fuchsia-400",
  },
]

export default function TrainersPage() {
  return (
    <TenantAdminLayout topbarTitle="Trainers">
      <div className="space-y-6 sm:space-y-8">
        <PageHeader
          title="Trainers Management"
          description="Oversee trainers, specialties, and course assignments."
          action={
            <PrimaryActionButton
              onClick={() =>
                toast.success("Trainer invite sent", {
                  description: "New trainer onboarding started.",
                })
              }
            >
              <GraduationCap size={18} />
              Add Trainer
            </PrimaryActionButton>
          }
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>

        <TrainersTable />
      </div>
    </TenantAdminLayout>
  )
}

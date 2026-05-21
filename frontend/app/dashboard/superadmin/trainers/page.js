"use client"

import { useState } from "react"
import {
  GraduationCap,
  Plus,
  Star,
  BookOpen,
  Users,
  Award,
  Mail,
} from "lucide-react"
import { cn } from "@/lib/utils"
import DashboardLayout from "@/components/dashboard/DashboardLayout"
import PageHeader from "@/components/dashboard/PageHeader"
import StatsCard from "@/components/dashboard/StatsCard"
import DashboardCard from "@/components/dashboard/DashboardCard"
import SectionHeader from "@/components/dashboard/SectionHeader"
import { PrimaryActionButton } from "@/components/dashboard/ActionButton"
import { TrainerFormModal } from "@/components/dashboard/modals"

const stats = [
  { title: "Total Trainers", value: "342", growth: "+6.8%", icon: <GraduationCap size={24} />, iconBg: "bg-violet-50 dark:bg-violet-500/15", iconColor: "text-violet-600 dark:text-violet-400" },
  { title: "Active Courses", value: "856", growth: "+11%", icon: <BookOpen size={24} />, iconBg: "bg-fuchsia-50 dark:bg-fuchsia-500/15", iconColor: "text-fuchsia-600 dark:text-fuchsia-400" },
  { title: "Avg. Rating", value: "4.7", growth: "+0.2", icon: <Star size={24} />, iconBg: "bg-amber-50 dark:bg-amber-500/15", iconColor: "text-amber-600 dark:text-amber-400" },
  { title: "Students Taught", value: "18.4K", growth: "+19%", icon: <Users size={24} />, iconBg: "bg-blue-50 dark:bg-blue-500/15", iconColor: "text-blue-600 dark:text-blue-400" },
]

const trainers = [
  {
    name: "Dr. Rachel Adams",
    email: "rachel@skillsphere.io",
    expertise: ["Leadership", "Management"],
    rating: 4.9,
    reviews: 128,
    courses: 12,
    students: 3420,
    tenant: "Platform",
  },
  {
    name: "Marcus Chen",
    email: "marcus@techflow.io",
    expertise: ["React", "TypeScript", "Node.js"],
    rating: 4.8,
    reviews: 96,
    courses: 8,
    students: 2890,
    tenant: "TechFlow Inc",
  },
  {
    name: "Elena Rodriguez",
    email: "elena@globaledu.com",
    expertise: ["Compliance", "Legal"],
    rating: 4.9,
    reviews: 84,
    courses: 6,
    students: 4100,
    tenant: "GlobalEdu Partners",
  },
  {
    name: "James Okonkwo",
    email: "james@acme.com",
    expertise: ["Sales", "Negotiation"],
    rating: 4.6,
    reviews: 72,
    courses: 5,
    students: 1560,
    tenant: "Acme Corporation",
  },
  {
    name: "Priya Sharma",
    email: "priya@novalearn.com",
    expertise: ["AWS", "DevOps", "Cloud"],
    rating: 4.8,
    reviews: 110,
    courses: 10,
    students: 2240,
    tenant: "NovaLearn",
  },
  {
    name: "Tom Bradley",
    email: "tom@learnhub.edu",
    expertise: ["Communication", "Presentation"],
    rating: 4.7,
    reviews: 58,
    courses: 4,
    students: 980,
    tenant: "LearnHub Academy",
  },
]

export default function TrainersPage() {
  const [trainerOpen, setTrainerOpen] = useState(false)

  return (
    <DashboardLayout topbarTitle="Trainers">
      <div className="space-y-6 sm:space-y-8">
        <PageHeader
          title="Trainer Directory"
          description="Manage instructors, view expertise, ratings, and active course assignments."
          action={
            <PrimaryActionButton onClick={() => setTrainerOpen(true)}>
              <Plus size={18} />
              Add Trainer
            </PrimaryActionButton>
          }
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {trainers.map((trainer) => (
            <DashboardCard
              key={trainer.email}
              role="button"
              tabIndex={0}
              onClick={() => setTrainerOpen(true)}
              onKeyDown={(e) => e.key === "Enter" && setTrainerOpen(true)}
              className="group cursor-pointer transition-all hover:-translate-y-0.5 hover:border-violet-200 dark:hover:border-violet-500/30"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-lg font-bold text-white shadow-md">
                  {trainer.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">{trainer.name}</h3>
                  <p className="mt-0.5 flex items-center gap-1 truncate text-xs text-slate-500 dark:text-slate-400">
                    <Mail size={12} />
                    {trainer.email}
                  </p>
                  <p className="mt-1 text-xs font-medium text-violet-600 dark:text-violet-400">{trainer.tenant}</p>
                </div>
                <div className="flex shrink-0 items-center gap-1 rounded-lg bg-amber-50 px-2 py-1 dark:bg-amber-500/15">
                  <Star size={14} className="fill-amber-400 text-amber-500" />
                  <span className="text-sm font-bold text-amber-700 dark:text-amber-300">{trainer.rating}</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {trainer.expertise.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-700 dark:bg-violet-500/15 dark:text-violet-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
                <div className="text-center">
                  <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{trainer.courses}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Courses</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{trainer.students.toLocaleString()}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Students</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{trainer.reviews}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Reviews</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <Award size={14} className="text-violet-500" />
                Top rated in {trainer.expertise[0]}
              </div>
            </DashboardCard>
          ))}
        </div>

        <DashboardCard>
          <SectionHeader title="Active Course Assignments" subtitle="Courses currently led by trainers" />
          <div className="space-y-3">
            {[
              { trainer: "Marcus Chen", course: "Advanced React Patterns", students: 420, status: "Live" },
              { trainer: "Elena Rodriguez", course: "GDPR & Data Privacy", students: 890, status: "Live" },
              { trainer: "Priya Sharma", course: "Cloud Architecture AWS", students: 310, status: "Live" },
              { trainer: "Dr. Rachel Adams", course: "Enterprise Leadership 101", students: 156, status: "Draft" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 rounded-2xl border border-slate-100 p-4 transition-colors hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:hover:bg-slate-800/50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 dark:bg-violet-500/20">
                    <BookOpen size={18} className="text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{item.course}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Led by {item.trainer}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-slate-600 dark:text-slate-300">{item.students} enrolled</span>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 text-xs font-semibold",
                      item.status === "Live"
                        ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400"
                        : "bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400"
                    )}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>

      <TrainerFormModal open={trainerOpen} onOpenChange={setTrainerOpen} />
    </DashboardLayout>
  )
}

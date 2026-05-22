"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  BarChart3,
  Bot,
  GraduationCap,
  LayoutDashboard,
  Sparkles,
  Users,
  X,
} from "lucide-react"

import AuthModalShell from "@/components/auth/AuthModalShell"
import { Button } from "@/components/ui/button"
import {
  demoFeaturePills,
  demoPreviewSections,
} from "@/lib/demo-preview-data"
import { cn } from "@/lib/utils"

const sectionIcons = {
  analytics: BarChart3,
  employee: GraduationCap,
  ai: Bot,
  dashboards: LayoutDashboard,
}

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  }),
}

function PreviewCard({ section, index }) {
  const Icon = sectionIcons[section.id] ?? LayoutDashboard

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="group rounded-2xl border border-slate-200/80 bg-white/60 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200/80 hover:shadow-lg hover:shadow-violet-500/10 dark:border-slate-700/80 dark:bg-slate-800/50 dark:hover:border-violet-500/30"
    >
      <div className="mb-3 flex items-start gap-3">
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-md",
            section.accent
          )}
        >
          <Icon size={20} />
        </div>
        <div className="min-w-0">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100">
            {section.title}
          </h4>
          <p className="mt-0.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
            {section.description}
          </p>
        </div>
      </div>

      {section.stats && (
        <div className="space-y-2.5 rounded-xl bg-slate-900/95 p-3 text-white dark:bg-slate-950/90">
          {section.stats.map((stat) => (
            <div key={stat.label}>
              {stat.width ? (
                <>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-slate-300">{stat.label}</span>
                    <span className="font-semibold">{stat.value}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-slate-700">
                    <div
                      className={cn(
                        "h-full rounded-full bg-gradient-to-r",
                        section.accent
                      )}
                      style={{ width: stat.width }}
                    />
                  </div>
                </>
              ) : (
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">{stat.label}</span>
                  <span className="font-semibold text-cyan-300">{stat.value}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {section.roles && (
        <div className="flex flex-wrap gap-1.5">
          {section.roles.map((role) => (
            <span
              key={role}
              className="rounded-lg border border-slate-200/80 bg-slate-50 px-2 py-1 text-[10px] font-medium text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
            >
              {role}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default function WatchDemoModal({ open, onClose, onGetStarted }) {
  const handleGetStarted = () => {
    onClose()
    onGetStarted?.()
  }

  return (
    <AuthModalShell
      open={open}
      onClose={onClose}
      className="max-h-[min(92vh,900px)] max-w-4xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "relative flex max-h-[min(92vh,900px)] flex-col overflow-hidden rounded-3xl border border-slate-200/80 shadow-2xl",
          "bg-white/95 backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-900/95",
          "dark:shadow-violet-500/10"
        )}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 text-slate-500 transition-all hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"
          aria-label="Close demo preview"
        >
          <X size={18} />
        </button>

        <div className="overflow-y-auto overscroll-contain">
          {/* Header */}
          <div className="border-b border-slate-200/80 bg-gradient-to-br from-violet-50/80 via-white to-fuchsia-50/50 px-6 py-6 pr-14 dark:border-slate-800 dark:from-violet-500/10 dark:via-slate-900 dark:to-fuchsia-500/5 sm:px-8 sm:py-8">
            <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-violet-200/80 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700 dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-300">
              <Sparkles size={12} />
              Platform preview
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              See SkillSphere in action
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base dark:text-slate-400">
              Explore dashboards, analytics, employee learning paths, and
              AI-powered coaching — all in one enterprise LMS.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {demoFeaturePills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-slate-200/80 bg-white/80 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Hero preview mockup */}
          <div className="px-6 py-6 sm:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-[#071133] p-6 shadow-xl shadow-indigo-900/30 dark:border-slate-700"
            >
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-violet-500/20 blur-3xl" />

              <div className="relative grid gap-6 lg:grid-cols-[1fr_auto]">
                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-rose-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-xs text-slate-400">
                      app.skillsphere.com / analytics
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    Learning Analytics
                  </h3>
                  <div className="mt-4 space-y-3">
                    <div>
                      <div className="mb-1 flex justify-between text-sm text-slate-300">
                        <span>Completion</span>
                        <span>87%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-700">
                        <div className="h-2 w-[87%] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-xl bg-white/5 px-3 py-2">
                        <p className="text-slate-400">Active Learners</p>
                        <p className="font-bold text-cyan-300">2,847</p>
                      </div>
                      <div className="rounded-xl bg-white/5 px-3 py-2">
                        <p className="text-slate-400">Certifications</p>
                        <p className="font-bold text-emerald-400">91%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden gap-3 sm:flex sm:flex-col">
                  <div className="w-48 rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs text-white">
                      <span>Team Progress</span>
                      <span className="font-bold text-emerald-400">+18%</span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-white/20">
                      <div className="h-1.5 w-[78%] rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                    </div>
                  </div>
                  <div className="w-48 rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-violet-300" />
                      <span className="text-xs font-medium text-white">
                        12 goals completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature highlight grid */}
          <div className="grid gap-4 px-6 pb-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-2">
            {demoPreviewSections.map((section, index) => (
              <PreviewCard key={section.id} section={section} index={index} />
            ))}
          </div>

          {/* CTA */}
          <div className="border-t border-slate-200/80 bg-slate-50/80 px-6 py-5 dark:border-slate-800 dark:bg-slate-800/40 sm:px-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-center text-sm text-slate-600 sm:text-left dark:text-slate-400">
                Ready to transform learning for your organization?
              </p>
              <Button
                size="lg"
                onClick={handleGetStarted}
                className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:scale-[1.02]"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AuthModalShell>
  )
}

/** Mock content for the Watch Demo modal (frontend-only previews). */

export const demoPreviewSections = [
  {
    id: "analytics",
    title: "Analytics Dashboard",
    description: "Real-time completion rates, active learners, and certification insights.",
    accent: "from-cyan-500 to-blue-600",
    stats: [
      { label: "Completion", value: "87%", width: "87%" },
      { label: "Active Learners", value: "2,847" },
      { label: "Certification Rate", value: "91%" },
    ],
  },
  {
    id: "employee",
    title: "Employee Learning",
    description: "Personalized paths, streaks, and course progress for every learner.",
    accent: "from-violet-500 to-fuchsia-500",
    stats: [
      { label: "Courses in progress", value: "5" },
      { label: "Learning streak", value: "12 days" },
      { label: "Certificates", value: "8 earned" },
    ],
  },
  {
    id: "ai",
    title: "AI-Powered Learning",
    description: "Smart recommendations, coaching, and adaptive skill goals.",
    accent: "from-amber-500 to-orange-500",
    stats: [
      { label: "AI sessions", value: "340+" },
      { label: "Skill goals met", value: "82%" },
      { label: "Time saved", value: "4.2 hrs/wk" },
    ],
  },
  {
    id: "dashboards",
    title: "Multi-Role Dashboards",
    description: "Tailored views for admins, managers, trainers, and employees.",
    accent: "from-emerald-500 to-teal-600",
    roles: ["Super Admin", "Tenant Admin", "Manager", "Trainer", "Employee"],
  },
]

export const demoFeaturePills = [
  "Live analytics",
  "Team progress",
  "Certifications",
  "AI assistant",
  "Enterprise security",
  "Global access",
]

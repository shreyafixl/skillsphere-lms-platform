export const employeeCopy = {
  roleLabel: "Employee",
  searchPlaceholder: "Search courses, certificates, lessons...",
  dashboardHeading: "My Learning",
  dashboardDescription:
    "Continue your courses, track progress, earn certificates, and discover new skills.",
  settingsDescription:
    "Manage your learning profile and notification preferences.",
}

export const employeeInfo = {
  name: "Sarah Chen",
  department: "Engineering",
  role: "Senior Developer",
  avatarInitials: "SC",
  streakDays: 12,
  totalHours: 48,
  level: "Advanced Learner",
}

export const overviewStats = [
  {
    title: "Enrolled Courses",
    value: "5",
    growth: "2 in progress",
    trend: "up",
    iconKey: "courses",
    iconBg: "bg-violet-50 dark:bg-violet-500/15",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    title: "Overall Progress",
    value: "78%",
    growth: "+6%",
    trend: "up",
    iconKey: "progress",
    iconBg: "bg-blue-50 dark:bg-blue-500/15",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Certificates",
    value: "3",
    growth: "+1 this month",
    trend: "up",
    iconKey: "certificates",
    iconBg: "bg-emerald-50 dark:bg-emerald-500/15",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Due Soon",
    value: "2",
    growth: "This week",
    trend: "neutral",
    iconKey: "deadlines",
    iconBg: "bg-amber-50 dark:bg-amber-500/15",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
]

export const learningProgressData = [
  { week: "W1", hours: 4, progress: 62 },
  { week: "W2", hours: 6, progress: 65 },
  { week: "W3", hours: 5, progress: 68 },
  { week: "W4", hours: 8, progress: 72 },
  { week: "W5", hours: 7, progress: 74 },
  { week: "W6", hours: 9, progress: 76 },
  { week: "W7", hours: 6, progress: 78 },
  { week: "W8", hours: 8, progress: 78 },
]

export const streakCalendar = [
  { day: "Mon", active: true },
  { day: "Tue", active: true },
  { day: "Wed", active: true },
  { day: "Thu", active: false },
  { day: "Fri", active: true },
  { day: "Sat", active: true },
  { day: "Sun", active: true },
]

export const enrolledCourses = [
  { id: 1, title: "React Advanced Patterns", category: "Technology", progress: 92, modules: 12, completedModules: 11, dueDate: "May 28, 2026", instructor: "Marcus Webb", status: "in-progress", thumbnail: "react" },
  { id: 2, title: "Security Awareness 2025", category: "Compliance", progress: 100, modules: 8, completedModules: 8, dueDate: "Completed", instructor: "Priya Sharma", status: "completed", thumbnail: "security" },
  { id: 3, title: "Leadership Fundamentals", category: "Leadership", progress: 65, modules: 10, completedModules: 6, dueDate: "Jun 5, 2026", instructor: "Dr. Amanda Foster", status: "in-progress", thumbnail: "leadership" },
  { id: 4, title: "Data Privacy Essentials", category: "Compliance", progress: 100, modules: 5, completedModules: 5, dueDate: "Completed", instructor: "Priya Sharma", status: "completed", thumbnail: "privacy" },
  { id: 5, title: "Effective Communication", category: "Soft Skills", progress: 34, modules: 6, completedModules: 2, dueDate: "Jun 12, 2026", instructor: "Tom Bradley", status: "in-progress", thumbnail: "communication" },
]

export const certificates = [
  { id: 1, course: "Security Awareness 2025", issued: "Apr 15, 2026", credentialId: "CERT-SA-2025-8842", status: "earned" },
  { id: 2, course: "Data Privacy Essentials", issued: "Mar 2, 2026", credentialId: "CERT-DP-2026-1204", status: "earned" },
  { id: 3, course: "Leadership Fundamentals", issued: "In progress", credentialId: "—", status: "pending" },
]

export const upcomingDeadlines = [
  { id: 1, course: "React Advanced Patterns", task: "Final project submission", dueDate: "May 28, 2026", daysLeft: 7, priority: "high" },
  { id: 2, course: "Effective Communication", task: "Module 3 quiz", dueDate: "May 24, 2026", daysLeft: 3, priority: "high" },
  { id: 3, course: "Leadership Fundamentals", task: "Peer review assignment", dueDate: "Jun 5, 2026", daysLeft: 15, priority: "medium" },
]

export const recommendedCourses = [
  { id: 101, title: "TypeScript Mastery", category: "Technology", duration: "6h", rating: 4.9, learners: 2400, match: 96 },
  { id: 102, title: "Agile for Developers", category: "Technology", duration: "4h", rating: 4.7, learners: 1800, match: 88 },
  { id: 103, title: "Inclusive Leadership", category: "Leadership", duration: "5h", rating: 4.8, learners: 920, match: 85 },
  { id: 104, title: "AI Ethics in the Workplace", category: "Compliance", duration: "3h", rating: 4.6, learners: 3100, match: 82 },
]

export const activityTimeline = [
  { id: 1, title: "Completed lesson", description: "Finished Module 11: Custom Hooks in React Advanced Patterns", time: "2 hrs ago", type: "lesson" },
  { id: 2, title: "Quiz passed", description: "Scored 94% on Security Awareness final quiz", time: "Yesterday", type: "quiz" },
  { id: 3, title: "Certificate earned", description: "Data Privacy Essentials credential issued", time: "Mar 2", type: "certificate" },
  { id: 4, title: "Streak milestone", description: "12-day learning streak — keep it going!", time: "Yesterday", type: "streak" },
  { id: 5, title: "Course enrolled", description: "Joined Effective Communication cohort", time: "2 weeks ago", type: "enrollment" },
  { id: 6, title: "Achievement unlocked", description: "Earned Fast Learner badge", time: "3 weeks ago", type: "achievement" },
]

export const achievements = [
  { id: 1, title: "Fast Learner", description: "Complete 3 modules in one week", iconKey: "zap", earned: true, earnedDate: "Apr 2026" },
  { id: 2, title: "Compliance Champion", description: "Earn 2 compliance certificates", iconKey: "shield", earned: true, earnedDate: "Mar 2026" },
  { id: 3, title: "Streak Master", description: "Maintain a 14-day learning streak", iconKey: "flame", earned: false, progress: 86 },
  { id: 4, title: "Course Completer", description: "Finish 5 enrolled courses", iconKey: "trophy", earned: false, progress: 60 },
  { id: 5, title: "Top Performer", description: "Score 90%+ on 3 assessments", iconKey: "star", earned: true, earnedDate: "Feb 2026" },
  { id: 6, title: "Explorer", description: "Enroll in courses from 4 categories", iconKey: "compass", earned: false, progress: 75 },
]

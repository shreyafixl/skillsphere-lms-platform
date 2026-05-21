export const trainerCopy = {
  roleLabel: "Trainer",
  searchPlaceholder: "Search courses, students, sessions...",
  dashboardHeading: "Trainer Dashboard",
  dashboardDescription:
    "Manage assigned courses, track learner progress, run sessions, and review submissions.",
  settingsDescription:
    "Update your trainer profile, availability, and notification preferences.",
  specialtyLabel: "Technical Skills",
}

export const trainerInfo = {
  name: trainerCopy.specialtyLabel,
  plan: "Senior Trainer",
  admin: "Marcus Webb",
  rating: 4.8,
  totalStudents: 112,
}

export const overviewStats = [
  {
    title: "Assigned Courses",
    value: "6",
    growth: "+1",
    trend: "up",
    iconKey: "courses",
    iconBg: "bg-violet-50 dark:bg-violet-500/15",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    title: "Active Students",
    value: "112",
    growth: "+8",
    trend: "up",
    iconKey: "students",
    iconBg: "bg-blue-50 dark:bg-blue-500/15",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Avg. Completion",
    value: "81%",
    growth: "+4.1%",
    trend: "up",
    iconKey: "completion",
    iconBg: "bg-emerald-50 dark:bg-emerald-500/15",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Upcoming Sessions",
    value: "5",
    growth: "This week",
    trend: "neutral",
    iconKey: "sessions",
    iconBg: "bg-fuchsia-50 dark:bg-fuchsia-500/15",
    iconColor: "text-fuchsia-600 dark:text-fuchsia-400",
  },
]

export const learnerAnalyticsData = [
  { month: "Jan", active: 78, completions: 22 },
  { month: "Feb", active: 82, completions: 28 },
  { month: "Mar", active: 88, completions: 31 },
  { month: "Apr", active: 94, completions: 35 },
  { month: "May", active: 102, completions: 38 },
  { month: "Jun", active: 108, completions: 42 },
  { month: "Jul", active: 112, completions: 48 },
  { month: "Aug", active: 112, completions: 52 },
]

export const assignedCourses = [
  { id: 1, title: "React Advanced Patterns", category: "Technology", students: 42, completion: 67, modules: 12, status: "live", nextSession: "May 22, 2026" },
  { id: 2, title: "Security Awareness 2025", category: "Compliance", students: 86, completion: 94, modules: 8, status: "live", nextSession: "May 21, 2026" },
  { id: 3, title: "Cloud Architecture AWS", category: "Technology", students: 28, completion: 54, modules: 14, status: "live", nextSession: "May 25, 2026" },
  { id: 4, title: "Effective Communication", category: "Soft Skills", students: 34, completion: 41, modules: 6, status: "draft", nextSession: "—" },
  { id: 5, title: "Data Privacy Essentials", category: "Compliance", students: 56, completion: 100, modules: 5, status: "completed", nextSession: "—" },
  { id: 6, title: "Leadership Fundamentals", category: "Leadership", students: 18, completion: 72, modules: 10, status: "live", nextSession: "May 23, 2026" },
]

export const students = [
  { id: 1, name: "Sarah Chen", email: "sarah.chen@company.com", course: "React Advanced Patterns", progress: 92, lastSubmission: "2 hrs ago", status: "active" },
  { id: 2, name: "Alex Kim", email: "alex.kim@company.com", course: "React Advanced Patterns", progress: 34, lastSubmission: "5 days ago", status: "at-risk" },
  { id: 3, name: "Ryan Cooper", email: "ryan.c@company.com", course: "Cloud Architecture AWS", progress: 71, lastSubmission: "Yesterday", status: "active" },
  { id: 4, name: "Emily Davis", email: "emily.d@company.com", course: "Security Awareness 2025", progress: 100, lastSubmission: "Today", status: "completed" },
  { id: 5, name: "David Lee", email: "david.lee@company.com", course: "Leadership Fundamentals", progress: 88, lastSubmission: "4 hrs ago", status: "active" },
  { id: 6, name: "Lisa Park", email: "lisa.p@company.com", course: "Effective Communication", progress: 45, lastSubmission: "3 days ago", status: "pending" },
  { id: 7, name: "James Wilson", email: "james.w@company.com", course: "Cloud Architecture AWS", progress: 62, lastSubmission: "1 day ago", status: "active" },
  { id: 8, name: "Maria Garcia", email: "maria.g@company.com", course: "Security Awareness 2025", progress: 95, lastSubmission: "30 min ago", status: "active" },
]

export const sessions = [
  { id: 1, title: "React Hooks Deep Dive", course: "React Advanced Patterns", date: "May 21, 2026", time: "10:00 AM", duration: "90 min", attendees: 28, format: "Live", status: "scheduled" },
  { id: 2, title: "Security Q&A Workshop", course: "Security Awareness 2025", date: "May 22, 2026", time: "2:00 PM", duration: "60 min", attendees: 42, format: "Live", status: "scheduled" },
  { id: 3, title: "AWS Lab Session", course: "Cloud Architecture AWS", date: "May 23, 2026", time: "11:00 AM", duration: "120 min", attendees: 18, format: "Lab", status: "scheduled" },
  { id: 4, title: "Leadership Role-play", course: "Leadership Fundamentals", date: "May 20, 2026", time: "3:00 PM", duration: "75 min", attendees: 14, format: "Workshop", status: "completed" },
  { id: 5, title: "Communication Practice", course: "Effective Communication", date: "May 28, 2026", time: "9:00 AM", duration: "60 min", attendees: 0, format: "Live", status: "draft" },
]

export const upcomingClasses = [
  { id: 1, course: "React Advanced Patterns", topic: "React Hooks Deep Dive", date: "May 21, 2026", time: "10:00 AM", room: "Virtual · Zoom", learners: 28 },
  { id: 2, course: "Security Awareness 2025", topic: "Security Q&A Workshop", date: "May 22, 2026", time: "2:00 PM", room: "Room 204", learners: 42 },
  { id: 3, course: "Cloud Architecture AWS", topic: "AWS Lab Session", date: "May 23, 2026", time: "11:00 AM", room: "Lab B", learners: 18 },
  { id: 4, course: "Leadership Fundamentals", topic: "Coaching Circles", date: "May 24, 2026", time: "1:00 PM", room: "Virtual · Teams", learners: 12 },
]

export const announcements = [
  { id: 1, title: "Module 4 materials available", message: "New React patterns cheat sheet uploaded for Advanced Patterns cohort.", course: "React Advanced Patterns", posted: "2 hrs ago", pinned: true },
  { id: 2, title: "Deadline reminder", message: "Security Awareness quiz due Friday for all enrolled learners.", course: "Security Awareness 2025", posted: "Yesterday", pinned: false },
  { id: 3, title: "Session rescheduled", message: "AWS Lab moved to May 23 at 11:00 AM. Calendar invites sent.", course: "Cloud Architecture AWS", posted: "2 days ago", pinned: false },
]

export const recentSubmissions = [
  { id: 1, student: "Sarah Chen", course: "React Advanced Patterns", assignment: "Custom Hooks Project", submitted: "2 hrs ago", score: 94, status: "graded" },
  { id: 2, student: "Maria Garcia", course: "Security Awareness 2025", assignment: "Compliance Quiz", submitted: "30 min ago", score: 98, status: "graded" },
  { id: 3, student: "Alex Kim", course: "React Advanced Patterns", assignment: "State Management Lab", submitted: "Yesterday", score: null, status: "pending" },
  { id: 4, student: "Ryan Cooper", course: "Cloud Architecture AWS", assignment: "VPC Architecture Diagram", submitted: "Yesterday", score: 87, status: "graded" },
  { id: 5, student: "Lisa Park", course: "Effective Communication", assignment: "Presentation Recording", submitted: "3 days ago", score: null, status: "pending" },
  { id: 6, student: "David Lee", course: "Leadership Fundamentals", assignment: "360 Feedback Reflection", submitted: "4 hrs ago", score: 91, status: "graded" },
]

export const trainerActivities = [
  { id: 1, title: "Submission received", description: "Sarah Chen submitted Custom Hooks Project", time: "12 min ago", type: "submission" },
  { id: 2, title: "Session completed", description: "Leadership Role-play with 14 attendees", time: "1 hr ago", type: "session" },
  { id: 3, title: "Material uploaded", description: "Module 4 resources added to React Advanced Patterns", time: "2 hrs ago", type: "upload" },
  { id: 4, title: "Announcement posted", description: "Deadline reminder sent to Security cohort", time: "Yesterday", type: "announcement" },
  { id: 5, title: "Learner completed course", description: "Emily Davis finished Security Awareness 2025", time: "Yesterday", type: "completion" },
]

export const courseCategories = [
  "Technology",
  "Leadership",
  "Compliance",
  "Sales",
  "Soft Skills",
]

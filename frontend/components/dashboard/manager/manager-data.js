export const managerCopy = {
  roleLabel: "Manager",
  searchPlaceholder: "Search team members, courses, reports...",
  dashboardHeading: "Team Dashboard",
  dashboardDescription:
    "Monitor team performance, learning progress, and upcoming deadlines across your department.",
  settingsDescription:
    "Manage your manager profile and team notification preferences.",
  departmentLabel: "Engineering",
}

export const managerInfo = {
  name: managerCopy.departmentLabel,
  plan: "Team Lead",
  admin: "Jordan Mitchell",
  teamSize: 24,
}

export const overviewStats = [
  {
    title: "Team Members",
    value: "24",
    growth: "+2",
    trend: "up",
    iconKey: "team",
    iconBg: "bg-blue-50 dark:bg-blue-500/15",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Avg. Progress",
    value: "78%",
    growth: "+5.2%",
    trend: "up",
    iconKey: "progress",
    iconBg: "bg-violet-50 dark:bg-violet-500/15",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    title: "Courses Completed",
    value: "186",
    growth: "+14",
    trend: "up",
    iconKey: "completed",
    iconBg: "bg-emerald-50 dark:bg-emerald-500/15",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Due This Week",
    value: "6",
    growth: "2 urgent",
    trend: "neutral",
    iconKey: "deadlines",
    iconBg: "bg-amber-50 dark:bg-amber-500/15",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
]

export const teamPerformanceChartData = [
  { month: "Jan", progress: 62, completions: 18 },
  { month: "Feb", progress: 65, completions: 22 },
  { month: "Mar", progress: 68, completions: 24 },
  { month: "Apr", progress: 71, completions: 28 },
  { month: "May", progress: 74, completions: 31 },
  { month: "Jun", progress: 76, completions: 34 },
  { month: "Jul", progress: 78, completions: 38 },
  { month: "Aug", progress: 78, completions: 42 },
]

export const departmentAnalytics = [
  { department: "Engineering", completion: 84, enrolled: 24, avgProgress: 82 },
  { department: "QA", completion: 91, enrolled: 8, avgProgress: 88 },
  { department: "DevOps", completion: 76, enrolled: 6, avgProgress: 74 },
  { department: "Platform", completion: 79, enrolled: 10, avgProgress: 77 },
]

export const courseCompletionStats = [
  { course: "Security Awareness 2025", assigned: 24, completed: 23, rate: 96, status: "active" },
  { course: "React Advanced Patterns", assigned: 18, completed: 12, rate: 67, status: "active" },
  { course: "Leadership Fundamentals", assigned: 12, completed: 9, rate: 75, status: "active" },
  { course: "Data Privacy Essentials", assigned: 24, completed: 24, rate: 100, status: "completed" },
  { course: "Effective Communication", assigned: 20, completed: 8, rate: 40, status: "active" },
]

export const teamMembers = [
  { id: 1, name: "Sarah Chen", email: "sarah.chen@company.com", role: "Senior Developer", progress: 92, courses: 4, status: "active", lastActive: "2 hrs ago" },
  { id: 2, name: "Alex Kim", email: "alex.kim@company.com", role: "QA Engineer", progress: 34, courses: 2, status: "at-risk", lastActive: "5 days ago" },
  { id: 3, name: "Ryan Cooper", email: "ryan.c@company.com", role: "DevOps Engineer", progress: 71, courses: 3, status: "active", lastActive: "Yesterday" },
  { id: 4, name: "Emily Davis", email: "emily.d@company.com", role: "Frontend Developer", progress: 65, courses: 3, status: "active", lastActive: "4 hrs ago" },
  { id: 5, name: "David Lee", email: "david.lee@company.com", role: "Backend Developer", progress: 88, courses: 4, status: "active", lastActive: "1 hr ago" },
  { id: 6, name: "Lisa Park", email: "lisa.p@company.com", role: "Junior Developer", progress: 45, courses: 2, status: "pending", lastActive: "3 days ago" },
  { id: 7, name: "James Wilson", email: "james.w@company.com", role: "Platform Engineer", progress: 78, courses: 3, status: "active", lastActive: "Today" },
  { id: 8, name: "Maria Garcia", email: "maria.g@company.com", role: "Tech Lead", progress: 100, courses: 5, status: "active", lastActive: "30 min ago" },
]

export const assignedLearners = teamMembers

export const teamActivities = [
  { id: 1, title: "Course completed", description: "Sarah Chen completed Security Awareness 2025", time: "12 min ago", type: "completion" },
  { id: 2, title: "Progress milestone", description: "Maria Garcia reached 100% on Leadership Fundamentals", time: "45 min ago", type: "progress" },
  { id: 3, title: "Deadline reminder", description: "React Advanced Patterns due in 3 days for 6 learners", time: "2 hrs ago", type: "deadline" },
  { id: 4, title: "Report ready", description: "Team Performance Summary for May is available", time: "4 hrs ago", type: "report" },
  { id: 5, title: "Learner at risk", description: "Alex Kim has not logged in for 5 days", time: "Yesterday", type: "alert" },
  { id: 6, title: "Course assigned", description: "Effective Communication assigned to Platform squad", time: "Yesterday", type: "assignment" },
]

export const upcomingDeadlines = [
  { id: 1, course: "React Advanced Patterns", learners: 6, dueDate: "May 24, 2026", daysLeft: 3, priority: "high" },
  { id: 2, course: "Leadership Fundamentals", learners: 4, dueDate: "May 28, 2026", daysLeft: 7, priority: "medium" },
  { id: 3, course: "Effective Communication", learners: 12, dueDate: "Jun 5, 2026", daysLeft: 15, priority: "medium" },
  { id: 4, course: "Security Awareness 2025", learners: 1, dueDate: "Jun 10, 2026", daysLeft: 20, priority: "low" },
]

export const reports = [
  { id: 1, name: "Team Performance Summary", description: "Progress, completions, and engagement for your direct reports", type: "Performance", updated: "May 20, 2026", size: "1.8 MB" },
  { id: 2, name: "Department Completion Report", description: "Course completion rates by squad and role", type: "Analytics", updated: "May 18, 2026", size: "2.1 MB" },
  { id: 3, name: "At-Risk Learners", description: "Team members behind schedule or inactive", type: "Engagement", updated: "May 17, 2026", size: "640 KB" },
  { id: 4, name: "Monthly Learning Export", description: "Enrollments, time spent, and quiz scores", type: "Analytics", updated: "May 1, 2026", size: "3.2 MB" },
]

export const courseCatalog = [
  "Security Awareness 2025",
  "React Advanced Patterns",
  "Leadership Fundamentals",
  "Data Privacy Essentials",
  "Effective Communication",
]

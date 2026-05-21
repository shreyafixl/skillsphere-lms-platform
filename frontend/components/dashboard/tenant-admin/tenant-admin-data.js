export const tenantAdminCopy = {
  roleLabel: "Tenant Admin",
  searchPlaceholder: "Search employees, trainers, courses...",
  dashboardHeading: "Dashboard",
  dashboardDescription:
    "Manage employees, trainers, courses, and learning operations across your organization.",
  settingsDescription:
    "Configure organization profile and learning preferences for your tenant workspace.",
  organizationLabel: "Your Organization",
}

export const tenantInfo = {
  name: tenantAdminCopy.organizationLabel,
  plan: "Enterprise",
  admin: "Tenant Administrator",
}

export const overviewStats = [
  {
    title: "Total Employees",
    value: "248",
    growth: "+8.4%",
    trend: "up",
    iconKey: "users",
    iconBg: "bg-blue-50 dark:bg-blue-500/15",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Active Trainers",
    value: "18",
    growth: "+2",
    trend: "up",
    iconKey: "trainers",
    iconBg: "bg-violet-50 dark:bg-violet-500/15",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    title: "Courses Assigned",
    value: "36",
    growth: "+5",
    trend: "up",
    iconKey: "courses",
    iconBg: "bg-fuchsia-50 dark:bg-fuchsia-500/15",
    iconColor: "text-fuchsia-600 dark:text-fuchsia-400",
  },
  {
    title: "Avg. Completion",
    value: "84%",
    growth: "+6.2%",
    trend: "up",
    iconKey: "completion",
    iconBg: "bg-emerald-50 dark:bg-emerald-500/15",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
]

export const learningChartData = [
  { month: "Jan", enrollments: 42, completions: 28 },
  { month: "Feb", enrollments: 58, completions: 41 },
  { month: "Mar", enrollments: 51, completions: 39 },
  { month: "Apr", enrollments: 72, completions: 58 },
  { month: "May", enrollments: 68, completions: 54 },
  { month: "Jun", enrollments: 84, completions: 71 },
  { month: "Jul", enrollments: 91, completions: 78 },
  { month: "Aug", enrollments: 88, completions: 74 },
]

export const employees = [
  { id: 1, name: "Sarah Chen", email: "sarah.chen@company.com", department: "Engineering", role: "Developer", status: "active", progress: 92, courses: 4 },
  { id: 2, name: "James Wilson", email: "james.w@company.com", department: "Sales", role: "Account Executive", status: "active", progress: 78, courses: 3 },
  { id: 3, name: "Maria Garcia", email: "maria.g@company.com", department: "HR", role: "HR Specialist", status: "active", progress: 100, courses: 5 },
  { id: 4, name: "Alex Kim", email: "alex.kim@company.com", department: "Engineering", role: "QA Engineer", status: "inactive", progress: 34, courses: 2 },
  { id: 5, name: "Emily Davis", email: "emily.d@company.com", department: "Marketing", role: "Content Lead", status: "active", progress: 65, courses: 3 },
  { id: 6, name: "David Lee", email: "david.lee@company.com", department: "Operations", role: "Ops Manager", status: "active", progress: 88, courses: 4 },
  { id: 7, name: "Lisa Park", email: "lisa.p@company.com", department: "Finance", role: "Analyst", status: "pending", progress: 12, courses: 1 },
  { id: 8, name: "Ryan Cooper", email: "ryan.c@company.com", department: "Engineering", role: "DevOps", status: "active", progress: 71, courses: 3 },
]

export const trainers = [
  { id: 1, name: "Dr. Amanda Foster", email: "a.foster@company.com", specialty: "Leadership", courses: 6, learners: 84, rating: 4.9, status: "active" },
  { id: 2, name: "Marcus Webb", email: "m.webb@company.com", specialty: "Technical Skills", courses: 8, learners: 112, rating: 4.8, status: "active" },
  { id: 3, name: "Priya Sharma", email: "p.sharma@company.com", specialty: "Compliance", courses: 4, learners: 56, rating: 4.7, status: "active" },
  { id: 4, name: "Tom Bradley", email: "t.bradley@company.com", specialty: "Soft Skills", courses: 5, learners: 67, rating: 4.6, status: "active" },
  { id: 5, name: "Nina Okonkwo", email: "n.okonkwo@company.com", specialty: "Sales Enablement", courses: 3, learners: 41, rating: 4.8, status: "away" },
]

export const courseAssignments = [
  { id: 1, course: "Security Awareness 2025", trainer: "Priya Sharma", assigned: 248, completed: 231, dueDate: "Jun 15, 2025", status: "active" },
  { id: 2, course: "React Advanced Patterns", trainer: "Marcus Webb", assigned: 42, completed: 28, dueDate: "Jul 1, 2025", status: "active" },
  { id: 3, course: "Leadership Fundamentals", trainer: "Dr. Amanda Foster", assigned: 86, completed: 72, dueDate: "May 30, 2025", status: "active" },
  { id: 4, course: "Sales Playbook Q2", trainer: "Nina Okonkwo", assigned: 34, completed: 19, dueDate: "Jun 20, 2025", status: "active" },
  { id: 5, course: "Data Privacy Essentials", trainer: "Priya Sharma", assigned: 248, completed: 198, dueDate: "Apr 28, 2025", status: "completed" },
  { id: 6, course: "Effective Communication", trainer: "Tom Bradley", assigned: 120, completed: 45, dueDate: "Aug 10, 2025", status: "draft" },
]

export const tenantActivities = [
  { id: 1, title: "Course completed", description: "Sarah Chen completed Security Awareness 2025", time: "5 min ago", type: "completion" },
  { id: 2, title: "New assignment", description: "React Advanced Patterns assigned to Engineering", time: "32 min ago", type: "assignment" },
  { id: 3, title: "Trainer added", description: "Nina Okonkwo joined as Sales trainer", time: "2 hrs ago", type: "trainer" },
  { id: 4, title: "Report generated", description: "Q2 Compliance Summary exported", time: "4 hrs ago", type: "report" },
  { id: 5, title: "Employee invited", description: "Lisa Park invited to Finance onboarding", time: "Yesterday", type: "employee" },
]

export const reports = [
  { id: 1, name: "Learning Progress Summary", description: "Completion rates and progress by department", type: "Analytics", updated: "May 20, 2025", size: "2.4 MB" },
  { id: 2, name: "Compliance Audit Report", description: "Mandatory training status across the organization", type: "Compliance", updated: "May 18, 2025", size: "1.8 MB" },
  { id: 3, name: "Trainer Performance", description: "Ratings, course load, and learner feedback", type: "Performance", updated: "May 15, 2025", size: "956 KB" },
  { id: 4, name: "Course Engagement", description: "Time spent, drop-off points, and quiz scores", type: "Engagement", updated: "May 12, 2025", size: "3.1 MB" },
  { id: 5, name: "Monthly Enrollment", description: "New enrollments and active learners trend", type: "Analytics", updated: "May 1, 2025", size: "1.2 MB" },
]
